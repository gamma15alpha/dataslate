FROM gradle:9.5.0-jdk21 AS build
WORKDIR /workspace

# Layer: dependency resolution (invalidated only when build files change)
COPY gradle/ gradle/
COPY settings.gradle.kts build.gradle.kts ./
COPY engine/build.gradle.kts engine/
COPY core-model/build.gradle.kts core-model/
COPY systems/dh1/build.gradle.kts systems/dh1/
COPY backend/build.gradle.kts backend/
RUN gradle dependencies --no-daemon -q --continue || true

# Layer: source compilation
COPY engine/src engine/src
COPY core-model/src core-model/src
COPY systems/dh1/src systems/dh1/src
COPY backend/src backend/src
RUN gradle :backend:installDist --no-daemon

FROM eclipse-temurin:21-jre-alpine
WORKDIR /app
COPY --from=build /workspace/backend/build/install/backend .
EXPOSE 8080
ENTRYPOINT ["bin/backend"]

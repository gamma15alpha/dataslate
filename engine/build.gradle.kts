plugins {
    alias(libs.plugins.kotlin.multiplatform)
    alias(libs.plugins.kotlin.serialization)
}

kotlin {
    jvm()
    js(IR) {
        browser()
        binaries.library()          // генерирует npm-пакет в build/js-engine
    }

    sourceSets {
        commonMain.dependencies {
            implementation(libs.kotlinx.serialization.json)
            implementation(libs.kotlinx.coroutines.core)
            implementation(libs.kotlinx.datetime)
        }
        commonTest.dependencies {
            implementation(libs.kotlin.test)
        }
    }
}

// Sync JS library to root build/js-engine/ so frontend/package.json can resolve it
tasks.register<Sync>("syncJsEngine") {
    dependsOn("jsBrowserProductionLibrary")
    // Default KMP JS IR output path; verify after first build if this fails
    from(layout.buildDirectory.dir("dist/js/productionLibrary"))
    into(rootProject.layout.buildDirectory.dir("js-engine"))
}
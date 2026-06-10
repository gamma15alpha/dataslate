package space.seydlitz

import io.ktor.server.application.*
import io.ktor.server.websocket.*
import kotlin.time.Duration.Companion.seconds

fun Application.configureWebsockets() {
    install(WebSockets) {
        pingPeriod = 30.seconds
        timeout = 60.seconds
    }
}

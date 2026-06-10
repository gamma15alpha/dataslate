import { isTMA, init, initData, miniApp, retrieveLaunchParams } from '@tma.js/sdk'
import { useSignal } from '@tma.js/sdk-vue'
import type { LaunchParams } from '@tma.js/types'

let sdkReady = false

function ensureSDK(): boolean {
  if (!isTMA()) return false
  if (sdkReady) return true
  try {
    init()
    initData.restore()
    miniApp.mount()
    miniApp.ready()
    sdkReady = true
    return true
  } catch (e) {
    console.error('[TG SDK] init failed', e)
    return false
  }
}

export interface TelegramData {
  inTelegram: boolean
  launchParams: LaunchParams | null
  user:         ReturnType<typeof useSignal<ReturnType<typeof initData.user>>>
  chat:         ReturnType<typeof useSignal<ReturnType<typeof initData.chat>>>
  startParam:   ReturnType<typeof useSignal<ReturnType<typeof initData.startParam>>>
  authDate:     ReturnType<typeof useSignal<ReturnType<typeof initData.authDate>>>
  queryId:      ReturnType<typeof useSignal<ReturnType<typeof initData.queryId>>>
  chatType:     ReturnType<typeof useSignal<ReturnType<typeof initData.chatType>>>
  chatInstance: ReturnType<typeof useSignal<ReturnType<typeof initData.chatInstance>>>
}

export function useTelegram(): TelegramData {
  const inTelegram = ensureSDK()

  // useSignal calls are unconditional — safe because initData signals always exist,
  // they just return undefined until restore() is called.
  const user         = useSignal(initData.user)
  const chat         = useSignal(initData.chat)
  const startParam   = useSignal(initData.startParam)
  const authDate     = useSignal(initData.authDate)
  const queryId      = useSignal(initData.queryId)
  const chatType     = useSignal(initData.chatType)
  const chatInstance = useSignal(initData.chatInstance)

  return {
    inTelegram,
    launchParams: inTelegram ? retrieveLaunchParams() : null,
    user,
    chat,
    startParam,
    authDate,
    queryId,
    chatType,
    chatInstance,
  }
}

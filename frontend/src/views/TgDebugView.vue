<script setup lang="ts">
import { computed } from 'vue'
import {
  NAlert, NCard, NDescriptions, NDescriptionsItem,
  NSpace, NTag, NText,
} from 'naive-ui'
import { useTelegram } from '../telegram/useTelegram'
import { tokens } from '../app/theme/tokens'

const tg = useTelegram()

const authDateStr = computed(() =>
  tg.authDate.value?.toLocaleString('ru-RU') ?? '—'
)

const headingStyle = {
  fontFamily:    tokens.font.display,
  fontSize:      '11px',
  letterSpacing: '0.14em',
  color:         tokens.accent.red,
  margin:        '0 0 12px',
  textTransform: 'uppercase' as const,
}

const labelStyle = { width: '130px', color: tokens.text.muted }
</script>

<template>
  <div style="padding: 16px; min-height: 100dvh;">
    <NAlert
      v-if="!tg.inTelegram"
      type="warning"
      :bordered="false"
    >
      <template #header>
        <span :style="{ fontFamily: tokens.font.display, letterSpacing: '0.1em', fontSize: '12px' }">
          ОКРУЖЕНИЕ НЕ РАСПОЗНАНО
        </span>
      </template>
      Откройте приложение через Telegram Mini App.
    </NAlert>

    <template v-else>
      <h2 :style="headingStyle">Датаслейт // Диагностика</h2>

      <NSpace vertical :size="10">
        <!-- Оператор -->
        <NCard v-if="tg.user.value" title="Оператор" size="small">
          <NDescriptions label-placement="left" :column="1" size="small" :label-style="labelStyle">
            <NDescriptionsItem label="ID">
              <NText code>{{ tg.user.value.id }}</NText>
            </NDescriptionsItem>
            <NDescriptionsItem label="Имя">
              {{ tg.user.value.first_name }}{{ tg.user.value.last_name ? ' ' + tg.user.value.last_name : '' }}
            </NDescriptionsItem>
            <NDescriptionsItem v-if="tg.user.value.username" label="Username">
              @{{ tg.user.value.username }}
            </NDescriptionsItem>
            <NDescriptionsItem v-if="tg.user.value.language_code" label="Язык">
              {{ tg.user.value.language_code }}
            </NDescriptionsItem>
            <NDescriptionsItem label="Premium">
              <NTag size="small" :type="tg.user.value.is_premium ? 'warning' : 'default'" :bordered="false">
                {{ tg.user.value.is_premium ? 'Да' : 'Нет' }}
              </NTag>
            </NDescriptionsItem>
            <NDescriptionsItem v-if="tg.user.value.is_bot" label="Бот">
              <NTag size="small" type="info" :bordered="false">Да</NTag>
            </NDescriptionsItem>
          </NDescriptions>
        </NCard>

        <!-- Сессия -->
        <NCard title="Сессия" size="small">
          <NDescriptions label-placement="left" :column="1" size="small" :label-style="labelStyle">
            <NDescriptionsItem label="Auth date">{{ authDateStr }}</NDescriptionsItem>
            <NDescriptionsItem v-if="tg.queryId.value" label="Query ID">
              <NText code>{{ tg.queryId.value }}</NText>
            </NDescriptionsItem>
            <NDescriptionsItem v-if="tg.chatType.value" label="Тип чата">
              {{ tg.chatType.value }}
            </NDescriptionsItem>
            <NDescriptionsItem v-if="tg.chatInstance.value" label="Chat instance">
              <NText code>{{ tg.chatInstance.value }}</NText>
            </NDescriptionsItem>
          </NDescriptions>
        </NCard>

        <!-- Чат -->
        <NCard v-if="tg.chat.value" title="Чат" size="small">
          <NDescriptions label-placement="left" :column="1" size="small" :label-style="labelStyle">
            <NDescriptionsItem label="ID">
              <NText code>{{ tg.chat.value.id }}</NText>
            </NDescriptionsItem>
            <NDescriptionsItem label="Тип">{{ tg.chat.value.type }}</NDescriptionsItem>
            <NDescriptionsItem label="Название">{{ tg.chat.value.title }}</NDescriptionsItem>
            <NDescriptionsItem v-if="tg.chat.value.username" label="Username">
              @{{ tg.chat.value.username }}
            </NDescriptionsItem>
          </NDescriptions>
        </NCard>

        <!-- Запуск -->
        <NCard v-if="tg.launchParams" title="Запуск" size="small">
          <NDescriptions label-placement="left" :column="1" size="small" :label-style="labelStyle">
            <NDescriptionsItem label="Платформа">
              {{ tg.launchParams.tgWebAppPlatform }}
            </NDescriptionsItem>
            <NDescriptionsItem label="Версия TMA">
              {{ tg.launchParams.tgWebAppVersion }}
            </NDescriptionsItem>
            <NDescriptionsItem v-if="tg.startParam.value" label="Start param">
              <NText code>{{ tg.startParam.value }}</NText>
            </NDescriptionsItem>
          </NDescriptions>
        </NCard>
      </NSpace>
    </template>
  </div>
</template>

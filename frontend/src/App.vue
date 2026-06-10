<script setup lang="ts">
import { NConfigProvider, NGlobalStyle, darkTheme } from 'naive-ui'
import { themeOverrides } from './app/theme'
import TgDebugView from './views/TgDebugView.vue'
</script>

<template>
  <NConfigProvider :theme="darkTheme" :theme-overrides="themeOverrides">
    <NGlobalStyle />
    <TgDebugView />
  </NConfigProvider>
</template>

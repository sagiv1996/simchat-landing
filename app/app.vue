<script setup lang="ts">
import { en, he } from '@nuxt/ui/locale'

const { locale } = useI18n()
const i18nHead = useLocaleHead()

const uiLocale = computed(() => (locale.value === 'he' ? he : en))

useHead(() => ({
  htmlAttrs: {
    lang: i18nHead.value.htmlAttrs?.lang,
    dir: i18nHead.value.htmlAttrs?.dir,
  },
  link: i18nHead.value.link,
  meta: i18nHead.value.meta,
}))
</script>

<template>
  <UApp :locale="uiLocale">
    <NuxtRouteAnnouncer />
    <AppHeader />
    <main>
      <NuxtPage />
    </main>
    <AppFooter />
    <WhatsAppFloat />
  </UApp>
</template>

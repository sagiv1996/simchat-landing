<script setup lang="ts">
import { en, he } from '@nuxt/ui/locale'

const { t, locale } = useI18n()
const i18nHead = useLocaleHead()

const uiLocale = computed(() => (locale.value === 'he' ? he : en))
const showHanukkah = isSeasonActive(hanukkah)

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
    <UBanner
      v-if="showHanukkah"
      :id="hanukkah.id"
      icon="i-lucide-sparkles"
      :title="t('hanukkah.banner')"
      :actions="[{ label: t('hanukkah.bannerAction'), to: '#hanukkah', color: 'neutral', variant: 'solid', size: 'xs' }]"
      close
      class="bg-[#14213d] text-white"
    />
    <AppHeader />
    <main class="overflow-x-clip">
      <NuxtPage />
    </main>
    <AppFooter />
    <WhatsAppFloat />
  </UApp>
</template>

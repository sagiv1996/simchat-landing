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
      :actions="[{ label: t('hanukkah.bannerAction'), to: '#hanukkah', color: 'neutral', variant: 'solid', size: 'xs', class: 'bg-amber-300 text-[#14213d] hover:bg-amber-200' }]"
      close
      :ui="{
        root: 'bg-[#14213d]',
        container: 'h-auto min-h-12 py-2',
        icon: 'text-amber-300',
        title: 'text-white whitespace-normal',
        close: 'text-white hover:bg-white/10 focus-visible:bg-white/10',
      }"
    />
    <AppHeader />
    <main class="overflow-x-clip">
      <NuxtPage />
    </main>
    <AppFooter />
    <WhatsAppFloat />
  </UApp>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const { t, locale } = useI18n()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()

const otherLocale = computed(() => (locale.value === 'he' ? 'en' : 'he'))

const sections = ['services', 'workshops', 'gallery', 'about', 'faq'] as const

const items = computed<NavigationMenuItem[]>(() =>
  sections.map(id => ({ label: t(`nav.${id}`), to: `${localePath('/')}#${id}` })),
)
</script>

<template>
  <UHeader :to="localePath('/')" :ui="{ root: 'bg-default/80 backdrop-blur' }">
    <template #title>
      <span class="font-display text-xl font-semibold tracking-tight text-highlighted">
        Molly's Candle
      </span>
    </template>

    <UNavigationMenu :items="items" variant="link" />

    <template #right>
      <UButton
        v-for="social in socials"
        :key="social.label"
        :to="social.href"
        target="_blank"
        :icon="social.icon"
        :aria-label="social.label"
        color="neutral"
        variant="ghost"
        class="hidden lg:inline-flex"
      />
      <UButton
        :to="switchLocalePath(otherLocale)"
        :aria-label="t('nav.switchLanguageLabel')"
        color="neutral"
        variant="ghost"
        icon="i-lucide-languages"
        :label="t('nav.switchLanguage')"
      />
      <UColorModeButton :aria-label="t('theme.toggle')" />
      <UButton
        :to="whatsappLink(t('whatsapp.general'))"
        target="_blank"
        icon="i-simple-icons-whatsapp"
        :label="t('nav.contact')"
        class="hidden sm:inline-flex"
      />
    </template>

    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
      <UButton
        :to="whatsappLink(t('whatsapp.general'))"
        target="_blank"
        icon="i-simple-icons-whatsapp"
        :label="t('nav.contact')"
        block
        size="lg"
        class="mt-6"
      />
      <div class="mt-4 flex gap-3">
        <UButton
          v-for="social in socials"
          :key="social.label"
          :to="social.href"
          target="_blank"
          :icon="social.icon"
          :label="social.label"
          color="neutral"
          variant="outline"
          class="flex-1 justify-center"
        />
      </div>
    </template>
  </UHeader>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const { t, locale } = useI18n()
const { business, whatsappLink } = useBusiness()

const activeSection = useActiveSection()

const otherLocale = computed(() => (locale.value === 'he' ? 'en' : 'he'))

const switchLanguageTo = computed(() => (activeSection.value ? `/#${activeSection.value}` : '/'))

const items = computed<NavigationMenuItem[]>(() =>
  navSections.map(id => ({
    label: t(`nav.${id}`),
    to: `/#${id}`,
    active: activeSection.value === id,
  })),
)
</script>

<template>
  <UHeader to="/" :ui="{ root: 'bg-default/80 backdrop-blur' }">
    <template #title>
      <span class="font-display text-xl font-semibold tracking-tight text-highlighted">
        Molly's Candle
      </span>
    </template>

    <UNavigationMenu :items="items" variant="link" />

    <template #right>
      <UButton
        v-for="social in business.socials"
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
        :to="switchLanguageTo"
        :locale="otherLocale"
        :aria-label="t('nav.switchLanguageLabel')"
        color="neutral"
        variant="ghost"
        icon="i-lucide-languages"
        :label="t('nav.switchLanguage')"
        @click="rememberLocale(otherLocale)"
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
          v-for="social in business.socials"
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

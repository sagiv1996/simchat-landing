<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'

const { t, locale } = useI18n()
const localePath = useLocalePath()
const activeSection = useActiveSection()

const current = computed(() => LOCALES.find(option => option.code === locale.value) ?? LOCALES[0])

async function switchTo(code: LocaleCode) {
  rememberLocale(code)
  const hash = activeSection.value ? `#${activeSection.value}` : ''
  await navigateTo(`${localePath('/', code)}${hash}`)
}

const items = computed<DropdownMenuItem[]>(() =>
  LOCALES.map(option => ({
    label: option.name,
    type: 'checkbox' as const,
    checked: option.code === locale.value,
    onSelect: () => switchTo(option.code),
  })),
)
</script>

<template>
  <UDropdownMenu :items="items" :content="{ align: 'end' }">
    <UButton
      color="neutral"
      variant="ghost"
      icon="i-lucide-languages"
      trailing-icon="i-lucide-chevron-down"
      :aria-label="t('nav.language')"
    >
      <span class="hidden sm:inline">{{ current.name }}</span>
    </UButton>
  </UDropdownMenu>
</template>

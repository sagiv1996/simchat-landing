<script setup lang="ts">
import type { AccordionItem } from '@nuxt/ui'

const { t } = useI18n()

const keys = ['where', 'ages', 'size', 'events', 'price', 'notice'] as const

const items = computed<AccordionItem[]>(() =>
  keys.map(key => ({
    value: key,
    label: t(`faq.items.${key}.q`),
    content: t(`faq.items.${key}.a`),
  })),
)

useHead(() => ({
  script: [{
    type: 'application/ld+json',
    key: 'faq-schema',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': items.value.map(item => ({
        '@type': 'Question',
        'name': item.label,
        'acceptedAnswer': { '@type': 'Answer', 'text': item.content },
      })),
    }),
  }],
}))
</script>

<template>
  <section id="faq" class="py-20 sm:py-28">
    <UContainer class="max-w-3xl">
      <SectionHeading :eyebrow="t('faq.eyebrow')" :title="t('faq.title')" />

      <div v-reveal="100" class="mt-12 rounded-3xl bg-elevated/40 px-6 ring-1 ring-default">
        <UAccordion
          :items="items"
          :ui="{ trigger: 'py-5 text-base font-semibold text-highlighted', body: 'pb-5 text-muted text-base' }"
        />
      </div>
    </UContainer>
  </section>
</template>

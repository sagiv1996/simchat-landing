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
  <section id="faq" class="py-14 sm:py-28">
    <UContainer class="max-w-3xl">
      <SectionHeading :eyebrow="t('faq.eyebrow')" :title="t('faq.title')" />

      <div v-reveal="100" class="mt-10 rounded-3xl bg-elevated/40 p-2 ring-1 ring-default md:mt-12 md:p-3">
        <UAccordion
          :items="items"
          :ui="{
            item: 'group border-default last:border-b-0',
            trigger: 'rounded-2xl px-4 py-5 text-base font-semibold text-highlighted transition-colors hover:bg-elevated hover:text-primary data-[state=open]:text-primary',
            trailingIcon: 'group-hover:text-primary',
            body: 'px-4 pb-5 text-base text-muted',
          }"
        />
      </div>
    </UContainer>
  </section>
</template>

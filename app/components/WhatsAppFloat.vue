<script setup lang="ts">
const { t } = useI18n()
const { whatsappLink } = useBusiness()

const { visible: nudgeVisible, dismiss } = useNudge({
  storageKey: 'mollys-candle:whatsapp-nudge',
  delayMs: 20_000,
  scrollRatio: 0.5,
})
</script>

<template>
  <div class="fixed bottom-5 end-5 z-50 flex flex-col items-end gap-3">
    <Transition
      enter-active-class="transition duration-300 ease-out motion-reduce:transition-none"
      enter-from-class="translate-y-3 scale-95 opacity-0"
      leave-active-class="transition duration-200 ease-in motion-reduce:transition-none"
      leave-to-class="translate-y-3 scale-95 opacity-0"
    >
      <div
        v-if="nudgeVisible"
        data-nudge
        role="status"
        class="relative w-72 max-w-[calc(100vw-2.5rem)] origin-bottom-right rounded-2xl bg-default p-4 shadow-2xl ring-1 ring-default rtl:origin-bottom-left"
      >
        <UButton
          icon="i-lucide-x"
          color="neutral"
          variant="ghost"
          size="xs"
          :aria-label="t('nudge.close')"
          class="absolute top-2 end-2"
          @click="dismiss"
        />

        <a
          :href="whatsappLink(t('whatsapp.general'))"
          target="_blank"
          rel="noopener"
          class="flex items-start gap-3 pe-6"
        >
          <span class="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
            <UIcon name="i-lucide-flame" class="size-5" />
          </span>
          <span>
            <span class="block font-semibold text-highlighted">{{ t('nudge.title') }}</span>
            <span class="mt-1 block text-sm text-muted">{{ t('nudge.text') }}</span>
            <span class="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-[#1a9e4b] dark:text-[#25D366]">
              <UIcon name="i-simple-icons-whatsapp" class="size-4" />
              {{ t('nudge.cta') }}
            </span>
          </span>
        </a>
      </div>
    </Transition>

    <a
      :href="whatsappLink(t('whatsapp.general'))"
      target="_blank"
      rel="noopener"
      :aria-label="t('whatsapp.floatingLabel')"
      class="flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
    >
      <UIcon name="i-simple-icons-whatsapp" class="size-7" />
    </a>
  </div>
</template>

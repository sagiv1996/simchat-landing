<script setup lang="ts">
const { t } = useI18n()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-default bg-muted">
    <UContainer class="flex flex-col items-center gap-6 py-10 text-center sm:flex-row sm:justify-between sm:text-start">
      <div>
        <p class="font-display text-xl font-semibold text-highlighted">
          Molly's Candle
        </p>
        <p class="mt-1 text-sm text-muted">
          {{ t('footer.tagline') }}
        </p>
      </div>

      <div class="flex items-center gap-1">
        <span class="sr-only">{{ t('footer.followUs') }}</span>
        <UButton
          v-for="social in socials"
          :key="social.label"
          :to="social.href"
          target="_blank"
          :icon="social.icon"
          :aria-label="social.label"
          color="neutral"
          variant="ghost"
        />
        <UButton
          :to="whatsappLink(t('whatsapp.general'))"
          target="_blank"
          icon="i-simple-icons-whatsapp"
          color="neutral"
          variant="ghost"
          aria-label="WhatsApp"
        />
        <UButton
          :to="`tel:${business.phoneE164}`"
          icon="i-lucide-phone"
          color="neutral"
          variant="ghost"
          :label="business.phoneDisplay"
          dir="ltr"
        />
      </div>
    </UContainer>

    <p class="pb-6 text-center text-xs text-dimmed">
      © {{ year }} {{ business.name }}. {{ t('footer.rights') }}
    </p>
  </footer>
</template>

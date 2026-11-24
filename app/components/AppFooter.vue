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
          :to="business.instagram"
          target="_blank"
          icon="i-simple-icons-instagram"
          color="neutral"
          variant="ghost"
          aria-label="Instagram"
        />
        <UButton
          :to="business.facebook"
          target="_blank"
          icon="i-simple-icons-facebook"
          color="neutral"
          variant="ghost"
          aria-label="Facebook"
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

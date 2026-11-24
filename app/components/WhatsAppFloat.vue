<script setup lang="ts">
const { t } = useI18n()
const { whatsappLink } = useBusiness()
</script>

<template>
  <a
    :href="whatsappLink(t('whatsapp.general'))"
    target="_blank"
    rel="noopener"
    :aria-label="t('whatsapp.floatingLabel')"
    class="fixed bottom-5 end-5 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
  >
    <UIcon name="i-simple-icons-whatsapp" class="size-7" />
  </a>
</template>

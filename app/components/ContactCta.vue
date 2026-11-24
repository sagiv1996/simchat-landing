<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <section id="contact" class="px-4 pb-14 sm:pb-28">
    <div
      v-reveal
      class="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-ember-600 to-ember-900 px-6 py-14 text-center text-white shadow-2xl shadow-primary/30 sm:px-12 sm:py-20"
    >
      <div
        aria-hidden="true"
        class="pointer-events-none absolute -top-24 start-1/2 size-72 -translate-x-1/2 rounded-full bg-amber-300/30 blur-3xl rtl:translate-x-1/2"
      />

      <UIcon name="i-lucide-flame" class="relative mx-auto size-10 text-amber-200" />

      <h2 class="relative mt-4 font-display text-3xl font-semibold text-balance sm:text-4xl">
        {{ t('cta.title') }}
      </h2>
      <p class="relative mx-auto mt-4 max-w-xl text-lg text-white/85">
        {{ t('cta.text') }}
      </p>

      <div class="relative mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <UButton
          :to="whatsappLink(t('whatsapp.general'))"
          target="_blank"
          icon="i-simple-icons-whatsapp"
          size="xl"
          color="neutral"
          variant="solid"
          :label="t('cta.button')"
          class="bg-white text-ember-800 hover:bg-ember-50"
        />
        <a :href="`tel:${business.phoneE164}`" class="text-white/85 underline-offset-4 hover:text-white hover:underline">
          {{ t('cta.call') }}
          <span dir="ltr" class="font-semibold">{{ business.phoneDisplay }}</span>
        </a>
      </div>

      <div class="relative mt-10 border-t border-white/15 pt-8">
        <p class="text-sm text-white/75">
          {{ t('footer.followUs') }}
        </p>
        <div class="mt-4 flex justify-center gap-3">
          <UButton
            v-for="social in socials"
            :key="social.label"
            :to="social.href"
            target="_blank"
            :icon="social.icon"
            :label="social.label"
            color="neutral"
            variant="outline"
            class="rounded-full bg-transparent text-white ring-white/40 hover:bg-white/10"
          />
        </div>
      </div>
    </div>
  </section>
</template>

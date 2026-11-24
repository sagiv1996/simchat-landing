<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <section id="about" class="overflow-hidden bg-muted py-20 sm:py-28">
    <UContainer class="grid items-center gap-12 lg:grid-cols-5 lg:gap-16">
      <div v-reveal class="relative mx-auto w-full max-w-sm lg:col-span-2">
        <NuxtImg
          src="/images/hands-shells.webp"
          :alt="t('about.imageAlt')"
          sizes="100vw lg:400px"
          class="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-xl ring-1 ring-default"
          loading="lazy"
        />
        <div
          aria-hidden="true"
          class="absolute -inset-4 -z-10 rounded-[2.5rem] bg-primary/10 blur-2xl"
        />
      </div>

      <div class="lg:col-span-3">
        <SectionHeading
          :eyebrow="t('about.eyebrow')"
          :title="t('about.title')"
          :subtitle="t('about.subtitle')"
          align="start"
        />

        <div v-reveal="100" class="mt-6 space-y-4 text-lg text-pretty">
          <p>{{ t('about.p1') }}</p>
          <p>{{ t('about.p2') }}</p>
          <p>{{ t('about.p3') }}</p>
        </div>

        <blockquote v-reveal="200" class="mt-8 border-s-4 border-primary ps-5 font-display text-xl text-highlighted italic sm:text-2xl">
          {{ t('about.quote') }}
        </blockquote>
      </div>
    </UContainer>
  </section>
</template>

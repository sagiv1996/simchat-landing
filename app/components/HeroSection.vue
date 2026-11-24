<script setup lang="ts">
const { t } = useI18n()

const badges = [
  { key: 'travel', icon: 'i-lucide-car' },
  { key: 'ages', icon: 'i-lucide-users' },
  { key: 'handmade', icon: 'i-lucide-hand-heart' },
] as const
</script>

<template>
  <section class="relative overflow-hidden">
    <div
      aria-hidden="true"
      class="pointer-events-none absolute -top-40 start-1/2 size-[36rem] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl rtl:translate-x-1/2 dark:bg-primary/20"
    />

    <UContainer class="relative grid items-center gap-12 py-12 sm:py-20 lg:grid-cols-2 lg:gap-16">
      <div v-reveal>
        <UBadge
          :label="t('hero.eyebrow')"
          icon="i-lucide-flame"
          variant="subtle"
          size="lg"
          class="rounded-full"
        />

        <h1 class="mt-6 font-display text-4xl leading-tight font-semibold text-highlighted text-balance sm:text-5xl lg:text-6xl">
          {{ t('hero.title') }}
          <span class="block text-primary">{{ t('hero.titleAccent') }}</span>
        </h1>

        <p class="mt-6 max-w-xl text-lg text-muted text-pretty">
          {{ t('hero.subtitle') }}
        </p>

        <div class="mt-8 flex flex-col gap-3 sm:flex-row">
          <UButton
            :to="whatsappLink(t('whatsapp.workshop'))"
            target="_blank"
            icon="i-simple-icons-whatsapp"
            size="xl"
            :label="t('hero.ctaPrimary')"
            class="justify-center"
          />
          <UButton
            :to="whatsappLink(t('whatsapp.custom'))"
            target="_blank"
            color="neutral"
            variant="outline"
            size="xl"
            trailing-icon="i-lucide-sparkles"
            :label="t('hero.ctaSecondary')"
            class="justify-center"
          />
        </div>

        <ul class="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted">
          <li v-for="badge in badges" :key="badge.key" class="flex items-center gap-2">
            <UIcon :name="badge.icon" class="size-5 text-primary" />
            {{ t(`hero.badges.${badge.key}`) }}
          </li>
        </ul>
      </div>

      <div v-reveal="150" class="relative mx-auto w-full max-w-md lg:max-w-none">
        <div class="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl shadow-primary/20 ring-1 ring-default">
          <NuxtImg
            src="/images/candle-starfish.webp"
            :alt="t('hero.imageAlt')"
            sizes="100vw sm:80vw lg:600px"
            class="size-full object-cover"
            fetchpriority="high"
            preload
          />
        </div>

        <div class="absolute -bottom-6 -start-4 hidden w-40 overflow-hidden rounded-2xl shadow-xl ring-4 ring-default sm:block lg:-start-10 lg:w-48">
          <NuxtImg
            src="/images/hands-rose.webp"
            alt=""
            sizes="200px"
            class="aspect-[3/4] size-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </UContainer>
  </section>
</template>

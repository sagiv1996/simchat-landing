<script setup lang="ts">
const { t } = useI18n()

const badges = [
  { key: 'travel', icon: 'i-lucide-car' },
  { key: 'ages', icon: 'i-lucide-users' },
  { key: 'handmade', icon: 'i-lucide-hand-heart' },
] as const
</script>

<template>
  <section class="relative isolate overflow-hidden">
    <!-- Phones: the photo sits behind the text. Desktop: it moves into its own column. -->
    <div class="absolute inset-0 -z-10 lg:hidden">
      <NuxtImg
        src="/images/candle-starfish.webp"
        :alt="t('hero.imageAlt')"
        sizes="480px sm:768px md:1024px"
        class="hero-zoom size-full object-cover"
        fetchpriority="high"
        preload
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />
    </div>

    <div
      aria-hidden="true"
      class="hero-flicker pointer-events-none absolute -top-40 start-1/2 -z-10 size-[36rem] -translate-x-1/2 rounded-full bg-primary/25 blur-3xl rtl:translate-x-1/2 dark:bg-primary/30 max-lg:top-auto max-lg:-bottom-48 max-lg:bg-amber-500/30"
    />

    <UContainer class="grid min-h-[calc(100svh-4rem)] items-end gap-12 pt-24 pb-12 lg:min-h-0 lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-20">
      <div>
        <UBadge
          :label="t('hero.eyebrow')"
          icon="i-lucide-flame"
          variant="subtle"
          size="lg"
          class="hero-in rounded-full max-lg:bg-white/15 max-lg:text-white max-lg:ring-white/25"
          :ui="{ leadingIcon: 'hero-flame' }"
          style="--i: 0"
        />

        <h1
          class="hero-in mt-6 font-display text-4xl leading-tight font-semibold text-balance text-white sm:text-5xl lg:text-6xl lg:text-highlighted"
          style="--i: 1"
        >
          {{ t('hero.title') }}
          <span class="block text-amber-300 lg:text-primary">{{ t('hero.titleAccent') }}</span>
        </h1>

        <p class="hero-in mt-6 max-w-xl text-lg text-pretty text-white/85 lg:text-muted" style="--i: 2">
          {{ t('hero.subtitle') }}
        </p>

        <div class="hero-in mt-8 flex flex-col gap-3 sm:flex-row" style="--i: 3">
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
            class="justify-center max-lg:bg-white/10 max-lg:text-white max-lg:ring-white/40 max-lg:hover:bg-white/20"
          />
        </div>

        <ul class="hero-in mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/85 lg:mt-10 lg:text-muted" style="--i: 4">
          <li v-for="badge in badges" :key="badge.key" class="flex items-center gap-2">
            <UIcon :name="badge.icon" class="size-5 text-amber-300 lg:text-primary" />
            {{ t(`hero.badges.${badge.key}`) }}
          </li>
        </ul>
      </div>

      <div class="hero-in relative hidden w-full lg:block" style="--i: 2">
        <div class="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl shadow-primary/20 ring-1 ring-default">
          <NuxtImg
            src="/images/candle-starfish.webp"
            :alt="t('hero.imageAlt')"
            sizes="600px"
            class="size-full object-cover"
            loading="lazy"
          />
        </div>

        <div class="absolute -bottom-6 -start-10 w-48 overflow-hidden rounded-2xl shadow-xl ring-4 ring-default">
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

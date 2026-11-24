<script setup lang="ts">
const { t } = useI18n()

const points = [
  { key: 'gifts', icon: 'i-lucide-gift' },
  { key: 'workshop', icon: 'i-lucide-users' },
  { key: 'travel', icon: 'i-lucide-car' },
] as const
</script>

<template>
  <section id="hanukkah" class="px-4 py-12 sm:py-16">
    <div
      v-reveal
      class="relative mx-auto grid max-w-6xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#14213d] to-[#0b1226] text-white shadow-2xl shadow-[#14213d]/30 lg:grid-cols-2"
    >
      <div
        aria-hidden="true"
        class="pointer-events-none absolute -top-32 start-10 size-80 rounded-full bg-amber-400/25 blur-3xl"
      />

      <div class="relative p-6 sm:p-12">
        <UBadge
          :label="t('hanukkah.eyebrow')"
          icon="i-lucide-sparkles"
          color="neutral"
          variant="solid"
          class="rounded-full bg-amber-300 text-[#14213d]"
        />

        <h2 class="mt-5 font-display text-3xl font-semibold text-balance sm:text-4xl">
          {{ t('hanukkah.title') }}
        </h2>
        <p class="mt-4 text-lg text-white/80 text-pretty">
          {{ t('hanukkah.text') }}
        </p>

        <ul class="mt-6 space-y-3">
          <li v-for="point in points" :key="point.key" class="flex items-center gap-3">
            <span class="flex size-8 shrink-0 items-center justify-center rounded-full bg-amber-300/15 text-amber-300">
              <UIcon :name="point.icon" class="size-4" />
            </span>
            {{ t(`hanukkah.points.${point.key}`) }}
          </li>
        </ul>

        <div class="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <UButton
            :to="whatsappLink(t('whatsapp.hanukkah'))"
            target="_blank"
            icon="i-simple-icons-whatsapp"
            size="xl"
            color="neutral"
            :label="t('hanukkah.cta')"
            class="justify-center bg-amber-300 text-[#14213d] hover:bg-amber-200"
          />
          <p class="text-sm text-amber-200/90">
            {{ t('hanukkah.deadline') }}
          </p>
        </div>
      </div>

      <div class="relative h-48 sm:h-64 lg:h-auto lg:min-h-full">
        <NuxtImg
          src="/images/candles-collection.webp"
          :alt="t('gallery.items.candlesCollection')"
          sizes="480px sm:768px lg:600px"
          class="absolute inset-0 size-full object-cover"
          loading="lazy"
        />
        <div
          aria-hidden="true"
          class="absolute inset-0 bg-gradient-to-b from-[#0b1226]/70 to-transparent lg:bg-gradient-to-r lg:rtl:bg-gradient-to-l"
        />
      </div>
    </div>
  </section>
</template>

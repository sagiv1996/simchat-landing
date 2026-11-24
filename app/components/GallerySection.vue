<script setup lang="ts">
const { t } = useI18n()

const photoFiles = [
  { key: 'candleStarfish', src: '/images/candle-starfish.webp', width: 788, height: 1400 },
  { key: 'workshopGirls', src: '/images/workshop-girls.webp', width: 788, height: 1400 },
  { key: 'candleRedFlowers', src: '/images/candle-red-flowers.webp', width: 819, height: 1400 },
  { key: 'workshopGroup', src: '/images/workshop-group.webp', width: 1400, height: 630 },
  { key: 'handsRose', src: '/images/hands-rose.webp', width: 787, height: 1400 },
  { key: 'candlesCollection', src: '/images/candles-collection.webp', width: 630, height: 1400 },
  { key: 'workshopTable', src: '/images/workshop-table.webp', width: 787, height: 1400 },
  { key: 'handsShells', src: '/images/hands-shells.webp', width: 787, height: 1400 },
  { key: 'happyGuest', src: '/images/happy-guest.webp', width: 630, height: 1400 },
] as const

const DESKTOP_PREVIEW = 6
const MOBILE_PREVIEW = 4

const photos = computed<GalleryPhoto[]>(() =>
  photoFiles.map(({ key, ...file }) => ({ ...file, alt: t(`gallery.items.${key}`) })),
)
const preview = computed(() => photos.value.slice(0, DESKTOP_PREVIEW))

const labels = computed<PhotoSwipeLabels>(() => ({
  close: t('gallery.lightbox.close'),
  previous: t('gallery.lightbox.previous'),
  next: t('gallery.lightbox.next'),
  zoom: t('gallery.lightbox.zoom'),
  error: t('gallery.lightbox.error'),
}))

const { open } = usePhotoSwipe(photos, labels)
</script>

<template>
  <section id="gallery" class="py-14 sm:py-28">
    <UContainer>
      <SectionHeading
        :eyebrow="t('gallery.eyebrow')"
        :title="t('gallery.title')"
        :subtitle="t('gallery.subtitle')"
      />

      <div v-reveal class="mt-10 grid grid-cols-2 gap-3 md:mt-14 md:grid-cols-3 md:gap-4">
        <button
          v-for="(photo, index) in preview"
          :key="photo.src"
          type="button"
          :aria-label="`${t('gallery.open')}: ${photo.alt}`"
          class="group relative aspect-square overflow-hidden rounded-2xl ring-1 ring-default focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          :class="{ 'max-md:hidden': index >= MOBILE_PREVIEW }"
          @click="open(index)"
        >
          <NuxtImg
            :src="photo.src"
            :alt="photo.alt"
            sizes="200px md:300px lg:400px"
            class="size-full object-cover transition duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <span class="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 via-transparent p-4 text-start text-sm text-white opacity-0 transition group-hover:opacity-100">
            {{ photo.alt }}
          </span>
        </button>
      </div>

      <div class="mt-8 flex justify-center">
        <UButton
          size="lg"
          variant="soft"
          icon="i-lucide-images"
          :label="t('gallery.viewAll', { count: photos.length })"
          @click="open(0)"
        />
      </div>
    </UContainer>
  </section>
</template>

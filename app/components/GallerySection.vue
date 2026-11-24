<script setup lang="ts">
import type { LightboxItem } from './GalleryLightbox.vue'

const { t } = useI18n()

const photos = [
  { key: 'candleStarfish', src: '/images/candle-starfish.webp' },
  { key: 'workshopGirls', src: '/images/workshop-girls.webp' },
  { key: 'candleRedFlowers', src: '/images/candle-red-flowers.webp' },
  { key: 'workshopGroup', src: '/images/workshop-group.webp' },
  { key: 'handsRose', src: '/images/hands-rose.webp' },
  { key: 'candlesCollection', src: '/images/candles-collection.webp' },
  { key: 'workshopTable', src: '/images/workshop-table.webp' },
  { key: 'handsShells', src: '/images/hands-shells.webp' },
  { key: 'happyGuest', src: '/images/happy-guest.webp' },
] as const

const DESKTOP_PREVIEW = 6
const MOBILE_PREVIEW = 4

const items = computed<LightboxItem[]>(() =>
  photos.map(photo => ({ src: photo.src, alt: t(`gallery.items.${photo.key}`) })),
)
const preview = computed(() => items.value.slice(0, DESKTOP_PREVIEW))

const lightboxOpen = ref(false)
const startIndex = ref(0)

function openAt(index: number) {
  startIndex.value = index
  lightboxOpen.value = true
}
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
          v-for="(item, index) in preview"
          :key="item.src"
          type="button"
          :aria-label="`${t('gallery.open')}: ${item.alt}`"
          class="group relative aspect-square overflow-hidden rounded-2xl ring-1 ring-default focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          :class="{ 'max-md:hidden': index >= MOBILE_PREVIEW }"
          @click="openAt(index)"
        >
          <NuxtImg
            :src="item.src"
            :alt="item.alt"
            sizes="200px md:300px lg:400px"
            class="size-full object-cover transition duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <span class="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 via-transparent p-4 text-start text-sm text-white opacity-0 transition group-hover:opacity-100">
            {{ item.alt }}
          </span>
        </button>
      </div>

      <div class="mt-8 flex justify-center">
        <UButton
          size="lg"
          variant="soft"
          icon="i-lucide-images"
          :label="t('gallery.viewAll', { count: items.length })"
          @click="openAt(0)"
        />
      </div>
    </UContainer>

    <GalleryLightbox v-model:open="lightboxOpen" :items="items" :start-index="startIndex" />
  </section>
</template>

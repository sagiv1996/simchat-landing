<script setup lang="ts">
const { t } = useI18n()

interface GalleryItem {
  key: string
  src: string
}

const items: GalleryItem[] = [
  { key: 'candleStarfish', src: '/images/candle-starfish.webp' },
  { key: 'workshopGroup', src: '/images/workshop-group.webp' },
  { key: 'candleRedFlowers', src: '/images/candle-red-flowers.webp' },
  { key: 'workshopGirls', src: '/images/workshop-girls.webp' },
  { key: 'handsRose', src: '/images/hands-rose.webp' },
  { key: 'candlesCollection', src: '/images/candles-collection.webp' },
  { key: 'workshopTable', src: '/images/workshop-table.webp' },
  { key: 'handsShells', src: '/images/hands-shells.webp' },
  { key: 'happyGuest', src: '/images/happy-guest.webp' },
]

const MOBILE_PREVIEW_COUNT = 4
const expanded = ref(false)

const selected = ref<GalleryItem | null>(null)

const open = computed({
  get: () => selected.value !== null,
  set: (value: boolean) => {
    if (!value) selected.value = null
  },
})
</script>

<template>
  <section id="gallery" class="py-14 sm:py-28">
    <UContainer>
      <SectionHeading
        :eyebrow="t('gallery.eyebrow')"
        :title="t('gallery.title')"
        :subtitle="t('gallery.subtitle')"
      />

      <div class="mt-10 columns-2 gap-3 md:mt-14 md:columns-3 md:gap-4">
        <button
          v-for="(item, index) in items"
          :key="item.key"
          v-reveal="(index % 3) * 100"
          type="button"
          :aria-label="`${t('gallery.open')}: ${t(`gallery.items.${item.key}`)}`"
          class="group relative mb-3 w-full overflow-hidden rounded-2xl ring-1 ring-default focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:mb-4 md:block"
          :class="!expanded && index >= MOBILE_PREVIEW_COUNT ? 'hidden' : 'block'"
          @click="selected = item"
        >
          <NuxtImg
            :src="item.src"
            :alt="t(`gallery.items.${item.key}`)"
            sizes="200px md:300px lg:400px"
            class="w-full transition duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <span class="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 via-transparent p-4 text-start text-sm text-white opacity-0 transition group-hover:opacity-100">
            {{ t(`gallery.items.${item.key}`) }}
          </span>
        </button>
      </div>

      <div class="mt-4 flex justify-center md:hidden">
        <UButton
          color="neutral"
          variant="outline"
          :label="expanded ? t('gallery.showLess') : t('gallery.showMore', { count: items.length - MOBILE_PREVIEW_COUNT })"
          :trailing-icon="expanded ? 'i-lucide-chevron-up' : 'i-lucide-chevron-down'"
          @click="expanded = !expanded"
        />
      </div>
    </UContainer>

    <UModal
      v-model:open="open"
      :title="selected ? t(`gallery.items.${selected.key}`) : ''"
      :close="{ 'aria-label': t('gallery.close') }"
      :ui="{ content: 'max-w-3xl', body: 'p-0 sm:p-0' }"
    >
      <template #body>
        <NuxtImg
          v-if="selected"
          :src="selected.src"
          :alt="t(`gallery.items.${selected.key}`)"
          sizes="480px sm:768px"
          class="max-h-[80vh] w-full object-contain"
        />
      </template>
    </UModal>
  </section>
</template>

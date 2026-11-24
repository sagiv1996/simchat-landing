<script setup lang="ts">
export interface LightboxItem {
  src: string
  alt: string
}

const props = defineProps<{
  items: LightboxItem[]
  startIndex: number
}>()

const open = defineModel<boolean>('open', { required: true })

const { locale } = useI18n()
const carousel = useTemplateRef('carousel')
const current = ref(props.startIndex)

watch(open, (isOpen) => {
  if (isOpen) current.value = props.startIndex
})

function onKeydown(event: KeyboardEvent) {
  const api = carousel.value?.emblaApi
  if (!api) return
  const forward = locale.value === 'he' ? 'ArrowLeft' : 'ArrowRight'
  const backward = locale.value === 'he' ? 'ArrowRight' : 'ArrowLeft'
  if (event.key === forward) api.scrollNext()
  if (event.key === backward) api.scrollPrev()
}

watch(open, (isOpen) => {
  if (isOpen) window.addEventListener('keydown', onKeydown)
  else window.removeEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => window.removeEventListener('keydown', onKeydown))
</script>

<template>
  <UModal
    v-model:open="open"
    fullscreen
    :title="items[current]?.alt ?? ''"
    :ui="{
      content: 'bg-black/95 text-white',
      header: 'border-white/10',
      title: 'text-white/90 font-normal',
      close: 'text-white hover:bg-white/10',
      body: 'flex flex-col justify-center p-0 sm:p-0',
    }"
  >
    <template #body>
      <UCarousel
        v-if="open"
        ref="carousel"
        v-slot="{ item }"
        :items="items"
        :start-index="startIndex"
        loop
        arrows
        :prev="{ color: 'neutral', variant: 'solid', class: 'bg-white/15 text-white hover:bg-white/25 hidden sm:inline-flex' }"
        :next="{ color: 'neutral', variant: 'solid', class: 'bg-white/15 text-white hover:bg-white/25 hidden sm:inline-flex' }"
        :ui="{ viewport: 'h-full', container: 'h-full', item: 'flex items-center justify-center', prev: 'start-4', next: 'end-4' }"
        class="h-[calc(100svh-9rem)] w-full"
        @select="current = $event"
      >
        <NuxtImg
          :src="item.src"
          :alt="item.alt"
          sizes="480px sm:768px lg:1024px"
          class="max-h-full max-w-full object-contain"
          loading="lazy"
        />
      </UCarousel>

      <p class="py-4 text-center text-sm text-white/70" dir="ltr">
        {{ current + 1 }} / {{ items.length }}
      </p>
    </template>
  </UModal>
</template>

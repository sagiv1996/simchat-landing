<script setup lang="ts">
const props = defineProps<{
  src: string
  poster: string
  label: string
}>()

const available = ref(false)

onMounted(async () => {
  try {
    const response = await fetch(props.src, { method: 'HEAD' })
    available.value = response.ok && (response.headers.get('content-type') ?? '').startsWith('video/')
  }
  catch {
    available.value = false
  }
})
</script>

<template>
  <figure v-if="available" class="overflow-hidden rounded-3xl bg-black ring-1 ring-default">
    <video
      :src="src"
      :poster="poster"
      :aria-label="label"
      class="aspect-video w-full object-contain"
      controls
      muted
      playsinline
      preload="metadata"
    />
  </figure>
  <slot v-else />
</template>

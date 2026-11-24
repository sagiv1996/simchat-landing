<script setup lang="ts">
withDefaults(defineProps<{
  eyebrow: string
  title: string
  subtitle?: string
  align?: 'center' | 'start'
}>(), {
  subtitle: undefined,
  align: 'center',
})
</script>

<template>
  <div v-reveal :class="align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'">
    <p class="text-sm font-semibold tracking-wide text-primary">
      {{ eyebrow }}
    </p>
    <h2 class="mt-2 font-display text-3xl font-semibold text-highlighted text-balance sm:text-4xl">
      {{ title }}
    </h2>
    <p v-if="subtitle" class="mt-4 text-lg text-muted text-pretty">
      {{ subtitle }}
    </p>
  </div>
</template>

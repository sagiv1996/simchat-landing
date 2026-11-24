<script setup lang="ts">
const { t } = useI18n()

interface Service {
  key: 'workshops' | 'custom' | 'events'
  image: string
  icon: string
  featured: boolean
}

const services: Service[] = [
  { key: 'workshops', image: '/images/workshop-girls.webp', icon: 'i-lucide-palette', featured: true },
  { key: 'custom', image: '/images/candle-red-flowers.webp', icon: 'i-lucide-gift', featured: false },
  { key: 'events', image: '/images/candles-collection.webp', icon: 'i-lucide-party-popper', featured: false },
]

const messageKey: Record<Service['key'], string> = {
  workshops: 'whatsapp.workshop',
  custom: 'whatsapp.custom',
  events: 'whatsapp.events',
}
</script>

<template>
  <section id="services" class="py-20 sm:py-28">
    <UContainer>
      <SectionHeading :eyebrow="t('services.eyebrow')" :title="t('services.title')" />

      <div class="mt-14 grid gap-6 md:grid-cols-3">
        <article
          v-for="(service, index) in services"
          :key="service.key"
          v-reveal="index * 120"
          class="group flex flex-col overflow-hidden rounded-3xl bg-elevated/50 ring-1 ring-default transition hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
        >
          <div class="relative aspect-[4/3] overflow-hidden">
            <NuxtImg
              :src="service.image"
              alt=""
              sizes="100vw md:33vw"
              class="size-full object-cover transition duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <UBadge
              v-if="service.featured"
              :label="t('services.workshops.badge')"
              icon="i-lucide-star"
              class="absolute top-4 start-4 rounded-full"
            />
          </div>

          <div class="flex flex-1 flex-col p-6">
            <div class="flex items-center gap-3">
              <span class="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <UIcon :name="service.icon" class="size-5" />
              </span>
              <h3 class="font-display text-xl font-semibold text-highlighted">
                {{ t(`services.${service.key}.title`) }}
              </h3>
            </div>
            <p class="mt-4 flex-1 text-muted text-pretty">
              {{ t(`services.${service.key}.text`) }}
            </p>
            <UButton
              :to="whatsappLink(t(messageKey[service.key]))"
              target="_blank"
              :variant="service.featured ? 'solid' : 'soft'"
              :label="t(`services.${service.key}.cta`)"
              trailing-icon="i-lucide-arrow-left"
              :ui="{ trailingIcon: 'ltr:rotate-180' }"
              class="mt-6 self-start"
            />
          </div>
        </article>
      </div>
    </UContainer>
  </section>
</template>

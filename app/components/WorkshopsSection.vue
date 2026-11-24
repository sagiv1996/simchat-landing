<script setup lang="ts">
const { t } = useI18n()

const occasions = [
  { key: 'bachelorette', icon: 'i-lucide-heart' },
  { key: 'birthday', icon: 'i-lucide-cake' },
  { key: 'team', icon: 'i-lucide-briefcase' },
  { key: 'family', icon: 'i-lucide-house' },
  { key: 'mitzvah', icon: 'i-lucide-star' },
  { key: 'groups', icon: 'i-lucide-graduation-cap' },
] as const

const steps = ['one', 'two', 'three'] as const
</script>

<template>
  <section id="workshops" class="bg-muted py-14 sm:py-28">
    <UContainer>
      <div class="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            :eyebrow="t('workshops.eyebrow')"
            :title="t('workshops.title')"
            :subtitle="t('workshops.text')"
            align="start"
          />

          <div v-reveal="100" class="mt-10">
            <h3 class="font-semibold text-highlighted">
              {{ t('workshops.occasionsTitle') }}
            </h3>
            <ul class="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
              <li
                v-for="occasion in occasions"
                :key="occasion.key"
                class="flex items-center gap-2 rounded-xl bg-default px-3 py-2.5 text-sm ring-1 ring-default"
              >
                <UIcon :name="occasion.icon" class="size-4 shrink-0 text-primary" />
                {{ t(`workshops.occasions.${occasion.key}`) }}
              </li>
            </ul>
          </div>
        </div>

        <div v-reveal="150">
          <WorkshopVideo
            src="/videos/workshop.mp4"
            poster="/images/workshop-group.webp"
            :label="t('workshops.videoLabel')"
          >
            <div class="grid grid-cols-2 gap-4">
              <NuxtImg
                src="/images/workshop-table.webp"
                :alt="t('gallery.items.workshopTable')"
                sizes="240px lg:300px"
                class="aspect-[3/4] w-full rounded-3xl object-cover ring-1 ring-default"
                loading="lazy"
              />
              <NuxtImg
                src="/images/happy-guest.webp"
                :alt="t('gallery.items.happyGuest')"
                sizes="240px lg:300px"
                class="mt-10 aspect-[3/4] w-full rounded-3xl object-cover object-top ring-1 ring-default"
                loading="lazy"
              />
            </div>
          </WorkshopVideo>
        </div>
      </div>

      <div class="mt-12 md:mt-20">
        <h3 v-reveal class="text-center font-display text-2xl font-semibold text-highlighted sm:text-3xl">
          {{ t('workshops.stepsTitle') }}
        </h3>

        <ol class="mt-8 grid gap-3 md:mt-10 md:grid-cols-3 md:gap-6">
          <li
            v-for="(step, index) in steps"
            :key="step"
            v-reveal="index * 120"
            class="flex items-start gap-4 rounded-2xl bg-default p-4 ring-1 ring-default md:block md:rounded-3xl md:p-6"
          >
            <span class="font-display text-3xl leading-none font-semibold text-primary/40 md:text-5xl md:text-primary/30">
              0{{ index + 1 }}
            </span>
            <div>
              <h4 class="font-semibold text-highlighted md:mt-2 md:text-lg">
                {{ t(`workshops.steps.${step}.title`) }}
              </h4>
              <p class="mt-1 text-sm text-muted md:mt-2 md:text-base">
                {{ t(`workshops.steps.${step}.text`) }}
              </p>
            </div>
          </li>
        </ol>

        <div v-reveal class="mt-10 flex justify-center">
          <UButton
            :to="whatsappLink(t('whatsapp.workshop'))"
            target="_blank"
            icon="i-simple-icons-whatsapp"
            size="xl"
            :label="t('workshops.cta')"
          />
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
const { t, locale } = useI18n()
const { business } = useBusiness()
const { siteUrl } = useRuntimeConfig().public
const ogImage = `${siteUrl}/og.jpg`
const showHanukkah = isSeasonActive(hanukkah)

useSectionTracking(trackedSections)

useSeoMeta({
  title: () => t('meta.title'),
  description: () => t('meta.description'),
  ogTitle: () => t('meta.title'),
  ogDescription: () => t('meta.description'),
  ogSiteName: business.name,
  ogType: 'website',
  ogImage,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogLocale: () => (locale.value === 'he' ? 'he_IL' : 'en_US'),
  twitterCard: 'summary_large_image',
})

useHead({
  script: [{
    type: 'application/ld+json',
    key: 'business-schema',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      'name': business.name,
      'founder': business.owner,
      'telephone': business.phone.international,
      'url': siteUrl,
      'image': ogImage,
      'sameAs': business.socials.map(social => social.href),
    }),
  }],
})
</script>

<template>
  <div>
    <HeroSection />
    <HanukkahSection v-if="showHanukkah" />
    <ServicesSection />
    <WorkshopsSection />
    <GallerySection />
    <AboutSection />
    <FaqSection />
    <ContactCta />
  </div>
</template>

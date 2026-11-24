<script setup lang="ts">
const { t, locale } = useI18n()

useSeoMeta({
  title: () => t('meta.title'),
  description: () => t('meta.description'),
  ogTitle: () => t('meta.title'),
  ogDescription: () => t('meta.description'),
  ogType: 'website',
  ogImage: '/og.jpg',
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
      'telephone': business.phoneE164,
      'image': '/og.jpg',
      'sameAs': [business.instagram, business.facebook],
    }),
  }],
})
</script>

<template>
  <div>
    <HeroSection />
    <ServicesSection />
    <WorkshopsSection />
    <GallerySection />
    <AboutSection />
    <FaqSection />
    <ContactCta />
  </div>
</template>

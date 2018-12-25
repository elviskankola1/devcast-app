<template>
<div class="about">
  <!-- ===== ABOUT US ===== -->
  <AboutSection></AboutSection>

  <!-- ===== NEWSLETTER ===== -->
  <NewsletterSection></NewsletterSection>

  <!-- ===== DONATE ===== -->
  <DonateSection></DonateSection>
</div>
</template>

<script>
import AboutSection from '@/components/Sections/AboutSection.vue'
import NewsletterSection from '@/components/Sections/NewsletterSection.vue'
import DonateSection from '@/components/Sections/DonateSection.vue'

export default {
  name: 'About',
  components: {
    AboutSection,
    NewsletterSection,
    DonateSection
  }
}
</script>

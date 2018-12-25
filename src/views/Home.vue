<template>
  <div class="home">
			<section id="#episodes" class="section-positive">
				<div class="container">
					<h2 class="title-default">Another Episodes</h2>

					<div class="row">

            <!-- ===== LAST PODCAST ===== -->
            <div class="col-sm-12 mb-40">
              <PodcastCard :podcast="lastPodcast" type="full"></PodcastCard>
            </div>

            <!-- ===== PODCAST CARD LIST ===== -->
            <div v-for="p in podcasts" :key="p.id" class="col-sm-6 mb-40">
              <PodcastCard :podcast="p" type="boxed"></PodcastCard>
            </div>


						<!-- ===== CHECK MORE ===== -->
						<div class="col-sm-12 mb-50">
							<router-link :to="{name: 'podcasts'}" class="btn btn-primary btn-block btn-lg">
                View more episodes
              </router-link>
						</div>
					</div>
				</div>
			</section>

			<!-- ===== ABOUT US ===== -->
			<AboutSection></AboutSection>

			<!-- ===== NEWSLETTER ===== -->
      <NewsletterSection></NewsletterSection>

			<!-- ===== DONATE ===== -->
			<DonateSection></DonateSection>

  </div>
</template>

<script>
import PodcastCard from '@/components/Podcasts/PodcastCard.vue'
import DonateSection from '@/components/Sections/DonateSection.vue'
import NewsletterSection from '@/components/Sections/NewsletterSection.vue'
import AboutSection from '@/components/Sections/AboutSection.vue'

export default {
  name: 'Home',
  components: {
    PodcastCard,
    DonateSection,
    NewsletterSection,
    AboutSection
  }
}
</script>

<template>
<div class="posdcasts-index">
  <section id="#episodes" class="section-positive">
    <div class="container">
      <h2 class="title-default">Episodes</h2>
      <div class="row">

        <!-- ===== LAST PODCAST ===== -->
        <div class="col-sm-12 mb-40">
          <PodcastCard :podcast="lastPodcast" type="full"></PodcastCard>
        </div>

        <!-- ===== PODCAST CARD LIST ===== -->
        <div v-for="p in podcasts" :key="p.id" class="col-sm-6 mb-40">
          <PodcastCard :podcast="p" type="boxed"></PodcastCard>
        </div>

        <div class="col-sm-12 text-center mb-50">
          <!-- ===== PAGINATION ===== -->
          <PodcastPagination :lastId="lastId"></PodcastPagination>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== DONATE ===== -->
  <DonateSection></DonateSection>
</div>
</template>

<script>
import PodcastCard from '@/components/Podcasts/PodcastCard.vue';
import DonateSection from '@/components/Sections/DonateSection.vue';

export default {

  name: 'podcast.index',
  data () {
    return {
      podcasts: [
        {
          id: 1,
          slug: "what-is-web-developement",
          name: "Episode #06 - You can also post a video",
          created_at: "December 19, 2015",
          description: "This is a boxed podcast layout. Lorem ipsum dolor sit amet, consectetur adipisicing elit..",
          category: "Lifehacks ",
          duration: "12 min.",
          thumb: {small: "http://localhost/photofills", large: "http://localhost/photofills"},
          audio: "assets/audio"
        },
        {
          id: 2,
          slug: "what-is-web-developement",
          name: "Episode #06 - You can also post a video",
          created_at: "December 19, 2015",
          description: "This is a boxed podcast layout. Lorem ipsum dolor sit amet, consectetur adipisicing elit..",
          category: "Lifehacks ",
          duration: "12 min.",
          thumb: {small: "http://localhost/photofills", large: "http://localhost/photofills"},
          audio: "assets/audio"
        },
      ]
    }
  },
  computed: {
      lastPodcast () {
        return (typeof this.podcasts[0] === 'undefined') ? {} : this.podcasts[0]
      },

      lastId () {
        return this.podcasts[this.podcasts.length - 1].id
      }
  },
  components: {
    PodcastCard,
    DonateSection
  }
}
</script>

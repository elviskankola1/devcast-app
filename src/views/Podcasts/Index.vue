<template>
<div class="posdcasts-index">
  <section id="#episodes" class="section-positive">
  <div class="container">

  <h2 class="title-default">Episodes</h2>
  <div class="row">

  <div class="col-sm-12 mb-40">
    <PodcastCard :podcast="lastPodcast" type="full"></PodcastCard>
  </div>

  <div v-for="p in podcasts" :key="p.id" class="col-sm-12 mb-40">
    <PodcastCard :podcast="p" type="boxed"></PodcastCard>
  </div>


  <!-- ===== PAGINATION ===== -->
  <div class="col-sm-12 text-center mb-50">
  <ol class="pagination">
  <li><router-link to="#">1</router-link></li>
  <li><router-link to="#">2</router-link></li>
  <li><router-link to="#">3</router-link></li>
  <li><router-link to="#"><i class="fa fa-angle-right"></i></router-link></li>
  </ol>
  </div>

  </div>

  </div>
  </section>

  <!-- ===== DONATE ===== -->
  <section id="donate" class="section-highlight text-center">
  <div class="container">

  <!-- ===== SECTION TITLE ===== -->
  <h2 class="title-default">We need your help</h2>
  <p class="section-description">Help us support the show! Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />  Vel modi rem laudantium, alias minus temporibus nihil reiciendis vero.</p>

  <!-- ===== DONATE VALUES ===== -->
  <div class="row mb-50">

  <div class="col-lg-3 col-sm-6 mb-20">
  <router-link to="#" class="btn btn-default btn-round btn-lg btn-block">U$ 5</router-link>
  </div>

  <div class="col-lg-3 col-sm-6 mb-20">
  <router-link to="#" class="btn btn-default btn-round btn-lg btn-block">U$ 10</router-link>
  </div>

  <div class="col-lg-3 col-sm-6 mb-20">
  <router-link to="#" class="btn btn-default btn-round btn-lg btn-block">U$ 25</router-link>
  </div>

  <div class="col-lg-3 col-sm-6 mb-20">
  <router-link to="#" class="btn btn-default btn-round btn-lg btn-block">U$ 50</router-link>
  </div>

  </div>

  </div>
  </section>
</div>
</template>

<script>
import PodcastCard from "@/components/Podcasts/PodcastCard.vue";

export default {

  name: 'podcast.index',
  data () {
    return {
      podcasts: []
    }
  },
  computed: {
      lastPodcast () {
        return (typeof this.podcasts[0] === 'undefined') ? {} : this.podcasts[0]
      }
  },
  components: {
    PodcastCard
  }
}
</script>

<template>
  <div id="app">
    <Header></Header>

    <div v-if="name !== 'about' & name !== 'contact'">
      <PodcastHero :podcast="podcast"></PodcastHero>
    </div>

    <main id="main" class="main">
      <transition name="fade">
        <router-view/>
      </transition>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import PodcastHero from '@/components/Podcasts/PodcastHero.vue'
import PageHeader from '@/components/PageHeader.vue'
import vuex from 'vuex'

export default {
  data () {
    return {
      name: 'Devcasts',
      podcast: {}
    }
  },
  components: {
    Header,
    Footer,
    PodcastHero,
    PageHeader
  },
  mounted () {
    this.$http.get('http://localhost:8081').then(r => {
      this.podcast = r.data.podcasts[0]
    })
  }
}
</script>

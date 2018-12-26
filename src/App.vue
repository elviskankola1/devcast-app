<template>
  <div id="app">
    <Header></Header>

    <div v-if="name !== 'about' & name !== 'contact'">
      <PodcastHero :podcast="podcast"></PodcastHero>
    </div>
    <div v-else>
      <PageHeader :name="name" :routeName="routeName"></PageHeader>
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
  name: 'Devcast',
  data () {
    return {
      name: this.$name,
      routeName: 'home',
      podcast: {
        id: 1,
        slug: "what-is-web-developement",
        name: "Episode #01 - WELCOME TO DEVCAST",
        created_at: "December 19, 2015",
        description: "This is a boxed podcast layout. Lorem ipsum dolor sit amet, consectetur adipisicing elit..",
        category: "Lifehacks ",
        duration: "12 min.",
        thumb: {small: "http://localhost/photofills", large: "http://localhost/photofills"},
        audio: "assets/audio"
      }
    }
  },
  components: {
    Header,
    Footer,
    PodcastHero,
    PageHeader
  }
}
</script>

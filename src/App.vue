<template>
  <div id="app">
    <Header></Header>
    <main id="main" class="main">
      <transition>
        <router-view/>
      </transition>
    </main>
    <Footer></Footer>
  </div>
</template>


<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

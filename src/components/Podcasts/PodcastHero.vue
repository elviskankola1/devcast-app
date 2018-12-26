<template>
<section class="podcast-hero" style="height: 80vh">
  <div class="podcast-hero-inner">
    <div class="container">
      <div class="podcast-hero-content">
      <span class="podcast-hero-date">{{ p.created_at }}</span>
      <h2 class="podcast-hero-title">
        <router-link :to="{name: 'podcasts.show', params:{id: p.id, slug: p.slug}}">
          {{ p.name | truncate(30) }}
        </router-link>
      </h2>
      <p>{{ p.description | truncate(150) }}</p>
      <ul class="podcast-hero-meta">
        <li class="item">
          <router-link :to="{name: 'categories.show', params:{name: p.category}}" class="podcast-hero-tag" rel="tag">
            {{ p.category }}
          </router-link>
        </li>
        <li class="item"><i class="fa fa-clock-o"></i> {{ p.duration }}</li>
        <li class="item">
          <a :href="p.audio" class="podcast-hero-download">
            <i class="fa fa-download"></i> Download
          </a>
        </li>
      </ul>
      </div>
    </div>

    <PodcastPlayer :audioSrc="p.audio"></PodcastPlayer>
  </div>
</section>
</template>

<script>
import PodcastPlayer from '@/components/Podcasts/PodcastPlayer.vue'

export default {
  name: 'PodcastHero',
  props: {
    podcast: {Object, required: true}
  },
  computed: {
    p () {
      return this.podcast
    }
  },
  components: {
    PodcastPlayer
  }
}
</script>

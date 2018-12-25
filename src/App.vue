<template>
  <div id="app">
    <Header></Header>

    <section class="podcast-hero" style="background-image: url(http://127.0.0.1/photofills)">
			<div class="podcast-hero-inner">
				<div class="container">
						<div class="podcast-hero-content">
						<span class="podcast-hero-date">December 22, 2015</span>
						<h2 class="podcast-hero-title"><a href="podcast.html">Episode #08 - Our vacations have been so amazing!</a></h2>
						<ul class="podcast-hero-meta">
							<li class="item"><a href="#" class="podcast-hero-tag" rel="tag">Lifestyle</a></li>
							<li class="item"><i class="fa fa-clock-o"></i> 45 mins.</li>
							<li class="item"><a href="#" class="podcast-hero-download"><i class="fa fa-download"></i> Download</a></li>
						</ul>
					</div>
				</div>

				<div class="podcast-hero-player-content">
					<div class="container">
						<audio src="assets/audio/emotional.mp3"></audio>
					</div>
				</div>

			</div>
		</section>

    <main id="main" class="main">
      <router-view/>
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

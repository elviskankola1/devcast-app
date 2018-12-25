<template>
  <header class="header absolute" itemscope itemtype="http://schema.org/Organization">
			<div class="container">
				<h1 class="logo"><a href="index.html"><img itemprop="logo" src="assets/logo.png" alt="logo" /></a></h1>

				<nav class="navigation">
					<ul class="menu">
						<li class="menuitem active"><router-link to="/">Home</router-link></li>
						<li class="menuitem"><router-link to="/podcasts">Podcast</router-link></li>
						<li class="menuitem"><router-link to="/about">About</router-link></li>
						<li class="menuitem"><router-link to="/contact">contact</router-link></li>
					</ul>

					<a href="#" class="btn-hamburguer-menu"><i class="fa fa-bars"></i></a>
				</nav>

			</div>
		</header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

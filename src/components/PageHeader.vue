<template>
<header class="page-header" style="background-image: url(http://localhost/photofills)">
  <div class="page-header-inner">
    <div class="container">
      <ol class="breadcrumb" itemscope itemtype="http://schema.org/BreadcrumbList">
        <li itemprop="itemListElement">
          <router-link :to="{name: 'home'}">Home</router-link>
        </li>
        <li itemprop="itemListElement">
          <router-link :to="{name: routeName}">{{ name }}</router-link>
        </li>
      </ol>
      <div class="page-header-content text-center">
        <h2>{{ name }}</h2>
      </div>
    </div>
  </div>
</header>
</template>

<script>
export default {
  name: 'PageHeader',
  props: {
    name: {String, required: true},
    routeName: {String, required: true}
  }
}
</script>

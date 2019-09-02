<template lang="html">
  <div class="wrapper">
    <header slot="heading" class="mt-0 mb-5 p-3 display-1 bg-dark lead text-white">MORDITA CAELESTI</header>
    <!-- Utlilze nuxt-links to create navigation between the different pages -->
    <nuxt-link to="/home" class="m-3 text-muted lead">home</nuxt-link>
    <nuxt-link to="/services" class="m-3 text-muted lead">agendas</nuxt-link>
    <nuxt-link to="/gallery" class="m-3 text-muted lead">gallery</nuxt-link>
    <nuxt-link to="/data" class="m-3 text-muted lead">discover</nuxt-link>
    <nuxt-link to="/about" class="m-3 text-muted lead">contact</nuxt-link>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
</style>

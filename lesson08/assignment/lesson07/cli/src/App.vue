<template>
  <div id="app">
    <!-- Utlilze router links to create navigation between the different views -->
    <router-link to="/" class="m-3">Home</router-link>
    <router-link to="/services" class="m-3">Services</router-link>
    <router-link to="/gallery" class="m-3">Gallery</router-link>
    <router-link to="/about" class="m-3">Contact</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
</style>

<template>
  <div id="app">
    <header slot="heading" class="mt-0 mb-5 p-3 display-1 bg-info text-white">Verba Caelesti Letters</header>
    <!-- Utlilze router links to create navigation between the different views -->
    <router-link to="/" class="m-3">Home</router-link>
    <router-link to="/services" class="m-3">Services</router-link>
    <router-link to="/gallery" class="m-3">Gallery</router-link>
    <router-link to="/about" class="m-3">Contact</router-link>
    <router-view></router-view>

  </div>
</template>

<script>
// Importing the header component in which I used a named slot with default content
import myHeader from './components/header';

// Registered the header component that we imported
export default {
  name: 'app',
  components: {
      myHeader
  },
  data() {
    return {
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
</style>

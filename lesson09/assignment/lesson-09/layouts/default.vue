<template>
  <div id="app">
<!-- Include navbar component -->
    <Navbar />
    <Nuxt />
  </div>
</template>

<script>
// Import the navbar component so it populates on the default page.
import Navbar from '@/components/Navbar';

// Registered the navbar component that we imported
export default {
  name: 'app',
  components: {
      Navbar
  }
}
</script>

<style lang="scss">
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

<template>
  <div class="home home-background mt-4">
    <h4 class="company-quote bg-light text-dark text-center p-2"><em>Your one stop shop for all beautiful things hand lettered, wax sealed, and created with love.</em></h4>
    <!-- Implement a buttom to show and hide content by using v-if on the p tag -->
    <button v-on:click="show = !show">Tell Me Something</button>
    <p v-if="show">You'll find what you're looking for..just keep clicking away.</p>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      /* having show: false tells the browser that each time the button is clicked, the p tag content alternates between showing and not showing */
      show: false
    }
  }
}
</script>

<style>
.home-background {
  width: auto;
  height: 100%;
  padding: 13em;
  background-image: url("../images/blank-notepad.jpg");
  background-size: cover;
  background-position: center;
  opacity: 0.6;
}
</style>

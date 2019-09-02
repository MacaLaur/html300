<template>
  <div class="gallery">
    <h1 class="display-3 text-center text-lowercase mb-3 mt-5">Verba Caelesti Letters. | Gallery</h1>
    <div v-for="image in images">
      <!-- Use template literal in creating the dynamic image tags with v-for and v-bind:src -->
      <img v-bind:src="require(`../images/${image}.jpg`)" class="img-fluid mx-0 my-4" height="200">
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      /* Created an array of the unique identifying name for each image, so I could implement the template literal when creating the dynamic image tags */
      images: ['wedding-sign', 'quote', 'calligraphy', 'practice']
    }
  }
}
</script>

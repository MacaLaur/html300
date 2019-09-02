<template lang="html">
  <div>
<!-- Created an image component that will be imported in the gallery 'page' view so the images will be created dynamically -->
    <img
      v-show="showPlease"
      :src="image.src"
      :title="image.title"
      :img-alt="image.alt"
      :key="image.id"
      width="700"
      class="my-3 food-img"
      id="border"
      @click="toggleClass">
  </div>
</template>


<script>
// Import the border mixin from the js file
import { showBorder } from "./Mixins/Border.js"

// Incorporating prop validation for the image tags attributes such as title, src, alt text. Also, registering the mixin that we imported from the js file.
export default {
  name: "myImage",
  props: {
    image: {
      type: Object
    },
    src: {
      type: String
    },
    alt: {
      type: String
    },
    title: {
      type: String
    }
  },
  mixins: [showBorder],
  data() {
    return {
      showPlease: true
    };
  }
}
</script>

<!-- Style the border on the image component when the active class is activated on click -->
<style lang="scss" scoped>
#border.active {
  border: 6px double #8ac6d1;
}

.food-img {
  max-height: 75%;
}
</style>

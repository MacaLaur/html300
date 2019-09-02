<template lang="html">
  <!-- Include event handling @click to toggle the showBorder mixin on the card elements -->
  <article class="card" v-show="showPlease" id="border" @click="toggleClass">
  <!-- V-bind the image src and alt text from the fetched API data to the dynaically created card elements -->
    <img :src="collection.collection.image_url" alt="collection.title" class="card__img">
    <h2 class="card__title">{{ collection.collection.title }}</h2>
    <p class="card__copy">{{ collection.collection.description }}</p>
    <p class="card__copy">Total Restaurants: {{ collection.collection.res_count }}</p>
  </article>
</template>


<script>
// Import the showBorder mixin in order to be able to toggle borders on the card elements on click
import { showBorder } from "./Mixins/Border.js"

// Implement prop validation
export default {
  props: {
    collections: {
      type: Array
    },
    collection: {
      type: Object
    },
    image_url: {
      type: String
    },
    title: {
      type: String
    },
    description: {
      type: String
    },
    res_count: {
      type: Number
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


<style lang="scss" scoped>
// Include specific style that will be implemented when user clicks on card elements
#border.active {
  border: 6px double #d5a4cf;
}

.card {
  margin: 1rem;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  max-width: 350px;
  max-height: 315px;
  &__img {
    display: block;
    height: 80%;
    width: auto;
    padding-top: 1rem;
  }
  &__title {
    font-size: 1.75rem;
  }
  &__copy {
    font-size: 0.875rem;
  }
}
</style>

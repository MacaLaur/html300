<template>
  <div class="wrapper">
    <h1 class="display-4 text-center text-lowercase mb-5 mt-5">New York City Food Collections</h1>
<!-- Implement v-for for the card component to dynamically create a card for each object that we get back from the Zomato API -->
    <section class="container" v-if="collections">
      <card
      v-for="collection in collections.collections"
      :key="collection.collection_id"
      :collection="collection"
      />
    </section>
  </div>
</template>

<script>
// Import axios package manager in order to fetch data from the Zomato API
import axios from 'axios';
// Import card component so data from API can be generated dynamically
import Card from '@/components/Card.vue';

// Register card components in the components section below
export default {
  components: {
    Card
  },
// List the states for fetching the API data
  data() {
    return {
      loading: true,
      collections: null,
      errored: false
    }
  },
// Using axios to get data from Zomato API on food collections, specifically in New York City, in order to iterate over the objects and dynamically populate date points in card component
  mounted () {
    axios
      .get('https://developers.zomato.com/api/v2.1/collections?city_id=280&count=20',
        {headers: {"X-Zomato-API-Key" : "f611156c6b1b566cbff69a6dab40043e"}
        })
      .then(response => this.collections = response.data)
      .catch(error=> {
          console.log(error)
          this.errored = true
      })
      .finally(() => this.loading = false)
  }

}
</script>

<style lang="scss">
.container {
  min-height: 100vh;
  max-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
  flex-wrap: wrap;
}

.heading {
  text-align: center;
  font-size: 3rem;
  color: #555;
  margin: 2rem auto;
}

img {
  max-height: 150px;
  margin: 1rem;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

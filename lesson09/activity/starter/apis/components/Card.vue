<template lang="html">
  <article class="card">
    <img :src="country.flag" alt="country.name" class="card__img">
    <h2 class="card__title">{{ country.name }}</h2>
    <p class="card__copy">{{ country.subregion }}</p>
  </article>
</template>


<script>
export default {
  props: {
    country: Object
  }
}
</script>


<style lang="css" scoped>
.card {
  margin: 1rem;
  border: 1px solid PeachPuff;
  padding: 1.5rem;
  max-width: 200px;
  min-height: 200px;
  &__img {
    display: block;
    margin-bottom: 1rem;
  }
  &__title {
    font-size: 1rem;
    margin-bottom: 0.25rem;
  }
  &__copy {
    font-size: 0.075rem;
  }
}
</style>

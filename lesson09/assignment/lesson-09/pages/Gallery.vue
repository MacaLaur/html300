<template>
  <div class="gallery">
    <h1 class="display-4 text-center text-lowercase mb-3 mt-5">gallery</h1>
<!-- Incorporated the image component to create the images dynamically by iterating through the images array. -->
    <div>
      <myImage
        v-for="image in images"
        :image="image"
        v-bind:key="image.id"/>
    </div>
  </div>
</template>

<script>
// Imported the image component
import myImage from "@/components/image.vue";

// Registered the image component that was imported above. Additionally, the data stores the images array.
export default {
  name: 'gallery',
  components: {
    myImage
  },
  data() {
    return {
      images: [
        {
          src: require("@/assets/tea.jpg"),
          title: "tea",
          alt: "tea",
          id: 0
        },
        {
          src: require("@/assets/mediterranean.jpg"),
          title: "mediterranean",
          alt: "mediterranean",
          id: 1
        },
        {
          src: require("@/assets/coffee.jpg"),
          title: "coffee",
          alt: "coffee",
          id: 2
        },
        {
          src: require("@/assets/charcuterie.jpg"),
          title: "charcuterie",
          alt: "charcuterie",
          id: 3
        }
      ]
    };
  }
};

</script>

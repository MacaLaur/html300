<template>
  <div class="gallery">
    <h1 class="display-4 text-center text-lowercase mb-3 mt-5">gallery</h1>
<!-- Called on the intro content from the data and used a filter which transforms all letters to uppercase. -->
    <h2 class="text-center mb-3 mt-5">{{ intro | transformUpper }}</h2>
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

// Registered the image component that was imported above. Additionally, the data stores the intro content as well as the images array.
export default {
  name: 'gallery',
  components: {
    myImage
  },
  data() {
    return {
      intro: 'check out some recent work',
      images: [
        {
          src: require("@/images/quote.jpg"),
          title: "quote",
          alt: "hand holding up a card with a quote written in fine tip calligraphy",
          id: 0
        },
        {
          src: require("@/images/calligraphy.jpg"),
          title: "calligraphy",
          alt: "notepad with a hand-lettered quote written on it and laying next to a pen and some greenery on a plate",
          id: 1
        },
        {
          src: require("@/images/wedding-sign.jpg"),
          title: "weddingsign",
          alt: "hand-lettered calligraphy sign for a wedding, hanging on a stone wall and with some dark evergreen trees in the background",
          id: 2
        },
        {
          src: require("@/images/practice.jpg"),
          title: "practice",
          alt: "sheet of paper with the letter 'a' written over and over again in hand-lettered calligraphy",
          id: 3
        }
      ]
    };
  }
};

</script>

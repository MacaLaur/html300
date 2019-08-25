// Created a variable that we will export to the image component, which allows a border to appear when image is clicked.

export const showBorder = {
  data() {
    return {
      showPlease: false
    }
  },
  methods: {
    toggleClass(e) {
      e.target.classList.toggle('active');
    }
  }
}

<template>
  <div class="contact">
    <h1 class="display-3 text-center text-lowercase mb-3 mt-5">Verba Caelesti Letters. | Contact</h1>

    <!-- Implement bootstrap grid system and style components based on large, medium and small screen sizes -->
    <div class="row">
      <div class="form-group mt-5 mb-5 ml-5 mr-0 col-lg-8 col-md-7 col-sm-6 col-12">
        <label for="name" class="left text-left mt-0">Name:</label>
        <input type="text" class="form-control" id="name" placeholder="Enter first and last name">

        <label for="email" class="left mt-3">Email:</label>
        <input type="email" class="form-control" id="email" placeholder="Enter email">

        <label for="message" class="left mt-3">Message:</label>
        <input type="text" class="form-control" id="message" placeholder="Type message here">

        <button type="submit" class="btn btn-outline-primary btn-block mt-5">Submit</button>
      </div>
      <div class="ml-0 mt-5 col-lg-3 col-md-4 col-sm-5 col-12 text-center">
        <h3 class="d-inline mt-3">Business Hours:</h3><br>
        <p class="lead d-inline-block mt-2"> Mon-Sat: 10am-7pm</p>

        <!-- Create the social media links dynamically by iterating through array with the social channels -->
        <h3 class="mt-4">Connect with us:</h3>
        <ul class="list-inline">
          <li v-for="social in socials"><a href="#">
            {{social}}
          </a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      /* Create array with the social channels which will be iterated throught to create the links for the page */
      socials: ['Instagram', 'Pinterest', 'Facebook']
    }
  }
}
</script>

<style>
.left {
  width: 100%;
  text-align: left;
}

</style>

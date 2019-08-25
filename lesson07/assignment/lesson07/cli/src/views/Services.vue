<template>
  <div class="services">
    <h1 class="display-3 text-center text-lowercase mb-3 mt-5">Verba Caelesti Letters. | Services</h1>
    <p class="lead text-center ml-5 mr-5 text-secondary"><em>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor commodo ullamcorper a lacus vestibulum sed. Molestie a iaculis at erat pellentesque adipiscing commodo. Leo a diam sollicitudin tempor id eu nisl. Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales. Felis imperdiet proin fermentum leo vel orci porta non.</em></p>

    <div id="accordion">
      <div class="card">
        <div class="card-header">
          <h4 class="text-center"><a class="text-info" href="#classes" data-parent="#accordion" data-toggle="collapse">All-Level Classes</a></h4>
        </div>
        <div id="classes" class="collapse">
          <div class="card-body">
            <!-- Create the accordion content dynamically by implementing v-for to iterate through the classes object -->
            <ul class="list-inline">
              <li v-for="info in classes">
                {{info.level}}
                {{info.cost}}
                {{info.days}}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          <h4 class="text-center"><a class="text-info" href="#weddings" data-parent="#accordion" data-toggle="collapse">Wedding Calligraphy and Signage</a></h4>
        </div>
        <div id="weddings" class="collapse">
          <div class="card-body">
            <!-- Create the accordion content dynamically by implementing v-for to iterate through the packages object -->
            <p>*Please <a href="contact.html">contact us</a> for a quote*</p><br><br>
            <ul class="list-inline">
              <li v-for="info in packages">
                {{info.package}}
                {{info.invitations}}
                {{info.nametags}}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          <h4 class="text-center"><a class="text-info" href="#wax-seals" data-parent="#accordion" data-toggle="collapse">Custom Wax Seals</a></h4>
        </div>
        <div id="wax-seals" class="collapse">
          <div class="card-body">
            <p>*Please <a href="contact.html">contact us</a> for a quote*</p><br><br>
            <!-- Create the accordion content dynamically by implementing v-for to iterate through the seals object -->
            <ul class="list-inline">
              <li v-for="info in seals">
                {{info.seal}}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    /* Below are three objects that will be iterated through to create the accordion content */
    return {
      classes: [
        {level: 'Beginner', cost: '$65 per class', days: 'WED, THURS, FRI'},
        {level: 'Intermediate', cost: '$70 per class', days: 'SAT, MON, TUES'},
        {level: 'Advanced', cost: '$65 per class', days: 'SAT'}
      ],
      packages: [
        {package: 'Original Package', signs: '1 Lg sign', invitations: 'Up to 50 invitations', nametags: '50 nametags'},
        {package: 'Silver Package', signs: '2 Lg sign', invitations: 'Up to 150 invitations', nametags: '150 nametags'},
        {package: 'Royal Package', signs: '3 Lg sign', invitations: 'Up to 300 invitations', nametags: '300 nametags'},
      ],
      seals: [
        {seal: 'Wedding Wax Seals'},
        {seal: 'Holiday Wax Seals'},
        {seal: 'Custom Message Wax Seals'},
      ]
    }
  }
}
</script>



<style>

</style>

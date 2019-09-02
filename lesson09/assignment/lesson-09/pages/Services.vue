<template>
  <div class="services">
    <h1 class="display-4 text-center text-lowercase mb-1 mt-5">Your Food Agendas</h1>
    <p class="lead text-center ml-5 mr-5 mb-0 text-secondary"><em>Happy Eating!</em></p>
    <Agenda />
  </div>
</template>

<script>
// Import the agenda component
import Agenda from '@/components/Agenda.vue'

// Register the food agenda component
export default {
  name: 'app',
  components: {
    Agenda
  },
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

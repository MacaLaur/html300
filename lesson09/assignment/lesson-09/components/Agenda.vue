<template lang="html">
  <div class="wrapper">
    <main class="main">
      <div class="card">
        <div class="front">
          <h1>Los Angeles</h1>
        </div>
        <div class="back">
          <h1>Agenda</h1>
          <ul class="back__ul"> <!-- Implemented this naming convention to apply the BEM methodology in the CSS file -->
            <li class="back__ul--list">Breakfast:</li>
            <li class="back__ul--list">Lunch:</li>
            <li class="back__ul--list">Snacks:</li>
            <li class="back__ul--list">Dinner:</li>
            <li class="back__ul--list">Dessert:</li>
          </ul>
        </div>
      </div>
    </main>
    <main class="main">
      <div class="card">
        <div class="front front2">
          <h1>Austin</h1>
        </div>
        <div class="back">
          <h1>Agenda</h1>
          <ul class="back__ul"> <!-- Implemented this naming convention to apply the BEM methodology in the CSS file -->
            <li class="back__ul--list">Breakfast:</li>
            <li class="back__ul--list">Lunch:</li>
            <li class="back__ul--list">Snacks:</li>
            <li class="back__ul--list">Dinner:</li>
            <li class="back__ul--list">Dessert:</li>
          </ul>
        </div>
      </div>
    </main>
    <main class="main">
      <div class="card">
        <div class="front front3">
          <h1>Seattle</h1>
        </div>
        <div class="back">
          <h1>Agenda</h1>
          <ul class="back__ul"> <!-- Implemented this naming convention to apply the BEM methodology in the CSS file -->
            <li class="back__ul--list">Breakfast:</li>
            <li class="back__ul--list">Lunch:</li>
            <li class="back__ul--list">Snacks:</li>
            <li class="back__ul--list">Dinner:</li>
            <li class="back__ul--list">Dessert:</li>
          </ul>
        </div>
      </div>
    </main>
    <main class="main">
      <div class="card">
        <div class="front addNew">
          <h1 class="text-white lead bold">Create New Agenda!</h1>
          <h1 class="text-white lead bold">Where are you headed next?</h1>
        </div>
        <div class="back">
          <h1>Agenda</h1>
          <h3>Start discovering and creating your food adventure!</h3>
          <a href="#"><h1 class="display-1">Let's Go!</h1></a>
        </div>
      </div>
    </main>
  </div>
</template>


<script>
export default {
}
</script>


<style lang="scss" scoped>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

*,
*:after,
*:before {
  box-sizing: inherit;
}

body {
  background-color: #FFFFFF;
  font-family: 'Lora', serif;
}

.wrapper {
  display: flex;
  justify-content: space-evenly;
  align-self: center;
  flex-flow: row wrap;
}

.main {
  position: relative;
  width: 50%;
  justify-content: space-evenly;
}

.main p {
  position: absolute;
  transform: translate(85%, 50%);
  font-size: 1em;
}

// Implement CSS animation on hover
.card {
  top: 0;
  left: 0;
  width: 50%;
  height: 500px;
  text-align: center;
  transform: translate(50%, 15%);
  margin: 2em 1em;
}

.card:hover > .front {
  transform: rotateY(-180deg);
}

.card:hover > .back {
  transform: rotateY(0deg);
}

.front, .back {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  border-radius: 1.5em;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.25);
  -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
  perspective: 600px;
  transition: transform 0.8s ease-in-out;
}

.front h1, .back h1 {
  font-size: 2em;
  padding: 2em;
  color: #FFFFFF;
  text-transform: uppercase;
}

// Front image for LA card food agenda
.front {
  background-image: url("../assets/losangeles2.jpg");
  background-position: center;
  background-size: cover;
  cursor: pointer;
}

// Front image for Austin card food agenda
.front2 {
  background-image: url("../assets/austin.jpg");
  background-position: center;
  background-size: cover;
  cursor: pointer;
}

// Front image for Seattle card food agenda
.front3 {
  background-image: url("../assets/seattle.jpg");
  background-position: center;
  background-size: cover;
  cursor: pointer;
}

// Front image for next destination's food agenda
.addNew {
  background-image: url("../assets/mural.jpg");
  background-position: center;
  background-size: cover;
  opacity: 0.9;
  cursor: pointer;
}

.back {
  background-color: #D4A49C;
  transform: rotateY(180deg);
}

.back h1 {
  text-decoration: underline;
}

.back__ul {
  list-style: none;
}

.back__ul--list {
  text-align: left;
  padding: 1em;
  line-height: 0.75em;
}

.bold {
  font-weight: 600;
}
</style>

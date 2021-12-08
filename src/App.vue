<template>
  <div>
    <div id = "header">

    </div>
    <div id = "companybox">
      <div id = "searchField">
        <SearchField/>
      </div>
      <div id = "company">
        <Company/>
      </div>
    </div>
    <div id = "chart">
      <Chart/>
    </div>
    <div id = "infobox">
      <div id = "timebox">
        <Timeline/>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from './components/Chart.vue'
import Timeline from './components/Timeline.vue'
import SearchField from './components/SearchField.vue'
import Company from './components/Company.vue'


export default {
  name: 'App',
  components: {
    Chart,
    Timeline,
    SearchField,
    Company
  }
}
</script>

<style>
/* Header */ 
#header {
  background-color: white;
  width: 100%;
  height: 5vh;
  float: left;
}

/* Company */ 
#companybox {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: red;
  width: 20%;
  height: 95vh;
  float: left;
}
#searchField {
  background-color: black;
  width: 100%;
  height: 15vh;
  float: left;
}
#company {
  background-color: blueviolet;
  width: 100%;
  height: 15vh;
  float: left;
  color: white;
}

/* Chart */ 
#chart {
  background-color: blue;
  float: right;
  width: 80%;
  height: 65vh;
}

/* Time */ 
#infobox {
  background-color: black;
  float: right;
  width: 80%;
  height: 30vh;
}
#timebox {
  background-color: white;
  width: 15%;
  height: 5vh;
  position: fixed;
  bottom: 0;
  right: 0;
}
#time {
  background-color: violet;
  float: right;
  width: 100%;
  height: 10vh;
}
</style>

<template>
  <div>
    <div class="header">

    </div>
    <div class="companybox">
      <Company/>
    </div>
    <div class="chart">
      <Chart/>
    </div>
    <div class="configbox">
      <div class="timebox">
        <ConfigBox/>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from './components/Chart.vue'
import ConfigBox from './components/ConfigBox.vue'
import Company from './components/Company.vue'


export default {
  name: 'App',
  components: {
    Chart,
    ConfigBox,
    Company
  }
}
</script>

<style>
/* Header */ 
.header {
  background-color: rgb(8, 9, 13);
  width: 100%;
  height: 5vh;
  float: left;
}

/* Company */ 
.companybox {
  background-color: white;
  width: 20%;
  height: 95vh;
  float: left;
  padding: 10px;
}

/* Chart */ 
.chart {
  background-color: white;
  float: left;
  width: 80%;
  height: 79vh;
  padding: 10px; 
}

/* Time */ 
.configbox {
  background-color: white;
  float: left;
  width: 80%;
  height: 16vh;
  padding: 10px;
}

</style>

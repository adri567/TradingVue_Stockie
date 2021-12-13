<template>
  <div>
    <div class="header">
      <Header/>
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
import Chart from "./components/Chart.vue";
import ConfigBox from "./components/ConfigBox.vue";
import Company from "./components/Company.vue";
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Chart,
    ConfigBox,
    Company,
    Header
  },
};
</script>

<style>
/* Header */
.header {
  background-color: rgb(18, 24, 38);
  width: 100%;
  height: 8vh;
  float: left;
}

/* Company */
.companybox {
  background-color: rgb(29, 39, 61);
  width: 20%;
  height: 92vh;
  float: left;
  padding: 30px 15px 30px 30px;
  box-shadow: inset 0px 13px 3px -3px rgba(7, 16, 34, 0.15);
}

/* Chart */
.chart {
  background-color: rgb(29, 39, 61);
  float: left;
  width: 80%;
  height: 77vh;
  padding: 30px 30px 15px 30px;
  box-shadow: inset 0px 13px 3px -3px rgba(7, 16, 34, 0.15);
}

/* Time */
.configbox {
  background-color: rgb(29, 39, 61);
  float: left;
  width: 80%;
  height: 15vh;
  padding: 15px 30px 30px 30px;
}
</style>

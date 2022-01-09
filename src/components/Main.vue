<template>
  <div>
    <div class="companybox">
      <Company />
    </div>
    <div class="chart">
      <Chart />
    </div>
    <div class="configbox">
      <div class="timebox">
        <ConfigBox />
      </div>
    </div>
  </div>
</template>

<script>
import Chart from "./Chart.vue";
import ConfigBox from "./ConfigBox.vue";
import Company from "./Company.vue";

export default {
  name: "Main",
  components: {
    Chart,
    ConfigBox,
    Company
  },
};
</script>

<style>
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

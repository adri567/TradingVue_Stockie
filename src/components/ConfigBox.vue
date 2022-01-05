<template>
  <div class="configbox-style">
    <div class="indicator">
      <b-button class="buttonOpinion" style="border-radius: 10%"
        >Button</b-button
      >
      <b-button
        class="buttonOpinion"
        style="margin-left: 1%; border-radius: 10%"
        >Button</b-button
      >
      <b-button
        class="buttonOpinion"
        style="margin-left: 1%; border-radius: 10%"
        >Button</b-button
      >
      <b-button
        class="buttonOpinion"
        style="margin-left: 1%; border-radius: 10%"
        >Button</b-button
      >
    </div>
    <div class="opinion">
      <b-button-group>
        <b-button v-on:click="assetPeriod" class="buttonOpinion" value="1"
          >1D</b-button
        >
        <b-button v-on:click="assetPeriod" class="buttonOpinion" value="5"
          >5D</b-button
        >
        <b-button v-on:click="assetPeriod" class="buttonOpinion" value="30"
          >1M</b-button
        >
        <!--
        <b-button v-on:click="assetPeriod" class="buttonOpinion" value="90"
          >3M</b-button
        >
        <b-button v-on:click="assetPeriod" class="buttonOpinion" value="180"
          >6M</b-button
        >
        <b-button v-on:click="assetPeriod" class="buttonOpinion" value="365"
          >1Y</b-button
        >
        <b-button v-on:click="assetPeriod" class="buttonOpinion" value="1825"
          >5Y</b-button
        >
        -->
        <b-button v-on:click="assetPeriod" class="buttonOpinion" value="all"
          >All</b-button
        >
      </b-button-group>
    </div>
  </div>
</template>

<script>
import eventBus from "../main.js";

export default {
  name: "ConfigBox",
  data() {
    return {
      period: "",
    };
  },
  methods: {
    assetPeriod(value) {
      this.period = value.target.value;
      eventBus.$emit("period", this.period);
    },
  },
};
</script>

<style scoped>
.configbox-style {
  height: 11.5vh;
  padding: 4vh;
  width: 100%;
  background-color: rgb(18, 24, 38);
  border-radius: 25px;
  box-shadow: 0 0 1em rgb(7, 16, 34);
}
.indicator {
  width: 45%;
  float: left;
}
.opinion {
  width: 45;
  float: right;
}
.buttonOpinion {
  background-color: rgb(18, 24, 38);
  border-color: rgba(25, 31, 46, 0.856);
  font-family: "Arial";
}
</style>
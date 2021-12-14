<template>
  <div class="configbox-style">
    <div class="indicator">
      <b-button class="buttonOpinion" style="border-radius: 10%;">Button</b-button>
      <b-button class="buttonOpinion" style="margin-left: 1%; border-radius: 10%;">Button</b-button>
      <b-button class="buttonOpinion" style="margin-left: 1%; border-radius: 10%;">Button</b-button>
      <b-button class="buttonOpinion" style="margin-left: 1%; border-radius: 10%;">Button</b-button>
    </div>
    <div class="opinion">
      <b-button-group>
        <b-button class="buttonOpinion">1D</b-button>
        <b-button class="buttonOpinion">5D</b-button>
        <b-button class="buttonOpinion">1M</b-button>
        <b-button class="buttonOpinion">3M</b-button>
        <b-button class="buttonOpinion">6M</b-button>
        <b-button class="buttonOpinion">1Y</b-button>
        <b-button class="buttonOpinion">5Y</b-button>
        <b-button class="buttonOpinion">All</b-button>
      </b-button-group> 
    </div>
  </div>
</template>

<script>
export default {
  name: 'ConfigBox',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.configbox-style {
  
  height: 11.5vh;
  padding: 4vh;
  width: 100%;
  background-color: rgb(18,24,38); 
  border-radius: 25px;
  box-shadow: 0 0 1em rgb(7, 16, 34)
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
  background-color: rgb(18,24,38); 
  border-color: rgba(142, 144, 150, 0.1);
  font-family: 'Arial';
}
</style>
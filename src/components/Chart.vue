<template>  
  <div class="chartview-sytle">
    <div class="tradingchart">
      <trading-vue :data="chart" :width="width" :height="height" title-txt="BTCUSD"></trading-vue>
    </div>
  </div>
</template>

<style scoped>
.chartview-sytle {
  width: 100%;
  height: 100%;
  margin: auto;
  padding: 10px;
  background-color: aqua; 
  border-radius: 25px;
  padding: 30px;
}

.tradingchart {
  height: 100%;
  width: 100%;
  background-color: antiquewhite;
}
</style>

<script>
import TradingVue from "trading-vue-js";
import Data from '../data/data.json'

export default {
  name: "TradingView",
  components: { TradingVue },
  methods: {
    onResize() {
      this.width = document.querySelector('.tradingchart').clientWidth;
      this.height = document.querySelector('.tradingchart').clientHeight;
    }
  },
  mounted() {
      window.addEventListener('resize', this.onResize);
      this.onResize();
  },
  beforeDestroy() {
        window.removeEventListener('resize', this.onResize);
  },
  data() {
    return {
      chart: Data,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

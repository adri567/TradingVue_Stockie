<template>  
  <div class="chartview-sytle">
    <div class="tradingchart">
      <trading-vue :data="chart" :width="width" :height="height" title-txt="BTCUSD"></trading-vue>
    </div>
  </div>
</template>

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
<style scoped>
.chartview-sytle {
  width: 100%;
  height: 100%;
  margin: auto;
  padding: 10px;
  background-color: rgb(18,24,38); 
  border-radius: 25px;
  padding: 30px;
  box-shadow: 0 0 1em rgb(7, 16, 34)
}

.tradingchart {
  height: 100%;
  width: 100%;
 background-color: rgb(18,24,38); 
}
</style>
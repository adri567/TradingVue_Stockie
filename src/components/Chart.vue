<template>
  <div class="chartview-sytle">
    <div class="tradingchart">
      <trading-vue
        :key="rerenderChart"
        :data="chart"
        :width="width"
        :height="height"
        :title-txt="asset"
        :overlays="overlays"
      ></trading-vue>
    </div>
  </div>
</template>

<script>
import TradingVue from "trading-vue-js";
import Data from "../data/data.json";
import eventBus from "../main.js";
import Overlay from '../Overlays/Overlay.vue'

export default {
  name: "TradingView",
  components: {
    TradingVue,
  },
  data() {
    return {
      chart: Data,
      overlays: [Overlay],
      width: window.innerWidth,
      height: window.innerHeight,
      rerenderChart: 0,
      asset: "AAPL",
    };
  },
  methods: {
    forceRerender() {
      this.rerenderChart += 1;
    },
    parseJson(chartData, indicators) {
      var json =
        '{ "chart": {"data": [],"settings": {"color": "#1baddd"},"grid": { }}, "onchart": [ { "name": "Overlay, 50", "type": "Overlay", "data": [], "settings": { "upper": 70, "lower": 30, "backColor": "#9b9ba316", "bandColor": "#666"}}]}';
      var arr = JSON.parse(json);

      var newChartData = [];
      for (const el of chartData) {
        var cData = [];
        cData.push(el.date);
        cData.push(el.open);
        cData.push(el.high);
        cData.push(el.low);
        cData.push(el.close);
        cData.push(el.volume);
        newChartData.push(cData);
      }

      var newIndicatorData = [];
      for (const el of indicators) {
        var iData = [];
        iData.push(el.timestamp);
        iData.push(el.value);
        newIndicatorData.push(iData);
      }

      arr.chart.data = newChartData;
      arr.onchart[0].data = newIndicatorData;
      this.chart = arr;
      this.forceRerender();
    },
    onResize() {
      this.width = document.querySelector(".tradingchart").clientWidth;
      this.height = document.querySelector(".tradingchart").clientHeight;
    },
  },
  beforeMount() {
    eventBus.$on("chartData", (data, asset, indicators) => {
      this.asset = asset;
      this.parseJson(data, indicators);
    });
  },
  mounted() {
    window.addEventListener("resize", this.onResize);
    this.onResize();
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
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
  background-color: rgb(18, 24, 38);
  border-radius: 25px;
  padding: 30px;
  box-shadow: 0 0 1em rgb(7, 16, 34);
}

.tradingchart {
  height: 100%;
  width: 100%;
  background-color: rgb(18, 24, 38);
}
</style>
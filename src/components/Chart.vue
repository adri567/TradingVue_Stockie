<template>
  <div class="chartview-sytle">
    <div class="tradingchart">
      <trading-vue
        v-if="rerenderChart"
        :data="chart"
        :width="width"
        :height="height"
        :title-txt="asset"
      ></trading-vue>
    </div>
  </div>
</template>

<script>
import TradingVue from "trading-vue-js";
import Data from "../data/data.json";
import eventBus from "../main.js";

export default {
  name: "TradingView",
  components: {
    TradingVue,
  },
  data() {
    return {
      chart: Data,
      width: window.innerWidth,
      height: window.innerHeight,
      rerenderChart: true,
      asset: "",
    };
  },
  methods: {
    // https://michaelnthiessen.com/force-re-render/
    forceRerender() {
      // Remove my-component from the DOM
      this.rerenderChart = false;

      this.$nextTick(() => {
        // Add the component back in
        this.rerenderChart = true;
      });
    },
    parseJson(chartData) {
      var json =
        '{"chart": {"data": [],"settings": {"color": "#1baddd"},"grid": { }}}';
      var arr = JSON.parse(json);

      var newChartData = [];
      for (const el of chartData) {
        var data = [];
        data.push(el.date);
        data.push(el.open);
        data.push(el.high);
        data.push(el.low);
        data.push(el.close);
        data.push(el.volume);
        newChartData.push(data);
      }

      arr.chart.data = newChartData;
      this.chart = arr;
      console.log(this.chart);
      this.forceRerender();
    },
    onResize() {
      this.width = document.querySelector(".tradingchart").clientWidth;
      this.height = document.querySelector(".tradingchart").clientHeight;
    },
  },
  beforeMount() {
    eventBus.$on("chartData", (data, asset) => {
      this.asset = asset;
      this.parseJson(data);
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
<template>
  <div class="companybox-style">
    <div class="search">
      <b-input-group size="sm" class="mb-2">
        <b-input-group-prepend is-text v-on:click="getData">
          <b-icon icon="search"></b-icon>
        </b-input-group-prepend>
        <b-form-input
          type="search"
          v-model="asset"
          placeholder="Search asset"
        ></b-form-input>
      </b-input-group>
    </div>
    <div class="alertAsset">
      <div
        class="alert alert-primary"
        v-if="assetSearchError"
        role="alert"
        style="
          background-color: rgb(29, 39, 61);
          border-color: rgb(29, 39, 61);
          color: white;
        "
      >
        {{ assetSearchErrorMessage }}
      </div>
    </div>
    <div class="iconAndCompanyBox">
      <b-skeleton-wrapper :loading="loading">
        <template #loading>
          <b-skeleton animation="wave"> </b-skeleton>
        </template>
        <div class="icon">
          <img
            :src="assetImage"
            style="
              height: 100%;
              width: 100%;
              background-color: white;
              border-radius: 100px;
            "
          />
        </div>
        <div class="companyAbbreviation">
          <!--{{ assetUppercase }} -->
        </div>
        <div class="company">
          {{ assetInformation["name"] }}
        </div>
      </b-skeleton-wrapper>
    </div>
    <div class="priceBox">
      <b-skeleton-wrapper :loading="loading">
        <template #loading>
          <b-skeleton animation="wave"> </b-skeleton>
        </template>
        <div class="price">
          {{ assetInformation["price"] }}
        </div>
        <div class="currency">
          {{ assetInformation["currency"] }}
        </div>
      </b-skeleton-wrapper>
    </div>
    <div class="sectorbox">
      <b-skeleton-wrapper :loading="loading">
        <template #loading>
          <b-skeleton animation="wave"> </b-skeleton>
        </template>
        <div class="sector">
          {{ assetInformation["sector"] }}
        </div>
        <div class="point">•</div>
        <div class="industry">
          {{ assetInformation["industry"] }}
        </div>
      </b-skeleton-wrapper>
    </div>
    <div class="profil">
      <b-skeleton-wrapper :loading="loading">
        <template #loading>
          <b-skeleton animation="wave"></b-skeleton>
        </template>
        Profil
      </b-skeleton-wrapper>
    </div>
    <div class="webseitebox">
      <b-skeleton-wrapper :loading="loading">
        <template #loading>
          <b-skeleton animation="wave"> </b-skeleton>
        </template>
        <div class="webseitename">Webseite</div>
        <div class="webseitecompany">
          <a :href="assetInformation['website']" target="_blank">{{
            assetInformation["website"]
          }}</a>
        </div>
      </b-skeleton-wrapper>
    </div>
    <div class="information" v-bind:style="{ height: assetInfoHeight }">
      <b-skeleton-wrapper :loading="loading">
        <template #loading>
          <b-skeleton animation="wave" height="50vh"></b-skeleton>
        </template>
        {{ assetInformation["description"] }}
      </b-skeleton-wrapper>
    </div>
  </div>
</template>

<script>
import { getChartDataFromAsset } from "../data/data.js";
import { getAssetInformation } from "../data/data.js";
import eventBus from "../main.js";

export default {
  name: "Company",
  data() {
    return {
      chartData: [],
      indicators: [],
      asset: "",
      availableAssets: ["AAPL", "MSFT", "NVDA", "TSLA", "AMZN"],
      assetInfoHeight: "60%",
      assetInformation: "",
      assetImage: "",
      assetSearchError: false,
      assetSearchErrorMessage: "",
      period: "3",
      loading: false,
      loadingTime: 0,
      maxLoadingTime: 3,
    };
  },
  computed: {
    assetUppercase: function () {
      return this.asset.toUpperCase();
    },
  },
  watch: {
    loading(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.clearLoadingTimeInterval();

        if (newValue) {
          this.$_loadingTimeInterval = setInterval(() => {
            this.loadingTime++;
          }, 1000);
        }
      }
    },
    loadingTime(newValue, oldValue) {
      if (newValue !== oldValue) {
        if (newValue === this.maxLoadingTime) {
          this.loading = false;
        }
      }
    },
  },
  created() {
    this.$_loadingTimeInterval = null;
  },
  methods: {
    deliverChartData() {
      eventBus.$emit("chartData", this.chartData, this.assetUppercase, this.indicators);
    },
    getData() {
      if (this.assetUppercase == "") {
        this.changeHeightFromInfo("55%");
        this.assetSearchError = true;
        this.assetSearchErrorMessage =
          "Please enter a asset to show a new chart.";
      } else if (!this.availableAssets.includes(this.assetUppercase)) {
        this.changeHeightFromInfo("55%");
        this.assetSearchError = true;
        this.assetSearchErrorMessage =
          "Available assets: AAPL, MSFT, NVDA, TSLA, AMZN";
      } else {
        this.changeHeightFromInfo("60%");
        this.assetSearchError = false;
        this.fillDescription(this.assetUppercase);
        this.getAssetData(this.assetUppercase, this.period);
      }
    },
    changeHeightFromInfo(height) {
      this.assetInfoHeight = height;
    },
    getAssetData(asset, period) {
      Promise.resolve(getChartDataFromAsset(asset, period)).then(
        (resolvedData) => {
          this.chartData = resolvedData[0];
          this.indicators = resolvedData[1];
          this.deliverChartData();
        },
        function (e) {
          console.error(e);
        }
      );
    },
    fillDescription(asset) {
      Promise.resolve(getAssetInformation(asset)).then(
        (information) => {
          this.assetInformation = information;
          this.binaryDataToImage();
        },
        function (e) {
          console.error(e);
        }
      );
    },
    binaryDataToImage() {
      const base64 =
        "data:image/jpeg;base64," +
        Buffer.from(this.assetInformation["logo"], "base64").toString("ascii");
      this.assetImage = base64;
    },
    clearLoadingTimeInterval() {
      clearInterval(this.$_loadingTimeInterval);
      this.$_loadingTimeInterval = null;
    },
    startLoading() {
      this.loading = true;
      this.loadingTime = 0;
    },
  },
  mounted() {
    this.startLoading();
    this.fillDescription("AAPL");
    this.getAssetData("AAPL", this.period);
  },
  beforeMount() {
    eventBus.$on("period", (period) => {
      this.period = period;
    });
  },
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.companybox-style {
  height: 87vh;
  width: 100%;
  background-color: rgb(18, 24, 38);
  border-radius: 25px;
  box-shadow: 0 0 1em rgb(7, 16, 34);
}
.search {
  height: 5%;
  width: 90%;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 10%;
  float: left;
}
.alertAsset {
  height: auto;
  float: left;
  width: 90%;
  margin-left: 5%;
  margin-right: 5%;
}
.iconAndCompanyBox {
  height: 5%;
  width: 90%;
  float: left;
  margin-left: 5%;
  margin-right: 5%;
}
.icon {
  height: 100%;
  float: left;
  border: 1px;
}
.companyAbbreviation {
  height: 100%;
  float: left;
  margin-left: 10%;
  display: flex;
  align-items: center;
  color: rgb(196, 196, 196);
  font-family: "Arial";
  font-size: 1.5vw;
}
.company {
  height: 100%;
  float: left;
  margin-left: 5%;
  display: flex;
  align-items: center;
  color: rgb(196, 196, 196);
  font-family: "Arial";
  font-size: 1.5vw;
  width: 5%;
}
.priceBox {
  height: 5%;
  width: 90%;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 5%;
  float: left;
}
.price {
  height: 100%;
  float: left;
  display: flex;
  align-items: center;
  color: rgb(196, 196, 196);
  font-family: "Arial";
  font-size: 1.5vw;
}
.currency {
  height: 100%;
  float: left;
  display: flex;
  align-items: center;
  color: rgb(196, 196, 196);
  font-family: "Arial";
  margin-left: 2%;
  margin-top: 1%;
}
.sectorbox {
  height: 5%;
  width: 90%;
  margin-left: 5%;
  margin-right: 5%;
  float: left;
}
.sector {
  height: 50%;
  float: left;
  display: flex;
  align-items: center;
  color: rgb(196, 196, 196);
  font-family: "Arial";
  font-size: 0.6vw;
}
.point {
  height: 50%;
  float: left;
  display: flex;
  align-items: center;
  color: rgb(196, 196, 196);
  font-family: "Arial";
  font-size: 0.6vw;
  margin-left: 2%;
  margin-right: 2%;
}
.industry {
  height: 50%;
  float: left;
  display: flex;
  align-items: center;
  color: rgb(196, 196, 196);
  font-family: "Arial";
  font-size: 0.6vw;
}
.profil {
  height: 5%;
  width: 90%;
  margin-left: 5%;
  margin-right: 5%;
  color: rgb(196, 196, 196);
  font-family: "Arial";
  font-size: 1.5vw;
  float: left;
}
.webseitebox {
  height: 4%;
  width: 90%;
  margin-left: 5%;
  margin-right: 5%;
  float: left;
}
.webseitename {
  height: 100%;
  width: 50%;
  color: rgb(196, 196, 196);
  font-family: "Arial";
  font-size: 0.7vw;
  text-align: left;
  float: left;
}
.webseitecompany {
  height: 100%;
  width: 50%;
  color: rgb(196, 196, 196);
  font-family: "Arial";
  font-size: 0.7vw;
  text-align: right;
  float: left;
}
.information {
  height: auto;
  max-height: 60%;
  width: 90%;
  margin-left: 5%;
  margin-right: 5%;
  float: left;
  color: rgb(196, 196, 196);
  font-family: "Arial";
  font-size: 0.9vw;
  overflow-y: scroll;
  text-align: justify;
}

.information::-webkit-scrollbar {
  display: none;
}
</style>
<template>
  <div>
    <div class="header">
      <Header />
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
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

</style>

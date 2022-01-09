<template>
  <div style="width: 100%; height: 100%">
    <div style="width: 33.33%; height: 100%; float: left"></div>
    <div style="width: 33.33%; height: 100%; float: left">
      <div
        style="
          width: 40%;
          height: 100%;
          float: left;
          display: flex;
          justify-content: center;
          align-items: center;
        "
      >
        <div
          style="
            color: white;
            font-size: 0.8vw;
            font-family: 'Rubik Mono One', sans-serif;
            letter-spacing: 0.1em;
          "
        >
          <router-link to="/" class="navbar-style">Chart</router-link>
        </div>
      </div>
      <div
        style="
          width: 20%;
          height: 100%;
          float: left;
          text-align: center;
          padding: 5px;
        "
      >
        <div style="height: 100%">
          <img src="../assets/Blue2.svg" style="height: 100%; width: 100%" />
        </div>
      </div>
      <div
        style="
          width: 40%;
          height: 100%;
          float: left;
          display: flex;
          justify-content: center;
          align-items: center;
        "
      >
        <div
          style="
            color: white;
            font-size: 0.8vw;
            font-family: 'Rubik Mono One', sans-serif;
            letter-spacing: 0.1em;
          "
        >
          <router-link to="/AboutUs" class="navbar-style">About Us</router-link>
        </div>
      </div>
    </div>
    <div style="width: 33.33%; height: 100%; float: left"></div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.navbar-style {
  color: white;
  text-decoration: none;
}
</style>
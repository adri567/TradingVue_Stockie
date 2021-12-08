<template>
  <div>
    <b-button-group>
      <b-button>Hey</b-button>
      <b-button>Moin</b-button>
      <b-button>Tag</b-button>
    </b-button-group>
  </div>
</template>

<script>
export default {
  name: 'Timeline',
  props: {
    time: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
<template>

</template>

<script>
export default {
  name: "placeslist",
  props: ["placeslist"],
  data: function () {
    return {

      render: {
        placeslist: []
      }
    }
  },
  watch: {
    placeslist: function (val) {
      this.render.placeslist = val;
    }
  }
}
</script>

<style scoped>

</style>

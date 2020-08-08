<template>
<div class="ngm-container-scroll">

  <h2>Available places</h2>
  <placeslist v-bind:places="filteredPlaces"/>
</div>
</template>

<script>
import placeslist from "./placeslist";
export default {
name: "Activities",
  data: function () {
    return {
      places: window.locationdata
    }
  },
  computed: {
    filteredPlaces: function() {
      return this.places.filter(x => (x.categories.includes(this.$route.params.id)))
    }
  },
  components: {
    placeslist
  }
}
</script>

<style lang="scss">

h2 {
  margin: 10px 15px 0;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: gray;
  font-weight: normal;
}
</style>

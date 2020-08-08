<template>
  <div class="mgm-scroll-container">
    <place v-bind:place="places.dayly" size="-big" placeofday="true"/>
    <h2>Categories</h2>
    <categories />
    <h2>Recommended Places</h2>
    <placeslist v-bind:places="places.all.slice(0, 4)"/>
  </div>
</template>

<script>
import categories from "./categories.vue";
import place from "./place.vue";
import placeslist from "./placeslist";
export default {
  name: 'Frame',
  data () {
    return {
      places: {
        dayly: "ab1",
        all: window.locationdata
      }
    }
  },
  components: {
    categories,
    place,
    placeslist
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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

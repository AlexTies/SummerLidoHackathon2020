<template>
  <div class="mgm-scroll-container">
    <div class="ngm-placeslist">
      <place v-bind:place="places.dayly" size="-big" placeofday="true" picoftheday="false"/>
      <place v-bind:place="places.picoftheday" size="-big" placeofday="false" picoftheday="true"/>
    </div>
    <h2>Categories</h2>
    <categories/>
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
  data() {
    return {
      places: {
        dayly: "ab1",
        picoftheday: "ab5",
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

.ngm-placeslist {
  display: flex;
  flex-wrap: wrap;
}
h2 {
  margin: 10px 15px 0;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: gray;
  font-weight: normal;
}
</style>

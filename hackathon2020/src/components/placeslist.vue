<template>
  <div class="ngm-placeslist">
    <place v-for="place in places" v-bind:place="place.id" size="-medium" placeofday="false"/>
  </div>
</template>

<script>
import place from "./place.vue";

export default {
  name: "placeslist",
  props: ["places"],
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
  },
  components: {
    place
  }
}
</script>

<style lang="scss">
.ngm-placeslist {
  display: flex;
  flex-wrap: wrap;
}
</style>

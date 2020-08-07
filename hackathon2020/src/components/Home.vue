<template>
  <div class="mgm-scroll-container">
    <picoftheday />
    <h2>Categories</h2>
    <categories />
    <h2>Places</h2>
    <placeslist v-bind:places="places.recommended" />
  </div>
</template>

<script>
import categories from "./categories.vue";
import picoftheday from "./picoftheday.vue";
import placeslist from "./placeslist";
export default {
  name: 'Frame',
  data () {
    return {
      places: {

      }
    }
  },
  components: {
    categories,
    picoftheday,
    placeslist
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>

<template>
  <div class="ngm-categories-list">
    <router-link class="ngm-categories__item"
         v-for="category in categories"
         v-bind:to="category.slug"
    >
      <div class="ngm-categories-list__icon material-icons"
           v-bind:class="category.color"
      >
        {{ category.icon }}
      </div>
      <div class="ngm-categories-list__label">
        {{ category.label }}
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "categories",
  data: function () {
    return {
      categories: [
        {
          icon: "pedal_bike",
          label: "Bike",
          slug: "activities/bike",
          color: "--violett"
        },
        {
          icon: "directions_walk",
          label: "Hike",
          slug: "activities/hike",
          color: "--green"
        },
        {
          icon: "waves",
          label: "Swim",
          slug: "activities/swim",
          color: "--blue"
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.ngm-categories-list {
  &__icon {

    font-size: 72px;
  }
}
</style>

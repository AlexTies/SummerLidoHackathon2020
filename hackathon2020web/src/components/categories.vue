<template>
  <div class="ngm-categories-list">
    <div class="ngm-categories-list__track">
      <router-link class="ngm-categories-list__item"
         v-for="category in categories"
         v-bind:to="category.slug"
         v-bind:class="category.color"
      >
        <div class="ngm-categories-list__icon material-icons">
          {{ category.icon }}
        </div>
        <div class="ngm-categories-list__label">
          {{ category.label }}
        </div>
      </router-link>
    </div>
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
          icon: "directions_car",
          label: "Car",
          slug: "activities/car",
          color: "--blue"
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.ngm-categories-list {
  overflow: auto;

  &__track {
    display: inline-flex;
    padding: 10px 0;
    margin: 0 10px;
  }

  &__item {
    width: 200px;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgb(0 0 0 / 0.1);
    margin: 0 5px;
    text-decoration: none;
    padding: 30px 20px 20px;
    font-size: 24px;
    position: relative;
    font-weight: bold;
    &.--violett {
      color: #8e24aa;
    }
    &.--green {
      color: #4caf50;
    }
    &.--blue {
      color: #1e88e5;
    }
  }

  &__icon {
    position: absolute;
    bottom: 0;
    right: 30px;
    font-size: 50px;
  }
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

<template>
  <router-link v-bind:to="'/detail/' + place" class="ngm-potd" v-bind:class="'--size' + size">
    <div class="ngm-potd__available">
      <div class="ngm-potd__available-item --color-violett"
        v-if="placedata.categories.includes('bike')"
      >
        <i class="material-icons">pedal_bike</i>
      </div>
      <div class="ngm-potd__available-item --color-green"
           v-if="placedata.categories.includes('hike')"
      >
        <i class="material-icons">
          directions_walk
        </i>
      </div>
      <div class="ngm-potd__available-item --color-blue"
           v-if="placedata.categories.includes('car')"
      >
        <i class="material-icons">
          directions_car
        </i>
      </div>
    </div>
    <img class="ngm-potd__image" v-bind:src="'https://www.ucp.me/data/img/' + placedata.image">
    <div class="ngm-potd__content">
      <div class="ngm-potd__text">
        <div class="ngm-potd__label" v-if="placeofday === 'true'">PLACE OF THE DAY</div>
        <div class="ngm-potd__label" v-if="picoftheday === 'true'">PICTURE OF THE DAY</div>
        <div class="ngm-potd__title">
          {{ placedata.name }}
        </div>
      </div>
      <div class="ngm-potd__annot">
        <div class="ngm-potd__annot-price">
          {{ fullprice }}
        </div>
        <div class="ngm-potd__annot-points">
          {{ placedata.points }} Pts.
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "place",
  props: ['place', 'size', 'placeofday', 'picoftheday'],
  data: function () {
    return {}
  },
  computed: {
    placedata: function () {
      return window.locationdata.find(x => (x.id === this.place));
    },
    fullprice: function () {
      let price = 0.0;
      this.placedata.prices.forEach(function (x) {
        price += x.price;
      });

      return price.toFixed(2).replace('.', ',') + "€";
    }
  }
}
</script>

<style lang="scss">

.ngm-potd {
  margin: 10px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  position: relative;
  display: block;
  max-width: 600px;

  &.--size-big {
    height: 250px;
  }
  &.--size-medium {
    height: 150px;
  }

  &__label {
    font-size: 13px;
    font-weight: bold;
  }

  &__title {
    font-size: 20px;
    font-weight: bold;
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin-bottom: -10px;
  }

  &__content {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(0deg, white 0%, #ffffffcc 40%, transparent 100%);
    height: 40%;
    min-height: 100px;
    display: flex;
    align-items: flex-end;
  }

  &__text {
    flex: 1;
    padding: 10px 15px;
    color: #404040;
  }

  &__annot {
    display: flex;

    > div {
      padding: 5px 10px;
    }
  }

  &__annot-price {
    background-color: #0277bd;
    color: white;
  }

  &__annot-points {
    background-color: #fdd835;
    color: black;

  }

  &__annot > :first-child {
    border-top-left-radius: 8px;
  }
  &__available {
    position: absolute;
    right: 0;
    top: 0;
    display: flex;
    > :first-child {
      border-bottom-left-radius: 10px;
    }
  }
  &__available-item {
    padding: 2px 6px;
    &.--color-red {
      background-color: #f44336;
      color: white;
    }
    &.--color-blue {
      background-color: #2196f3;
      color: white;
    }
    &.--color-green {
      background-color: #8bc34a;
      color: white;
    }
    &.--color-violett {
      background-color: #8e24aa;
      color: white;
    }
  }
}

</style>

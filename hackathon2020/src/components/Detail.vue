<template>
  <div class="ngm-detail">
    <div class="ngm-detail__image-container">
      <div class="ngm-detail__image-nav">
        <router-link to="/">
          <i class="material-icons">arrow_back</i>
        </router-link>
      </div>
      <img class="ngm-detail__image" v-bind:src="'https://www.ucp.me/data/img/' + placedata.image">
      <div class="ngm-detail__content">
        <div class="ngm-detail__text">
          <div class="ngm-detail__title">
            {{ placedata.name }}
          </div>
        </div>
      </div>
    </div>
    <div class="ngm-detail__annot">
      <div class="ngm-detail__annot-price">
        {{ fullprice }}
      </div>
      <div class="ngm-detail__annot-points">
        {{ placedata.points }} Pts.
      </div>
    </div>
    <div class="ngm-detail__paragraph">
      <div class="ngm-detail__paragraph-item">
        <div class="ngm-detail__icon">
          <i class="material-icons">info_outline</i>
        </div>
        <div class="ngm-detail__text">
          {{ placedata.description }}
        </div>
      </div>
    </div>

    <div class="ngm-detail__paragraph --color-blue" v-if="placedata.prices.length > 0">
      <h3>PRICES</h3>
      <div class="ngm-detail__paragraph-item" v-for="price in placedata.prices">
        <div class="ngm-detail__icon">
          <i class="material-icons">{{ price.icon }}</i>
        </div>
        <div class="ngm-detail__text">
          {{ price.item }}
        </div>
        <div class="ngm-detail__price">
          <b>{{ price.price.toFixed(2).replace('.', ',') }}€</b>
        </div>
      </div>
    </div>

    <div class="ngm-detail__paragraph --color-yellow" v-if="placedata.reachable.length > 0">
      <h3>ARRIVAL</h3>
      <div class="ngm-detail__paragraph-item" v-for="reach in placedata.reachable">
        <div class="ngm-detail__icon">
          <i class="material-icons">{{ reach.icon }}</i>
        </div>
        <div class="ngm-detail__text">
          {{ reach.label }}
        </div>
      </div>
    </div>

    <div class="ngm-detail__paragraph --color-green" v-if="placedata.challanges.length > 0">
      <h3>CHALLANGE</h3>
      <div class="ngm-detail__paragraph-item" v-for="challange in placedata.challanges">
        <div class="ngm-detail__icon">
          <i class="material-icons">{{ challange.icon }}</i>
        </div>
        <div class="ngm-detail__text">
          {{ challange.label }}
        </div>
        <div class="ngm-detail__price">
          <b>{{ challange.addpoints }} Pts.</b>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  name: "Detail",
  data: function () {
    return {}
  },
  computed: {
    place: function () {
      return this.$route.params.id;
    },
    placedata: function () {
      return window.locationdata.find(x => (x.id === this.place));
    },
    fullprice: function () {
      let price = 0.0;
      this.placedata.prices.forEach(function (x) {
        console.log(x);
        price += x.price;
      });

      return price.toFixed(2).replace('.', ',') + "€";
    }
  }
}
</script>

<style lang="scss">
.ngm-detail {
  position: fixed;
  top: 10px;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: white;
  box-shadow: 0 0 5px #00000033;
  z-index: 1000;
  &__image-container {
    height: 260px;
    position: relative;
  }

  &__image {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  &__image-nav {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    max-width: 800px;
    margin: 0 auto;
    a {
      padding: 10px;
      color: #fff;
      display: inline-block;
      text-shadow: 0 0 2px #00000080;
    }
  }

  &__content {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(0deg, white 0%, #ffffffcc 40%, transparent 100%);
    height: 30%;
    display: flex;
    align-items: flex-end;
    padding: 10px 15px;
    font-size: 22px;
    font-weight: bold;
  }

  &__annot {
    display: flex;
    justify-content: flex-end;
    max-width: 800px;
    margin: 0 auto;
    > :first-child {
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
    }
    > div {
      padding: 5px 10px;
    }
  }

  &__annot-price {
    background-color: #0277bd;
    color: #fff;
  }

  &__annot-points {
    background-color: #fdd835;
    color: #000;
  }
  &__paragraph-item {
    display: flex;
  }
  &__icon {
    margin-right: 10px;
  }
  &__text {
    flex: 1;
    max-width: 800px;
    margin: 0 auto;
  }
  &__paragraph {
    color: gray;
    padding: 15px 10px 20px;
    max-width: 800px;
    margin: 0 auto;
    h3 {
      margin: 0 0 10px;
      font-size: 16px;
      font-weight: normal;
    }
    &.--color-red {
      background-color: #f44336;
      color: black;
    }
    &.--color-blue {
      background-color: #2196f3;
      color: white;
    }
    &.--color-green {
      background-color: #8bc34a;
      color: black;
    }
    &.--color-yellow {
      background-color: #fcd734;
      color: black;
    }
  }
}


</style>

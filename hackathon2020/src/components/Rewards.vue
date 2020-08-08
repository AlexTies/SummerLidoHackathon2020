<template>
  <div class="ngm-rewards">
    <div class="ngm-rewards__amount">
      <div class="ngm-rewards__points">
        <b>{{ points }}</b> <span>Points</span>
      </div>
    </div>
    <div class="ngm-rewards__item" v-for="reward in rewards">
      <div class="ngm-rewards__image-container">
        <img class="ngm-rewards__image" v-bind:src="'https://www.ucp.me/data/img/' + reward.image">
        <div class="ngm-rewards__content">
          <div class="ngm-rewards__text">
            <div class="ngm-rewards__title">
              {{ reward.name }}
            </div>
            <div class="ngm-rewards__label">{{ reward.description }}</div>

          </div>
        </div>
      </div>
      <div class="ngm-rewards__purchase">
        <div class="ngm-rewards__price">
          {{ reward.price }} Points
        </div>
        <div class="ngm-rewards__buy">
          BUY NOW
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Rewards",
  data: function () {
    return {
      points: 3290,
      rewards: window.rewards
    }
  }
}
</script>

<style lang="scss">
.ngm-rewards {
  &__amount {
    background-color: #fcd734;
    padding: 15px 20px;
    max-width: 600px;
    width: calc(100% - 10px);
    box-sizing: border-box;
    border-radius: 10px;
    margin: 10px;
  }
  &__points {
    b {
      font-size: 24px;
    }
  }
  &__item {
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    position: relative;
    display: block;
    max-width: 600px;
    margin: 10px;
  }

  &__image-container {
    height: 200px;
    position: relative;
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

  &__purchase {
    display: flex;
    align-items: center;
  }

  &__price {
    flex: 1;
    text-align: right;
    margin: 0 20px;
  }

  &__buy {
    padding: 15px 30px;
    background-color: #fcd734;
    font-weight: bold;
  }

  &__text {
    padding: 5px 15px;
  }

  &__title {
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 3px;
  }
}
</style>

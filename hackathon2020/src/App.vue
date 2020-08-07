<template>
  <div id="app" class="ngm-container">

    <header class="ngm-header">
      <div class="ngm-header__branding">
        <div class="ngm-header__app">{{ branding.app }}</div>
        <div v-if="branding.app !== ''" class="ngm-header__vendor">{{ branding.vendor }}</div>
      </div>
    </header>
    <main class="ngm-main">
      <router-view/>
    </main>
    <nav class="ngm-menu">
      <router-link v-bind:to="route.slug" class="ngm-menu__item" v-for="route in routes">
        <div class="ngm-menu__icon material-icons">{{ route.icon }}</div>
        <div class="ngm-menu__label">{{ route.label }}</div>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: function () {
    return {
      branding: {
        app: "NatureGems",
        vendor: ""
      },
      routes: [
        {
          icon: "home",
          slug: "/",
          label: "Home"
        },
        {
          icon: "favorite",
          slug: "/rewars",
          label: "Rewards"
        },
        {
          icon: "map",
          slug: "/maps",
          label: "Map"
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.ngm-container {
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: auto 1fr auto;
}
.ngm-main {
  overflow-y: auto;
  overflow-x: hidden;
}
.ngm-header {
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 20px;
  box-shadow: 0 0 2px #00000033;
}
.ngm-menu {
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  box-shadow: 0 0 2px #00000033;

  &__item {
    text-align: center;
    margin: 0 10px;
    line-height: 0.9;
  }

  &__label {
    font-size: 14px;
  }
}
body {
  margin: 0;
}
</style>

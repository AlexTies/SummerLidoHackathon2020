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
      <router-link v-bind:to="route.slug" class="ngm-menu__item" v-for="route in routes" v-bind:class="'--color' + route.color">
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
          label: "Home",
          color: "-blue"
        },
        {
          icon: "favorite",
          slug: "/rewards",
          label: "Rewards",
          color: "-yellow"
        },
        {
          icon: "map",
          slug: "/maps",
          label: "Map",
          color: "-red"
        }
      ]
    }
  }
}
</script>

<style lang="scss">
body {
  font-family: 'Roboto', sans-serif;
}

.ngm-container {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
  @media screen and (min-width: 720px) {
    display: block;
  }
}

.ngm-main {
  overflow-y: auto;
  overflow-x: hidden;
  padding-bottom: 80px;
}

.ngm-header {
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  padding: 0 20px;
  box-shadow: 0 0 2px #00000033;
  @media screen and (min-width: 720px) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    justify-content: end;
    font-weight: bold;
    font-size: 26px;
    box-shadow: none;
    background: linear-gradient(180deg, white 0%, #ffffffcc 40%, transparent 100%);
    z-index: 10;
    height: 65px;
    pointer-events: none;
  }
}

.ngm-menu {
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  box-shadow: 0 0 2px #00000033;
  background-color: white;
  @media screen and (min-width: 720px) {
    position: fixed;
    bottom: 30px;
    left: 20px;
    border-radius: 10px;
    padding: 0;
  }

  &__item {
    text-align: center;
    padding: 0 10px;
    line-height: 1;
    text-decoration: none;
    min-width: 40px;
    &.--color-red {
      color: #f44336;
    }
    &.--color-blue {
      color: #2196f3;
    }
    &.--color-green {
      color: #8bc34a;
    }
    &.--color-yellow {
      color: #fbc02d;
    }
  }

  &__label {
    font-size: 14px;
  }
}

body {
  margin: 0;
  height: 100vh;
  @media screen and (min-width: 720px) {
    margin-top: 50px;
    height: calc(100vh - 50px);
  }
}
</style>

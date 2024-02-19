<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/table">Table</router-link>
    </nav>
    <router-view/>
  </div>
</template>
<script>

export default {
  name: "app",
  components: {
  },
  data() {
    return {
      processActive: false,
      mark: null,
      timerId: null,
      time: 0
    }
  },


}
</script>

<style lang="scss">
#app {
  max-width: 1200px;
  margin: 0 auto;
}

nav {
  margin-bottom: 0;

  a {
    text-decoration: none;
    &.router-link-exact-active {
      font-weight: 700;

    }
  }
}
</style>

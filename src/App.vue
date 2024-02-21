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
  created() {
    console.log(this.$root)
    this.$root.$on('custom_message', (evt) => {
      console.log('received custom message', evt)
    })
  },
  mounted() {
    setTimeout(() => {
      this.$root.$emit('custom_message', {message: 'Hello!'})
    }, 1000)
  }


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

<template>
  <div id="app">
    <router-view/>
    <SvgSprite/>
  </div>
</template>
<script>
import {emitter} from '@lms/styleguide'
import { nav } from "@/router";
import SvgSprite from "@/components/SvgSprite.vue";

export default {
  name: "KitApp",
  components: {
    SvgSprite
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
    emitter.emit('app:set_nested_nav', nav)
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

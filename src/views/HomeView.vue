<template>
  <div class="home">
    <div class="header">
      <img alt="Vue logo" width="30" height="30" src="../assets/logo.png">
      <h1>App with Ui Kit</h1>
    </div>

    <h2>Root Route</h2>
    <div class="wrap">
      <SInput v-model="val"/>
      <SButton variant="primary" size="small">button</SButton>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import {SButton, SInput } from '@synergy/lms-ui-kit'
export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    SButton,
    SInput
  },
  data() {
    return {
      val: 'Test val'
    }
  }
}
</script>
<style lang="scss" scoped>
.home {
  max-width: 600px;
  margin: 0 auto;
}
.wrap {
  padding: 10px;
  outline: 1px dashed red;
  & > * {
    margin-bottom: 20px;
  }
}
.header {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>

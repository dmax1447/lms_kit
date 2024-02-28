<template>
  <div class="test">
    <div class="assets">
      <div class="asset">
        <div class="asset__title">sprite svg</div>
        <div class="asset__body">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40">
            <use xlink:href="#pen" />
          </svg>
        </div>
      </div>
      <div class="asset">
        <div class="asset__title">img png</div>
        <div class="asset__body">
          <img src="@/assets/logo.png" width="40" height="40" />
        </div>
      </div>

      <div class="asset">
        <div class="asset__title">sprite dynamic href</div>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40">
          <use :xlink:href="href" />
        </svg>
      </div>

      <!--      <div class="asset">-->
      <!--        <div class="asset__title">object</div>-->
      <!--        <div class="asset__body">-->
      <!--          <object type="image/svg+xml" :data="icon"></object>-->
      <!--        </div>-->
      <!--      </div>-->

      <!--      <div class="asset">-->
      <!--        <div class="asset__title">img dynamic src</div>-->
      <!--        <img :src="src" width="40" height="40" />-->
      <!--      </div>-->
    </div>
    <div>
      <SButton variant="primary" size="small" @click="iconName = 'calendar'">click</SButton>
    </div>
  </div>
</template>

<script>
import { SButton } from '@synergy/lms-ui-kit'
import sprite from '@/assets/images/sprite.svg'
import capitalize from 'lodash/capitalize'

export default {
  name: 'TestComponent',
  components: {
    SButton,
  },
  data() {
    return {
      iconName: 'pen',
    }
  },
  computed: {
    href() {
      return `#${this.iconName}`
    },
  },
  methods: {
    capitalizeMe(str) {
      return capitalize(str)
    },
  },
}
</script>

<style scoped lang="scss">
.assets {
  padding: 10px;
  width: 100%;
  display: flex;
  outline: 1px dashed green;
  gap: 10px;
  margin-bottom: 20px;
}
.asset {
  outline: 1px dashed tomato;
  width: 80px;
  &__body {
    width: 40px;
    height: 40px;
  }
}
</style>

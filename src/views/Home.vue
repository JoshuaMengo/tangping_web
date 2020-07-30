<template>
  <div class="home">
    <van-button class="btn" type="primary">主要按钮</van-button>
    <van-button class="btn" type="info">信息按钮</van-button>
    <van-button class="btn" type="default">默认按钮</van-button>
    <van-button class="btn" type="warning">警告按钮</van-button>
    <van-button class="btn" type="danger">危险按钮</van-button>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { Component, Vue } from "vue-property-decorator";
@Component<Home>({
    components: {
        HelloWorld
    },
})
export default class Home extends Vue {
  data() {
    return {
    };
  }
}
</script>

<style scoped>
.home{
  display:flex;
  flex-direction: column;
  align-items: center;
}
.home .btn{
  margin-bottom: 30px;
}
</style>
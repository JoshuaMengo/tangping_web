<template>
  <div class="about">
    <HelloWorld ref="addDialogVisible" hidden />
    <van-list
      v-model="loading"
      :immediate-check="false"
      :finished="finished"
      finished-text="没有更多了"
      @load="this.mountMenu"
    >
      <div style="display:flex;width:98%;margin:0 auto;justify-content: space-around">
        <div class="container" ref="left_c">
          <div class="item" v-for="item in urlList" :key="item.index">
            <img class="item_image" v-lazy="item.img" />
          </div>
        </div>
        <div class="container" ref="right_c">
          <div class="item" v-for="item in urlList2" :key="item.index">
            <img class="item_image" v-lazy="item.img" />
          </div>
        </div>
      </div>
    </van-list>
  </div>
</template>
<script>
import HelloWorld from "@/components/HelloWorld.vue";
import { Component, Vue } from "vue-property-decorator";
// import vueWaterfallEasy from 'vue-waterfall-easy'
@Component({
  components: {
    HelloWorld,
  },
  metaInfo() {
    return {
      title: "首页",
    };
  },
})
export default class About extends Vue {
  // @Prop() private msg!: string;
  mounted() {
    this.$refs.addDialogVisible.classFun("璐璐", "89");
  }
  
  data() {
    return {
      loading: false,
      finished: false,
      data: [
        { img: require("@/assets/5415.jpg") },
        { img: require("@/assets/787.jpg") },
        { img: require("@/assets/2023888.jpg") },
        { img: require("@/assets/544.jpg") },

        { img: require("@/assets/656.jpg") },
        { img: require("@/assets/2023492.jpg") },
        { img: require("@/assets/2025282.jpg") },
        { img: require("@/assets/2023888.jpg") },
        { img: require("@/assets/656.jpg") },
      ],
      urlList: [
        { img: require("@/assets/5415.jpg") },
        { img: require("@/assets/787.jpg") },
        { img: require("@/assets/2023888.jpg") },
        { img: require("@/assets/544.jpg") },
      ],
      urlList2: [
        { img: require("@/assets/656.jpg") },
        { img: require("@/assets/2023492.jpg") },
        { img: require("@/assets/2025282.jpg") },
        { img: require("@/assets/2023888.jpg") },
        { img: require("@/assets/656.jpg") },
      ],
      arr1: [
        { img: require("@/assets/54541.jpg") },
        { img: require("@/assets/2023883.jpg") },
        { img: require("@/assets/5415.jpg") },
        { img: require("@/assets/2023888.jpg") },
        { img: require("@/assets/656.jpg") },
      ],
    };
  }

  mountMenu(a) {
    const index = a || 0;
    const refName = this.selectCol();
    if (this.arr1.length > index) {
      this[refName].push(this.arr1[index]);
      this.$nextTick(() => {
        setTimeout(() => {
          this.mountMenu(index + 1);
        }, 80);
      });
    }
  }

  selectCol() {
    const getHeight = (ref) => {
      return this.$refs[ref].offsetHeight;
    };
    const height1 = getHeight("left_c");
    const height2 = getHeight("right_c");
    console.log(height1, height2);
    switch (Math.min(height1, height2)) {
      case height1:
        return "urlList";
      case height2:
        return "urlList2";
    }
  }
}
</script>

<style scoped>
body,
html {
  height: 100%;
}
.about {
}
.container {
  height: 100%;
  width: 48%;
  display: flex;
  flex-wrap: wrap;
}
.container .item {
  width: 100%;
  margin-bottom: 5px;
  /* -moz-page-break-inside: avoid; */
  -webkit-column-break-inside: avoid;
  break-inside: avoid;
  overflow: hidden;
  position: relative;
}
.item_image {
  width: 100%;
  object-fit: cover;
}

</style>
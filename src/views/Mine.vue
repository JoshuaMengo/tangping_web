<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { Component, Vue } from "vue-property-decorator";
// @Component
@Component<Mine>({
    components: {
        HelloWorld
    },
    
})
export default class Mine extends Vue {
  // @Prop() private msg!: string;
  
  data() {
    return {
      list: [54, 87, 12, 45, 78, 96, 23, 45, 15, 2, 67, 56, 130],
    };
  }
 
}
</script>

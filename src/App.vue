<template>
  <div id="app">
    <div class="todoapp">
      <header-com />
      <mainer-com />
      <footer-com />
    </div>
  </div>
</template>

<script>
import "@/assets/base.css";
import "@/assets/index.css";
import Header from "@/components/HeaderCom.vue";
import Mainer from "@/components/MainCom.vue";
import footer from "@/components/FooterCom.vue";

export default {
  name: "App",
  components: {
    "header-com": Header,
    "mainer-com": Mainer,
    "footer-com": footer,
  },
  // data() {
  //   return {
  //     todos: [
  //       {
  //         title: "任务一",
  //         completed: true,
  //       },
  //       {
  //         title: "任务二",
  //         completed: false,
  //       },
  //     ],
  //     filter: "all"      
  //   };
  // },
  // created() {
  //   this.fetchFilter();
  // },
  // watch: {
  //   '$route': 'fetchFilter'
  // },
  // methods: {
  //   fetchFilter: function() {
  //     let filter = this.$route.params.filter;
  //     this.filter = filter;
  //   }
  // },
};
</script>

<style lang="less"></style>

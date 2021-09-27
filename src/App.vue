<template>
  <NavBar />
  <router-view class="content-pages" />
</template>

<script>
// @ is an alias for "src"
import NavBar from "@/components/NavBar";

export default {
  components: {
    NavBar,
  },
};
</script>

<style>
.content-pages {
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 25px 64px 60px;
  height: calc(100vh - 117px);
}
#app {
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: hidden;
}
</style>

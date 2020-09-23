<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>
import router from "./snRouter.vue"
export default {
  name: 'App',
  router:router
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html, body,#app{
    height: 100%;
}
</style>

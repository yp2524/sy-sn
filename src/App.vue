<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import router from "./snRouter.vue";
import store from "./components/store.js"
export default {
  name: 'App',
  router:router,
  store:store
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,body,#app{
  height: 100%;
} 
</style>

<script>
import index from "./components/index.vue";
import classify from "./components/home/classify.vue";
import favorite from "./components/home/favorite.vue";
import mine from "./components/home/mine.vue";
import rankinglist from "./components/home/ranklist.vue";
import roblist from "./components/home/roblisting.vue";
import shopcart from "./components/home/shopcart.vue";
import prodetail from "./components/home/prodetail.vue";

import login from "./components/home/login.vue";//登录界面
import search from "./components/home/search.vue";
import register from "./components/home/register.vue"

import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

//重复点击报错问题解决
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

export default new VueRouter({
  routes: [
   
    {
      path: "/",
      redirect:"/favorite",
      component: index,
      children: [
        {
          path: "/favorite",
          component: favorite
        },
        {
          path: "/classify",
          component: classify
        },
        {
          path: "/roblist",
          component: roblist
        },
        {
          path: "/shopcart",
          component: shopcart
        },
        {
          path: "/mine",
          component: login
        },
        {
          path:'/enter',
          component: mine
        },
        {
          path:"/search",
          component: search
        }
      ]
    },
    {
      path: "/rankinglist",
      component: rankinglist
    },
    {
      path:"/prodetail",
      component:prodetail
    },
    {
      path:"/register",
      component:register
    }
  ]
});
</script>
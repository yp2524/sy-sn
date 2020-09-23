import Vue from 'vue';
import App from './App.vue';

// swiper插件
import VueAwesomeSwiper from "vue-awesome-swiper";
import Swiper,{Navigation,Autoplay,Pagination} from 'swiper';
Swiper.use([Navigation,Autoplay,Pagination]);
Vue.use(VueAwesomeSwiper);
import "swiper/swiper-bundle.css";

Vue.config.productionTip = false;
import "./iconfont/iconfont.css";


new Vue({
  render: h => h(App),
}).$mount('#app')

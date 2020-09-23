<template>
  <div class="main">
    <keep-alive>
        <router-view></router-view>
    </keep-alive>

    <template>
      <div class="index-bottom">           
            <div v-if="comName=='favorite'" @click="changeCom('favorite')">
                <img src="../images/bottomImg/heart-yellow.png" alt="">
                <p class="love">猜你喜欢</p>
            </div>
            <div v-else @click="changeCom('favorite')">
                <img src="../images/bottomImg/house.png" alt="">
                <p class="house">首页</p>
            </div>

            <div @click="changeCom('classify')">
                <img v-if="comName=='classify'" src="../images/bottomImg/magglass-yellow.png" alt="">
                <img v-else src="../images/bottomImg/magglass.png" alt="">
                 <p>分类</p>
            </div>
            <template v-if="comName=='favorite'">
                <div @click="changeCom('rankinglist')">
                    <img v-if="comName=='rankinglist'" src="../images/bottomImg/ranklist-yellow.png" alt="">
                    <img v-else src="../images/bottomImg/ranklist.png" alt="">
                    <p>排行榜</p>
                </div>
            </template>
            <template v-else>
                <div @click="changeCom('roblist')">
                    <img v-if="comName=='rankinglist'" src="../images/bottomImg/ranklist-yellow.png" alt="">
                    <img v-else src="../images/bottomImg/ranklist.png" alt="">
                    <p>必抢清单</p>
                </div>
            </template>
            <div @click="changeCom('shopcart')">
                <img v-if="comName=='shopcart'" src="../images/bottomImg/cart-yellow.png" alt="">
                <img v-else src="../images/bottomImg/cart.png" alt="">
                <p>购物车</p>
            </div>

            <div @click="changeCom('mine')">
                <img v-if="comName=='mine'" src="../images/bottomImg/mine-yellow.png" alt="">
                <img v-else src="../images/bottomImg/mine.png" alt="">
                   <p>我的易购</p>
            </div>
      </div>
    </template>
  </div>
</template>
<script>
export default {
  data() {
    return {
        comName:"favorite"
    }
  },
  methods:{
      changeCom(name){
          this.comName=name;
          this.$router.push({path:`/${name}`})
      }
  }
};
</script>
<style scoped>
.main{
    height: 100%;
}
.index-bottom{
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: row;
    width: 100%;
    background-color: #fff;
    flex-shrink: 0;
}
.index-bottom>div{
    width: 25%;
    height: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.index-bottom>div>img{
    height: 48%;
}
.index-bottom>div>p{
    font-size: 10px;
    color: #666666;
}
.index-bottom>div>.love{
    font-weight:bolder;
    color: #000;
}
.main{
    width: 100%;
    height: 100%;
}
</style>
<template>
    <div class="favorite-component">
        <!-- head -->
        <div class="fav-head">
            <div class="fav-head-up">
                <div class="fav-head-img">
                    <img src="../../images/favImg/head-classify.png" alt="">
                </div>
                <div class="fav-head-gif">
                    <img src="../../images/favImg/head-title.gif" alt="">
                </div>
                <div class="denglu">
                    <img src="../../images/favImg/denglu.png" alt="">
                </div>         
            </div>
            <div class="fav-head-input">
                <input type="search" placeholder="中秋悦礼 满199减60" class="search">
            </div>            
        </div>
        <!-- 内容 -->
        <!-- 轮播图 -->
        <div class="fav-content">
            <div class="fav-content-lunbo">
                <swiper ref="mySwiper" :options="swiperOptions" class="my-swiper">
                    <swiper-slide class="lunbo-pic">
                        <img src="../../images/favImg/lunbo1.jpg" alt="">
                    </swiper-slide>
                    <swiper-slide class="lunbo-pic">
                        <img src="../../images/favImg/lunbo2.png" alt="">
                    </swiper-slide>
                    <swiper-slide class="lunbo-pic">
                         <img src="../../images/favImg/lunbo3.jpg" alt="">
                    </swiper-slide>
                    <swiper-slide class="lunbo-pic">
                         <img src="../../images/favImg/lunbo4.png" alt="">
                    </swiper-slide>
                    <swiper-slide class="lunbo-pic">
                         <img src="../../images/favImg/lunbo5.png" alt="">
                    </swiper-slide>
                     <swiper-slide class="lunbo-pic">
                         <img src="../../images/favImg/lunbo6.png" alt="">
                    </swiper-slide>
                    <swiper-slide class="lunbo-pic">
                         <img src="../../images/favImg/lunbo7.jpg" alt="">
                    </swiper-slide>
                    <swiper-slide class="lunbo-pic">
                         <img src="../../images/favImg/lunbo8.png" alt="">
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
            </div>
            <!-- 留白 -->
            <div class="useless"></div>
                <!-- 中秋插图 -->
            <div class="mid-autumn">
                <div class="mid-autumn-item">
                    <img src="../../images/favImg/zqleft.jpg" alt="">
                </div>
                <div class="mid-autumn-item">
                    <img src="../../images/favImg/zqmiddle.jpg" alt="">
                </div>
                <div class="mid-autumn-item">
                    <img src="../../images/favImg/zqright.jpg" alt="">
                </div>            
            </div>

            <!-- sn-list -->
            <div class="wrapper">
                <ul class="fix">
                    <li class="fix-li">
                        <a href="" class="fix-li-item">
                            <div class="fix-li-img">
                                <img src="../../images/favImg/sn-miaosha.png" alt="">
                            </div>
                            <div class="fix-li-title">苏宁秒杀</div>
                        </a>
                        <a href="" class="fix-li-item">
                            <div class="fix-li-img">
                                <img src="../../images/favImg/sn-shopping.png" alt="">
                            </div>
                            <div class="fix-li-title">苏宁超市</div>
                        </a>
                        <a href="" class="fix-li-item">
                            <div class="fix-li-img">
                                <img src="../../images/favImg/sn-pingou.png" alt="">
                            </div>
                            <div class="fix-li-title">苏宁拼购</div>
                        </a>
                          <a href="" class="fix-li-item">
                            <div class="fix-li-img">
                                <img src="../../images/favImg/sn-shuma.png" alt="">
                            </div>
                            <div class="fix-li-title">手机数码</div>
                        </a>
                        <a href="" class="fix-li-item">
                            <div class="fix-li-img">
                                <img src="../../images/favImg/sn-jiadian.png" alt="">
                            </div>
                            <div class="fix-li-title">苏宁家电</div>
                        </a>

                         <a href="" class="fix-li-item">
                            <div class="fix-li-img">
                                <img src="../../images/favImg/sn-freefruits.png" alt="">
                            </div>
                            <div class="fix-li-title">免费水果</div>
                        </a>
                        <a href="" class="fix-li-item">
                            <div class="fix-li-img">
                                <img src="../../images/favImg/sn-xiaoxiaole.png" alt="">
                            </div>
                            <div class="fix-li-title">赚钱消消乐</div>
                        </a>
                        <a href="" class="fix-li-item">
                            <div class="fix-li-img">
                                <img src="../../images/favImg/sn-sign.png" alt="">
                            </div>
                            <div class="fix-li-title">签到有礼</div>
                        </a>
                          <a href="" class="fix-li-item">
                            <div class="fix-li-img">
                                <img src="../../images/favImg/sn-lingjuan.png" alt="">
                            </div>
                            <div class="fix-li-title">领券中心</div>
                        </a>
                        <a href="" class="fix-li-item">
                            <div class="fix-li-img">
                                <img src="../../images/favImg/sn-more.png" alt="">
                            </div>
                            <div class="fix-li-title">更过频道</div>
                        </a>
                        
                    </li>
                </ul>
            </div>

            <!-- 新人礼包 -->
            <div class="newBag">
               <a href="" class="newBag-left">
                   <img src="../../images/favImg/gift1.gif" alt="">
               </a>
               <a href="" class="newBag-useless"></a>
               <a href="" class="newBag-right">
                   <img src="../../images/favImg/gift2.gif" alt="">
               </a>
               <a href="" class="newBag-useless"></a>
               <a href="" class="newBag-right">
                   <img src="../../images/favImg/gift3.gif" alt="">
               </a>
            </div>
            <!-- 留白 -->
            <div class="useless"></div>

            <!-- 低价、补贴、秒杀区 -->
            <div class="fav-low-price">
                <!-- 低价区 -->
                <div class="low-price-area">
                    <div class="low-price-area-title">
                        <div class="everyday-title">天天低价</div>
                        <div class="time">
                            <span>00</span>
                            :
                            <span>00</span>
                            :
                            <span>00</span>
                        </div>
                    </div>
                    <p>人气好货限时抢</p>
                    <div class="low-price-goods">
                        <ul class="low-price-goods-ul">
                            <li class="low-price-goods-li">
                                <a href="">
                                    <img src="../../images/favImg/lowprice1.jpg" alt="">
                                    <p class="low-price-label">
                                        <span>￥</span>
                                        <span>1.1</span>
                                    </p>
                                </a>
                                <a href="">
                                    <img src="../../images/favImg/lowprice2.jpg" alt="">
                                    <p class="low-price-label">
                                        <span>￥</span>
                                        <span>3.5</span>
                                    </p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- 秒杀区 -->
                <div class="low-price-area">
                    <div class="low-price-area-title">
                        <div class="everyday-title">苏宁秒杀</div>
                    </div>
                    <p>品质好货天天秒</p>
                    <div class="low-price-goods">
                        <ul class="low-price-goods-ul">
                            <li class="low-price-goods-li">
                                <a href="">
                                    <img src="../../images/favImg/lowprice3.jpg" alt="">
                                    <div class="img-desk">美可卓</div>
                                </a>
                                <a href="">
                                    <img src="../../images/favImg/lowprice4.png" alt="">
                                    <div class="img-desk">一对活宝</div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- 百亿补贴 -->
             <div class="fav-low-price">
                <div class="low-price-area twoleft">
                    <div class="low-price-area-title">
                        <div class="everyday-title">百亿补贴</div>
                    </div>
                    <p>大牌补贴天天有</p>
                    <div class="low-price-goods">
                        <ul class="low-price-goods-ul">
                            <li class="low-price-goods-li">
                                <a href="">
                                    <img src="../../images/favImg/butie1.jpg" alt="">
                                    <div class="img-desk">补贴价4699</div>
                                </a>
                                <a href="">
                                    <img src="../../images/favImg/butie2.jpg" alt="">
                                   <div class="img-desk">补贴价168</div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- 苏宁拼购 -->
                <div class="low-price-area tworight">
                    <div class="low-price-area-title">
                        <div class="everyday-title">苏宁秒杀</div>
                    </div>
                    <p>品质好货天天秒</p>
                    <div class="low-price-goods">
                        <ul class="low-price-goods-ul">
                            <li class="low-price-goods-li">
                                <a href="">
                                    <img src="../../images/favImg/pingou1.jpg" alt="">
                                    <div class="img-desk">2人拼9.9</div>
                                </a>
                                <a href="">
                                    <img src="../../images/favImg/pingou2.jpg" alt="">
                                    <div class="img-desk">2人拼4699元</div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- 为您推荐 -->
            <div class="fav-low-price recommend">
                <div class="recommend-left">
                    <a href="">
                        <p class="recommend-p1">为您推荐</p>
                        <p class="recommend-p2">精选频道</p>
                    </a>
                </div>
                <div class="recommend-right">
                    <a href="">
                        <img src="../../images/favImg/recommend1.jpg" alt="">
                        <p>苏宁国际</p>
                    </a>
                    <a href="">
                        <img src="../../images/favImg/recommend2.jpg" alt="">
                        <p>苏宁Outlets</p>
                    </a>
                    <a href="">
                        <img src="../../images/favImg/recommend3.png" alt="">
                        <p>新品首发</p>
                    </a>
                    <a href="">
                        <img src="../../images/favImg/recommend4.jpg" alt="">
                        <p>0元试用</p>
                    </a>
                </div>
            </div>

            <!-- 推荐榜单 -->
            <div class="recommendlist">
                <div class="recommendlist-title">推荐榜单</div>
                <div class="recommend-content">
                    <!-- 第一行 -->
                    <div class="recommend-row-one">
                        <a href="">
                            <img src="../../images/favImg/recommend5.jpg" alt="" class="recommend-row-pic">
                            <div class="recommend-row-one-down">
                                <div class="recommend-bg">
                                    <img src="../../images/favImg/recommend-bg.png" alt="">
                                </div>
                                <div class="recommend-bg-title">
                                    <p class="row-one-p1">
                                        <span>人气榜</span>
                                    </p>
                                    <p class="row-one-p2">甄选营养纯奶榜</p>
                                    <p class="row-one-p2">卖爆24.5万件</p>
                                </div>
                            </div>
                        </a>
                         <!-- <a href="">
                            <img src="../../images/favImg/recommend5.jpg" alt="">
                            <div>
                                <div>
                                    <img src="../../images/favImg/recommend-bg.png" alt="">
                                </div>
                                <div>
                                    <p class="row-one-p1">
                                        <span>人气榜</span>
                                    </p>
                                    <p class="row-one-p2">甄选营养纯奶榜</p>
                                    <p class="row-one-p2">卖爆24.5万件</p>
                                </div>
                            </div>
                        </a>
                         <a href="">
                            <img src="../../images/favImg/recommend5.jpg" alt="">
                            <div>
                                <div>
                                    <img src="../../images/favImg/recommend-bg.png" alt="">
                                </div>
                                <div>
                                    <p class="row-one-p1">
                                        <span>人气榜</span>
                                    </p>
                                    <p class="row-one-p2">甄选营养纯奶榜</p>
                                    <p class="row-one-p2">卖爆24.5万件</p>
                                </div>
                            </div>
                        </a> -->
                    </div>
                    <!-- 第二行 -->
                    <!-- 第三行 -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
      data() {
      return {
        swiperOptions: {
          pagination: {
            el: '.swiper-pagination',
           
          },
          // autoplay:true,
          loop:true,
          // Some Swiper option/callback...
          autoplay:true //自动轮播
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    },
}
</script>

<style scoped>
/* header */
a{
    text-decoration: none;
}
.favorite-component{
    width: 100%;
    height: 93%;
    background-color: #f2f2f2;
    overflow: auto;
}
.fav-head{
    width: 100%;
    height: 14%;
    background: #ffdb47; 
}
.fav-head-up{
    height: 50%;
    display: flex;
    flex-direction: row;
    text-align: center;
    justify-content: center;
    align-items: center;
    padding: 0 12px;
    flex-shrink: 0;
}
.fav-head-img{
    width: 10%;
}
.fav-head-img img{
    width: 20px;
}
.fav-head-gif{
    width: 80%;
}
.fav-head-gif img{
    width: 88%;
}
.denglu{
    width: 10%;
}
.denglu img{
    width: 20px;
}
.fav-head-input{
    width: 100%;
    height: 50%;
    padding: 0 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
}
.fav-head-input input{
    width: 100%;
    /* height: 70%; */
    border: 1px solid #eee;
    border-radius: 15px;
    height: 65%;
    padding: 0 12px;
    outline: none;
}

/* 内容 */
.fav-content{
    height: 100%;
}
/* 轮播图 */
.fav-content-lunbo{
    width: 100%;
    height: 22%;
    padding: 0 12px;
    background: #ffdb47;
    flex-shrink: 0;
}
.my-swiper{
    border-radius: 10px;
    height: 100%;
     flex-shrink: 0;
}
.lunbo-pic{
    height: 100%;
}
.lunbo-pic img{
    width: 100%;
    height: 100%;
}
/* 留白 */
.useless{
    width: 100%;
    height: 1%;
    background-color:#f2f2f2;
}
/* 中秋插图 */
.mid-autumn{
    height: 16%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    flex-shrink: 0;
    flex-shrink: 0;
}
.mid-autumn-item{
    height: 100%;
}
.mid-autumn-item img{
    width: 100%;
    height: 100%;
}
/* sn-list */
.wrapper{
    height: 25%;
    flex-shrink: 0;
}
.fix{
    width: 100%;
    height: 100%;
}
.fix-li{
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
.fix-li a{
    width: 20%;
    text-align: center;
}
.fix-li-img{
    width: 100%;
    padding: 12px 16px 0px 16px;
}
.fix-li-img img{
    width: 42px;
}
.fix-li-title{
    font-size: 12px;
    color: #666;
}

/* 新人礼包 */
.newBag{
    width: 100%;
    height: 18%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    flex-shrink: 0;
    margin-top: 7%;
}
.newBag-left{
    width: 50%;
    height: 100%;
}
.newBag-left img{
    width: 100%;
    height: 100%;
}
.newBag-right{
    width: 25%;
    height: 100%;
}
.newBag-right img{
    width: 100%;
    height: 100%;
}
.newBag-useless{
    width: 0.5%;
    height: 100%;
}

/*低价、补贴、秒杀区  */

/* 低价区 */
.fav-low-price{
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 0px 12px;
}
.low-price-area{
    width: 50%;
    padding: 10px 12px;
    display: flex;
    flex-direction: column;
    background-color: white;
    border-right: 1px solid #f2f2f2;
}
.low-price-area-title{
    display: flex;
    flex-direction: row;
}
.everyday-title{
    font-size: 14px;
    font-weight: 700;
    padding: 2px;
}
.time{
    color: #333;
}
.time span{
    font-size: 14px;
    font-weight: 550;
    background-color: #fc0;
    border-radius: 5px;
    padding: 1px;
}
.low-price-area p{
    font-size: 14px;
    color: #999;
}
.low-price-goods-li{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    text-align: center;
    flex-shrink: 0;
}
.low-price-goods-ul a img{
    width: 60px;
}
.low-price-label span{
    font-size: 13px;
    color: #f50;
}
/* 秒杀区 */
.img-desk{
    position: relative;
    font-size: 12px;
    color: #333;
    box-shadow: 0 -5px 8px 0.01px rgb(221, 220, 220);
    border-top-color: #eee;
}
.img-desk::before{
    content: "";
    position: absolute;
    top: -30px;
    left: 17px;
    border: 15px solid transparent;
    border-bottom-color:rgb(247, 243, 243);
}
/* 百亿补贴 */
.twoleft{
    border-top: 1px solid #f2f2f2;
    border-bottom: 1px solid #f2f2f2;
}
/* 苏宁秒杀 */
.tworight{
    border-top: 1px solid #f2f2f2;
    border-bottom: 1px solid #f2f2f2;
}

/* 为您推荐 */
.recommend{
    background-color: #f2f2f2;
}
.recommend-left{
    width: 26%;
    padding: 23.5px 9px 0px 9px;
    background-color: white;
}
.recommend-p1{
    font-size: 16px;
    font-weight: bold;
    color: #444;
}
.recommend-p2{
    font-size: 13px;
    color: #999;
}
.recommend-right{
    width: 74%;
    display: flex;
    flex-direction: row;
    flex-shrink: 0;
    text-align: center;
    background-color: white;
}
.recommend-right a{
    width: 25%;
    padding: 6px;
}
.recommend-right a img{
    width: 50px;
    height: 50px;
}
.recommend-right a p{
    font-size: 12px;
    color: #333;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
/* 推荐榜单 */
.recommendlist{
    background-color: #f2f2f2;
}
.recommendlist-title{
    font-size: 16px;
    font-weight: bold;
    padding: 5px 12px 10px;
}
/* .recommend-content{
    display: flex;
    flex-direction: column;
} */
.recommend-row-one{
    display: flex;
    flex-direction: row;
    padding: 0px 12px;
}
.recommend-row-one a{
    width: 33.33%;
    text-align: center;
    background-color: white;
}
.recommend-row-pic{
    width: 75px;
    height: 75px;
}
.recommend-row-one-down{
    width: 100%;
}
.recommend-bg{
    width: 100%;
}
.recommend-bg img{
    width: 100%;
}
.row-one-p1 span{
    font-size: 12px;
}
.row-one-p2{
    font-size: 14px;
}








</style>


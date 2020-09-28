<template>
    <div class="my-egou">
        <!-- fix -->
        <div class="egou-fix-icon iconfont">
            <a href="https://qss.suning.com/604fc.htm">&#xe60f;</a>
        </div>
        <!-- header -->
        <div class="header">
            <div class="header-title">
                <div class="title">我的易购</div>
                <div class="header-icon iconfont">
                    <a href="" @click.prevent>&#xe705;</a>
                </div>
            </div>
            <div class="information">          
                <div class="information-left">
                    <div class="one">
                        <a href="" class="information-left-pic">
                            <img src="../../images/favImg/dl1.jpg" alt="">
                        </a>    
                        <a href="" class="rz">去实名认证</a>    
                    </div>
                    <div class="information-middle">
                        <p class="information-middle-up">180******00</p>
                        <p class="information-middle-down">生态值299</p>
                    </div>       
                </div>
                
                <div class="information-right">
                    <a href="" class="member iconfont">&#xe642;</a>
                    <p>会员码</p>
                </div>
            </div>
            <!-- 优惠券、足迹、我的关注 -->
            <div class="header-last">
                <div class="header-last-one">
                    <a href="">
                        <p>0</p>
                        <p>优惠券</p>
                    </a>
                </div>
                <div class="header-last-one">
                    <a href="">
                        <p>5</p>
                        <p>领云钻</p>
                    </a>
                </div>
                <div class="header-last-one">
                    <a href="">
                        <p>8</p>
                        <p>足迹</p>
                    </a>
                </div>
                <div class="header-last-one">
                   <a href="">
                        <p>2</p>
                        <p>我的关注</p>
                    </a>
                </div>
            </div>
        </div>

            
        <!-- vip图片 -->
        <div class="vip">
            <a href="https://supervip.suning.com/snprime-web/m/toIndex.do?wx_navbar_transparent=true&safp=f73ee1cf.mG0.yojH.10&safpn=10009" class="vip-a">
                <div class="vip-left">
                    <img src="../../images/favImg/vip.png" alt="">
                    <span>【免费】 您有一张运费券带领取</span>
                </div>
                <div class="vip-right iconfont">
                    <span>立即领取</span>
                    <span>&#xe631;</span>
                </div>
            </a>
        </div>
        <!-- 我的易购 内容部分 -->
        <div class="my-content">
            <div class="my-order">
                <div class="my-order-title">
                    <span>我的订单</span>
                    <a href="" class="all iconfont">
                        <span>查看全部&nbsp;</span>
                        <span class="all-icon">&#xe631;</span>
                    </a>
                </div>
    
                <div class="my-order-status iconfont">
                    <a href="">
                        <p>&#xe700;</p>
                        <span>待支付</span>
                    </a>
                    <a href="">
                        <p>&#xe6a8;</p>
                        <span>待收货</span>
                    </a>
                    <a href="">
                        <p>&#xe611;</p>
                        <span>评价有礼</span>
                    </a>
                    <a href="">
                        <p>&#xe60a;</p>
                        <span>退货/售后</span>
                    </a>
                    <a href="">
                        <p>&#xe643;</p>
                        <span>常购清单</span>
                    </a>
                </div>
            </div>

            <!-- 必备工具 -->
            <div class="my-order must-tool">
                <div class="my-order-title">
                    <span>必备工具</span>
                </div>
    
                <div class="my-order-status must">
                    <a href="">
                        <img src="../../images/favImg/egou1.png" alt="">
                        <p>红包</p>
                    </a>
                    <a href="">
                        <img src="../../images/favImg/egou2.png" alt="">
                        <p>店铺关注</p>
                    </a>
                    <a href="">
                        <img src="../../images/favImg/egou3.png" alt="">
                        <p>足迹</p>
                    </a>
                    <a href="">
                         <img src="../../images/favImg/egou6.png" alt="">
                        <p>客户服务</p>
                    </a>
                    <a href="">
                         <img src="../../images/favImg/egou4.png" alt="">
                        <p>必抢清单</p>
                    </a>
                    <a href="">
                         <img src="../../images/favImg/egou5.png" alt="">
                        <p>拼购</p>
                    </a>
                    <a href="">
                         <img src="../../images/favImg/egou7.png" alt="">
                        <p>校园VIP</p>
                    </a>
                    <a href="">
                         <img src="../../images/favImg/egou8.png" alt="">
                        <p>我的试用</p>
                    </a>
                </div>
            </div>
            <!-- 好货推荐logo -->
            <div class="logo">
                <img src="../../images/favImg/egou9.png" alt="">
                <span>好货推荐</span>
                <img src="../../images/favImg/egou10.png" alt="">
            </div>

            <div class="like-content">
                <div v-for="(item,index) in list" :key="index" class="like-item" @click="proDetaTo(index)">
                <div class="imgBox">
                    <img :src="item.images[0]" alt />
                </div>
                <p class="proName">{{item.proName}}</p>
                <p class="shopName">{{item.shopName}}</p>
                <div class="pro-price">
                    <span class="dollar">￥</span>
                    <span class="price">{{item.price[0]}}{{item.price[1]}}</span>
                    <span class="evaluateNum">{{item.evaluateNum}}</span>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data(){
        return {
            list:[]
        }
    },
    created(){
        let that = this;
        let url = "http://127.0.0.1:5500/src/data/prolist.json";
        axios.get(url)
        .then(function(response){
            let result = response.data.proMenu;
            // console.log(result);
            that.list = result;
            // console.log(that.list)
        })
   },

   methods:{
       proDetaTo(index){
           this.$router.push({path:"/prodetail",query:{id:index}})
       }
   }
}
</script>
<style scoped>
.my-egou{
    width: 100%;
    height: 93%;
    position: relative;
}
a{
    text-decoration: none;
}
/* fix */
.egou-fix-icon{
    position: absolute;
    width: 30px;
    height: 30px;
    text-align: center;
    border: 1px solid #d3d2d2;
    border-radius: 50%;
    background-color: white;
    position: fixed;
    right: 18px;
    top: 563px;
}
.egou-fix-icon a{
    font-size: 20px;
    vertical-align: middle;
    color: black;
}



/* header */
.header{
    background-color: #FFDB47;
}
.header-title{
    display: flex;
    flex-direction: row;
    padding: 10px 12px;
}
.title{
    font-size: 18px;
    color: #000;
    font-weight: bold;
    margin: 0 auto;
}
.header-icon a{
    font-size: 19px;
    font-weight: bold;
    vertical-align: middle;
}
.information{
    display: flex;
    justify-content: space-between;
    padding: 18px 21px 0px 21px;
}
.information-left{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.information-left-pic{
    width: 55px;
    height: 55px;
}
.information-left-pic img{
    width: 55px;
    height: 55px;
    border-radius: 1.3rem;
}
.rz{
    font-size: 12px;
    padding: 0 5px;
    background-color:#FFECA3 ;
    color:#222;
    border-radius: 8px;
    margin-top: -9px;
    margin-left: -60px;
    flex-shrink: 0;
}
.information-middle{
    padding: 5px 10px;
}
.information-middle-up{
    font-size: 12px;
    font-weight: 700;
    padding: 0 0 6px 0;
}
.information-middle-down{
    background-color: #E1BB23;
    font-size: 12px;
    color: #fff;
    border-radius: 10px;
    padding: 0 5px;
}
.information-right{
    background-color: #ffe57d;
    padding: 12px;
    text-align: center;   
}
.member{
    font-size: 20px;
    font-weight: 600;
    color: #222;
}
.information-right p{
    font-size: 12px;
    font-weight: 550;
}

/* 优惠券、足迹、我的关注 */
.header-last{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px 25px;
    text-align: center;
}

.header-last-one a p{
    font-size: 13px;
    font-weight: 600;
    color: #222;
    padding: 2px 0;
}
/* vip图片 */
.vip{
    width: 100%;
    padding: 0px 12px;
    float: left;
}
.vip-a{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: white;
    border-radius: 5px;
    padding: 7px 12px;
    margin-top: -15px;
}
.vip-left{
    width: 70%;
    display: flex;
    flex-direction: row;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.vip-left img{
    width: 45px;
    height: 30px;
}
.vip-left span{
    font-size: 12px;
    color: #222;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
}
.vip-right{
    font-size: 12px;
    color: #222;
    display: flex;
    justify-content: center;
    align-items: center;
}
.vip-right span{
    margin-left: 5px;
    flex-shrink: 0;
}


/* 我的易购 内容部分 */
.my-content{
    background: #f2f2f2;
    padding: 43px 12px 10px 12px;
}
.my-order{
    background-color: white;
    border-radius: 8px;
    padding: 12px;
    flex-shrink: 0;
}
.my-order-title{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.my-order-title span{
    font-size: 15px;
    color: #222;
    font-weight: bold;
}
.all span{
    font-size: 0.48rem;
    color: #666;
}
.all-icon{
    background-color: #E1BB23;
    border-radius: 5px;
}
.my-order-status{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-align: center;
    padding: 15px 10px;
}
.my-order-status a p{
    font-size: 25px;
    color: #222;
    margin-bottom: 8px;
}
.my-order-status a span{
    font-size: 12px;
    color: #222;
}
/* 必抢清单 */
.must-tool{
    margin-top: 10px;
}
.must{
    padding: 15px 0px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
}
.must a{
    width: 25%;
    margin-top: 10px;
}
.must a img{
    width: 24px;
    height: 24px;
}
.must a p{
    font-size: 12px;
    color: #222;
}
/* 好货推荐logo */
.logo{
    text-align: center;
    margin: 8px auto;
}
.logo img{
    width: 1.5rem;
    height: 0.4rem;
    vertical-align: middle;
}
.logo span {
    font-size: 14px;
    color: #222;
    font-weight: bold;
    margin: 0 12px;
}


/* 好货推荐 */
.like-content{
    width: 100%;
    padding: 0 12px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-bottom: 40px;
}
.like-item{
    width: 49%;
    padding: 0px 5px;
    background-color: white;
    margin-top: 8px;
    padding: 0 0 5px 0;
}
.imgBox{
    width: 100%;
}
.imgBox img{
    width: 100%;
}
.proName{
    width: 100%;
    height: 43px;
    font-size: 13px;
    font-weight: bold;
    padding: 6px 4px 0px 4px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;  
}
.shopName{
    display: inline-block;
    font-size: 10px;
    padding: 0 4px;
    color: white;
    background: #7A51FA;
    border-radius: 5px;
}
.pro-price{
    flex-shrink: 0;
    padding: 5px 0 10px 0 ;
}
.dollar{
    font-size: 14px;
    color: #FF4422;
}
.price{
    font-size: 16px;
    font-weight: bold;
    color: #FF4422; 
}
.evaluateNum{
    font-size: 12px;
    color: #999999;
    margin-left: 10px;
}

</style>


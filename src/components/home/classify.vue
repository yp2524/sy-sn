<template>
  <div class="classify">
    <div class="classify-title">
      <p>商品分类</p>
      <div class="iconfont">
          <span>&#xe607;</span>
          <span>中秋悦礼 满199减60</span>
      </div>
    </div>
    <div class="classify-main">
        <div class="classify-menu">
            <ul>
                <li v-for="(item,index) in classMenuList" :key="index" @click=subClick(index) :class="{active:index==num}">
                    <span>{{item.menuTitle}}</span>
                </li>
            </ul>
        </div>
        <div class="prolist">
            <component :is="comName" :num="num"></component>
        </div>
    </div>
   
  </div>
</template>

<script>
import hotRecom from "./classifyCom/hotRecom.vue";
import phone from "./classifyCom/phone.vue";
import household from "./classifyCom/household.vue";
import computer from "./classifyCom/computer.vue";
import cook from "./classifyCom/cook.vue";
import life from "./classifyCom/life.vue";
import food from "./classifyCom/food.vue";
import personalCare from "./classifyCom/personalCare.vue";
import beautiful from "./classifyCom/beautiful.vue";
import milkPowder from "./classifyCom/milkPowder.vue";
import internation from "./classifyCom/internation.vue";
import axios from 'axios';
export default {
    data(){
        return{
            classMenuList:{},
            num:0,
            comName:"hotRecom"
        }
    },
    created(){
        var that=this;
        var url="http://127.0.0.1:5500/src/data/classify.json";
        axios.get(url).then(function(response){
            let result=response.data.proMenu;
            that.classMenuList=result;
        })
        .catch(function(error){
            console.log(error);
        })
        
    },
    methods:{
        subClick(index){
            this.num=index;
            this.comName=this.classMenuList[this.num].comName;
        }
    },
    components:{
        "hotRecom":hotRecom,
        "phone":phone,
        "household":household,
        "computer":computer,
        "cook":cook,
        "life":life,
        "food":food,
        "personalCare":personalCare,
        "beautiful":beautiful,
        "milkPowder":milkPowder,
        "internation":internation

    }
    

};
</script>
<style scoped>
html,body,.classify{
    height: 100%;
}
.classify-title{
    height: 8%;
    display: flex;
    flex-direction: row;
    align-items: center;

}
.classify-title>p{
    font-size: 18px;
    margin-left:2% ;
    margin-right:5% ;
}
.classify-title>div{
    height: 50%;
    background-color: #f7f7f7;
    color: #999999;
    font-size: 14px;
    border-radius:15px;
    flex-grow:1;
    display: flex;
    align-items: center;
    margin-right:3% ;
}
.classify-title>div>span{
    margin-left:3% ;
}
.classify-main{
    display: flex;
    flex-direction: row;
    height: 92%;
}
.classify-main>.classify-menu{
    width: 25%;
    height: 100%;
    margin-right:5%;
    background-color: #f9f9f9;
    overflow: auto;
}
.classify-main>.classify-menu li{
    height: 45px;
    text-align: center;
    line-height: 45px;
    font-size: 12px;
    color: #666;
}
.classify-main>.prolist{
    width: 75%;
    height: 92%;
}
.classify-main>.classify-menu .active{
    background-color: #fff;
    color: #000;
    font-weight: bolder;
    position: relative;
}
.classify-main>.classify-menu .active>span::before{
    content: "";
    background-color:#ffcc00;
    height: 10px;
    width: 4px;
    border-radius: 2px;
    position: absolute;
    top: 40%;
    left: 8%;
    
}
</style>

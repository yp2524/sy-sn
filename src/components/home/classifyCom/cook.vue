<template>
  <div class="recommPro" ref="scrollDiv">
    <ul class="top-menu" ref="menuBox">
      <li v-for="(item,index) in proList" :key="index" :class="{active:index==count}" @click="submit(index)" :id="'li'+index" ref="li">
        <p>{{item.proTit}}</p>
      </li>
    </ul>
    <div class="housepro">
        <div v-for="(item,index) in proList" :key="index" ref="prodeta" :id="'prodeta'+index">
        <p>{{item.proTit}}</p>
        <div v-for="(item,index) in item.details" :key="'phone'+index">
            <img :src="item.proImg" alt />
            <p>{{item.proName}}</p>
        </div>
        </div>
        <div class="tochannel">
        <a href>进入厨卫电器频道</a>
        </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  props: ["num"],
  created() {
    var that = this;
    var url = "http://127.0.0.1:5500/src/data/classify.json";
    axios
      .get(url)
      .then(function(response) {
        let result = response.data.proMenu[that.num].proList;
        that.proList = result;
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  mounted(){ 
    this.$refs.scrollDiv.addEventListener('scroll', this.scrollEvent, true)
       
  },
  beforeDestroy(){
    this.$refs.scrollDiv.addEventListener('scroll', this.scrollEvent, true)
  },
  data() {
    return {
      proList: {},
      count:0,
      morenIndex:0
    };
  },
  methods:{
      scrollEvent(){
            let top=this.$refs.prodeta[this.count].getBoundingClientRect().top;
            let height=this.$refs.prodeta[this.count].offsetHeight;
            if(top<=90-height){
                this.count++;
            }
            if(top>=80+height){
                this.count--;
            }
            let page=this.$refs.li[this.count].offsetLeft;
            this.$refs.menuBox.scrollTo({
                left:page-130,
                behavior:'smooth'
            })
            
      },
      submit(index){
          let page=document.querySelector("#prodeta"+index).offsetTop;
          this.$refs.scrollDiv.scrollTo({
              top:page-85,
              behavior:'smooth'
          })
        
      }
  }
};
</script>
<style scoped>
.recommPro {
  height: 100%;
  overflow: auto;
  width: 100%;

}
#prodeta0{
    padding-top:15% ;
}
.recommPro div {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.recommPro div >div>p {
  width: 100%;
  font-size: 11px;
  font-weight: bolder;
  margin: 4% 0 5% 0;
}
.recommPro > div >div> div {
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 3%;
  margin-bottom: 3%;
}
.recommPro > div > div>div > img {
  width: 78%;
}
.recommPro > div > div>div > p {
  font-weight: 100;
  font-size: 11px;
  text-align: center;
  color: #666666;
}
.tochannel {
  width: 80%;
  height: 2rem;
  border: 1px solid #eeeeee;
  border-radius: 10px;
  margin: 1rem 1rem 1rem 0 ;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
.recommPro > div>.tochannel > a {
  text-decoration: none;
  color: black;
  font-size: 12px;
}
.recommPro>.top-menu{
    width: 68%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    overflow: auto;
    height: 5%;
    padding-top: 2%;
    position: fixed;
    background-color: #fff;
    margin-bottom: 3%;
}
.recommPro>.top-menu>li{
    flex-shrink: 0;
    font-size: 12px;
    margin: 0 10% 3% 0;
    list-style: none;
}
.recommPro>.top-menu>li>a{
    text-decoration: none;
}
.recommPro>.top-menu>li>a>p{
    text-align: left;
    color: #666;
}
.active{
    font-weight: bolder;
    color: black;
    position: relative;
}
.active::after{
    content: "";
    display: inline-block;
    width: 10px;
    height: 25%;
    border-radius: 2px;
    background-color: #ffcc00;
    position: absolute;
    left: 28%;
    bottom: -40%;
}
</style>
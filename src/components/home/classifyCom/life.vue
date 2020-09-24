<template>
  <div class="recommPro">
    <div v-for="(item,index) in proList" :key="index">
      <p>{{item.proTit}}</p>
      <div v-for="(item,index) in item.details" :key="'phone'+index">
        <img :src="item.proImg" alt />
        <p>{{item.proName}}</p>
      </div>
    </div>
    <div class="tochannel">
        <a href="">进入生活家电频道</a>
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
  data() {
    return {
      proList: {}
    };
  }
};
</script>
<style scoped>
.recommPro {
  height:100%;
  overflow: auto;
  width: 100%;
}
.recommPro div {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.recommPro div > p {
  width: 100%;
  font-size: 11px;
  font-weight: bolder;
  margin: 4% 0 5% 0;
}
.recommPro > div > div {
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 3%;
  margin-bottom: 3%;
}
.recommPro > div > div > img {
  width: 78%;
}
.recommPro>div>div>p{
    font-weight:100;
    font-size: 11px;
    text-align: center;
    color: #666666;
}
.recommPro>.tochannel{
    width: 95%;
    height: 6%;
    border: 1px solid #eeeeee;
    border-radius: 10px;
    margin: 5% 0 10%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
}
.recommPro>.tochannel>a{
    text-decoration: none;
    color: black;
    font-size: 12px;
}
</style>
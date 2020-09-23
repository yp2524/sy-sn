<template>
  <div class="hotrecomm">
    <div>
      <img src="../../../images/classifyImg/recommend.jpg" alt />
    </div>
    <div class="recommbody">
      <p>热门推荐</p>
      <div class="recommPro">
        <div v-for="(item,index) in proList" :key="index">
          <img :src="item.proImg" alt />
          <p>{{item.proName}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
    props:['num'],
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
.hotrecomm {
  height: 100%;
}
.hotrecomm > div {
  width: 100%;
  margin-top: 3%;
}
.hotrecomm > div > img {
  width: 94%;
  border-radius: 10px;
  margin-bottom: 5%;
}
.hotrecomm >div> p {
  font-size: 12px;
  font-weight: bolder;
  margin-bottom: 5%;
}
.recommbody{
    height: 75%;
    overflow: auto;
}
.recommPro{
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.recommPro > div {
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 8%;
  margin-bottom: 5%;
}
.recommPro > div > img {
  width: 96%;
}
.recommPro > div > p {
  color: #666666;
  font-size: 13px;
}
</style>
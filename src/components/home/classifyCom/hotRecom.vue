<template>
    <div class="hotrecomm">
        <div>
            <img src="../../../images/classifyImg/recommend.jpg" alt="">
        </div>
        <p>热门推荐</p>
        <div class="recommPro">
            <div v-for="(item,index) in proList" :key="index">
                <div>
                    <img :src="item.proImg" alt="">
                    {{item.proName}}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    props:['num'],
    created(){
        var that=this;
        var url="http://127.0.0.1:5500/src/data/classify.json";
        axios.get(url).then(function(response){
            let result=response.data.proMenu[0].proList;
            that.proList=result;
        })
        .catch(function(error){
            console.log(error);
        }) 
    },
    data(){
        return{
            proList:{}
        }
    }
}
</script>
<style scoped>
.hotrecomm>div{
    width: 100%;
    margin-top: 5%;
}
.hotrecomm>div>img{
    width: 94%;
    border-radius: 10px;
    margin-bottom: 10%;
}
.hotrecomm>p{
    font-size: 12px;
    font-weight: bolder;
}
</style>
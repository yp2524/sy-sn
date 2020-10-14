<template>
  <div class="shop-cart iconfont">
    <div class="cart-top">
      <div class="cart-top-left">
        <p>购物车</p>
        <p>
          <span>&#xe630;</span>
          <span>吴中区</span>
        </p>
      </div>
      <div v-if="isEdit" class="cart-top-right" @click="isEdit=!isEdit">编辑</div>
      <div v-else class="cart-top-right" @click="isEdit=!isEdit">完成</div>
    </div>
    <div class="go-login" @click="goLogin" v-if="isLogin==false">
      <div>
        <p>登录后同步电脑与手机购物车的商品</p>
        <div>去登录</div>
      </div>
    </div>
    <div class="cart-main" v-show="proLists.length>0">
      <div class="pro-list" v-for="(item,index) in proLists" :key="index">
        <div class="pro-store">
          <input
            type="checkbox"
            class="store-select"
            @change="storeSelect(index)"
            ref="storeSel"
            checked
          />
          <img src="../../images/productImg/cshop.png" alt />
          <p>
            {{item.shopName}}
            <span>&#xe61f;</span>
          </p>
        </div>
        <div
          class="pro-deta"
          @touchstart="touchStart(index)"
          @touchmove="touchMove(index)"
          ref="touchBox"
        >
          <input type="checkbox" class="pro-select" @change="proSelect(index)" ref="proSel" checked />
          <img :src="item.images[0]" alt />
          <div>
            <p>{{item.proName}}</p>
            <p>
              500g
              <img src="../../images/productImg/tobottom.png" alt />
            </p>
            <div>
              <div>
                <span>￥{{item.price[0]}}</span>
                <span>{{item.price[1]}}</span>
              </div>
              <div class="pro-num">
                <span @click="minus(index)">-</span>
                <input type="number" v-model="item.proNum" />
                <span @click="add(index)">+</span>
              </div>
            </div>
          </div>
          <div class="proDel" @click="prodel(index)">
            <span>删除</span>
          </div>
        </div>
      </div>
    </div>
    <div class="cart-bottom" v-show="proLists.length>0">
      <div>
        <input type="checkbox" name @change="allSelect" ref="allSel" checked />
        <span>全部</span>
      </div>
      <div>
        <div class="total-price" v-if="isEdit">
          <p>
            合计:
            <span>¥{{cartTotalPrice}}</span>
          </p>
          <p v-if="proCount==0">含运费: ¥0</p>
          <p v-else class="freeCar">免运费</p>
        </div>
        <div class="toPay" v-if="isEdit">
          去结算
          <span>({{proCount}})</span>
        </div>
        <div class="toPay" v-else @click="proDel">
          删除
          <span></span>
        </div>
      </div>
    </div>

    <div class="emptyCart" v-show="proLists.length==0">
      <img src="../../images/shopCartImg/suniCart.png" alt />

      <p>购物车还是空的快去挑选好物吧</p>
      <div class="go-shop" @click="goShop">去逛逛</div>
    </div>
    <!-- 猜你喜欢 -->
    <div class="like">
      <img src="../../images/favImg/like.png" alt />
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

          <span @click.stop="addCart(index)">&#xe65e;</span>
        </div>
      </div>
    </div>

    <div class="coverDel" v-show="coverShow">
      <div>
        <div class="reminder">
          <p class="tip">提示</p>
          <p class="confirm">是否确认删除?</p>
        </div>
        <div class="btn">
          <div class="cancel" @click="cancelDel">取消</div>
          <div class="comfir" @click="comfireDel">确认</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  computed: {
    proLists() {
      return this.$store.state.proLists;
    },
     isLogin(){
      return this.$store.state.isLogin;
    }
  },
  data() {
    return {
      cartTotalPrice: 0.0,
      proCount: 0,
      isEdit: true,
      coverShow: false,
      list: [],
      startX: 0,
      endX: 0,
      moveLength: 0
    };
  },
  watch: {
    proLists: {
      handler(val) {
        this.cartTotalPrice = 0;
        this.proCount = 0;
        for (let i = 0; i < val.length; i++) {
          if (val[i].isHaveSel == true) {
            this.cartTotalPrice += val[i].totalPrice;
            this.proCount += val[i].proNum;
          }
        }
        this.cartTotalPrice = this.cartTotalPrice.toFixed(2);
      },
      deep: true
    }
  },
  created() {
    let that = this;
    let url = "http://127.0.0.1:5500/src/data/prolist.json";
    axios.get(url).then(function(response) {
      let result = response.data.proMenu;
      that.list = result;
    });
  },
  methods: {
    minus(index) {
      this.$store.commit('minusStore',index)
    },
    add(index) {
      this.$store.commit('addStore',index)
    },
    storeSelect(index) {
      if (this.$refs.storeSel[index].checked == true) {
        this.$refs.proSel[index].checked = true;
        this.proLists[index].isHaveSel = true;
      } else {
        this.$refs.proSel[index].checked = false;
        this.proLists[index].isHaveSel = false;
      }
      for (let i = 0; i < this.proLists.length; i++) {
        if (this.proLists[i].isHaveSel == false) {
          this.$refs.allSel.checked = false;
          return;
        }
      }
      this.$refs.allSel.checked = true;
    },
    proSelect(index) {
      if (this.$refs.proSel[index].checked == true) {
        this.$refs.storeSel[index].checked = true;
        this.proLists[index].isHaveSel = true;
      } else {
        this.$refs.storeSel[index].checked = false;
        this.proLists[index].isHaveSel = false;
      }
      for (let i = 0; i < this.proLists.length; i++) {
        if (this.proLists[i].isHaveSel == false) {
          this.$refs.allSel.checked = false;
          return;
        }
      }
      this.$refs.allSel.checked = true;
    },
    allSelect() {
      if (this.$refs.allSel.checked == true) {
        for (let i = 0; i < this.proLists.length; i++) {
          this.$refs.proSel[i].checked = true;
          this.$refs.storeSel[i].checked = true;
          this.proLists[i].isHaveSel = true;
        }
      } else {
        for (let i = 0; i < this.proLists.length; i++) {
          this.$refs.proSel[i].checked = false;
          this.$refs.storeSel[i].checked = false;
          this.proLists[i].isHaveSel = false;
        }
      }
    },
    proDel() {
      this.coverShow = true;
    },
    comfireDel() {
      for (let i = 0; i < this.proLists.length; i++) {
        if (this.proLists[i].isHaveSel == true) {
          this.proLists.splice(i, 1);
          i--;
        }
      }
      this.coverShow = false;
      for (let i = 0; i < this.proLists.length; i++) {
        if (this.proLists[i].isHaveSel == false) {
          this.$refs.proSel[i].checked = false;
          this.$refs.storeSel[i].checked = false;
        }
      }
    },
    cancelDel() {
      this.coverShow = false;
    },
    goShop() {
      this.$router.push({ path: "/favorite" });
    },
    proDetaTo(index) {
      this.$router.push({ path: "/prodetail", query: { id: index } });
    },
    addCart(index) {
      this.$store.commit("addCart", this.list[index]);
    },
    touchStart(index) {
      this.startX = event.changedTouches[0].clientX;
    },
    touchMove(index) {
      this.endX = event.changedTouches[0].clientX;
      this.moveLength = this.endX - this.startX;
      // console.log(this.$refs.touchBox[index]);
      if (this.moveLength < -50) {
        this.moveLength = -50;
      } else if (this.moveLength > 0) {
        this.moveLength = 0;
      }
      this.$refs.touchBox[index].style = `left:${this.moveLength}px`;
    },
    prodel(index) {
      this.proLists.splice(index, 1);
      this.$refs.touchBox[index].style = `left:0px`;
    },
    goLogin(){
      this.$router.push({path:"/mine"});
    }
  }
};
</script>
<style scoped>
.comfir {
  background: #fb0;
}
.btn {
  width: 100%;
  display: flex;
  justify-content: space-around;
  font-weight: 600;
}
.btn > div {
  padding: 3px 30px;
  /* margin-right: 5px; */
  border: 1px solid #999;
  border-radius: 5px;
}
.confirm {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: #999;
}
.tip {
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
}
.shop-cart {
  width: 100%;
  height: 100%;
  background-color: #f5f5f9;
}
.cart-top {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  height: 6%;
  background-color: #fff;
}
.cart-top > .cart-top-left {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  margin-left: 35%;
  white-space: nowrap;
  font-size: 17px;
}
.cart-top > .cart-top-left > p:last-child {
  font-size: 12px;
  margin-left: 5%;
}
.cart-top > .cart-top-left > p:last-child > span:first-child {
  color: #ffcd00;
  font-size: 9px;
}
.cart-top > .cart-top-right {
  font-size: 14px;
  color: #37f;
  margin-right: 3%;
}
.go-login{
  height: 5%;
  padding: 0 3%;
  margin-top: 3%;
}
.go-login>div{
  height: 100%;
  background-color: #ffe37e;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 7px;
}
.go-login>div>p{
  font-size: 12px;
  width: 85%;
  padding-left: 3%;
}
.go-login>div>div{
  background-color: #222;
  color:#ffe37e;
  font-size: 12px;
  padding: 1% 1%;
  border-radius: 5px;
}
.cart-main {
  padding: 3%;
  /* height: 80%; */
  overflow: auto;
}
.cart-main > .pro-list {
  background-color: #fff;
  height: 150px;
}
.pro-list {
  padding: 1% 2%;
  height: 32%;
  margin-bottom: 3%;
  overflow: hidden;
}
.pro-store {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  height: 40px;
}
.pro-store > div {
  height: 50%;
  width: 6%;
}
.pro-store > input[type="checkbox"] {
  cursor: pointer;
  position: relative;
  width: 6%;
  height: 40%;
  font-size: 14px;
}

.pro-store > input[type="checkbox"]::after {
  position: absolute;
  top: -13%;
  background-color: #fff;
  width: 90%;
  height: 120%;
  display: inline-block;
  visibility: visible;
  text-align: center;
  content: " ";
  border-radius: 50%;
  border: 1px solid #dfdfdf;
}

.pro-store > input[type="checkbox"]:checked::after {
  content: "✓";
  font-size: 15px;
  font-weight: bold;
  background-color: #ffcc00;
}
.pro-store > img {
  height: 50%;
  margin-left: 2%;
}
.pro-store > p {
  font-size: 14px;
  color: #333;
  width: 50%;
}
.pro-store > p > span {
  font-size: 15px;
  margin-left: 1%;
  color: #bbb;
}
.pro-deta {
  height: 70%;
  background-color: #fff;
  display: flex;
  align-items: center;
  position: relative;
}
.pro-deta > input[type="checkbox"] {
  cursor: pointer;
  position: relative;
  width: 6%;
  height: 15%;
  font-size: 14px;
}

.pro-deta > input[type="checkbox"]::after {
  position: absolute;
  top: -13%;
  background-color: #fff;
  width: 90%;
  height: 120%;
  display: inline-block;
  visibility: visible;
  text-align: center;
  content: " ";
  border-radius: 50%;
  border: 1px solid #dfdfdf;
}

.pro-deta > input[type="checkbox"]:checked::after {
  content: "✓";
  font-size: 15px;
  font-weight: bold;
  background-color: #ffcc00;
}
.pro-deta > img {
  height: 80%;
  margin-left: 2%;
}
.pro-deta > div {
  margin-left: 4%;
  height: 80%;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.pro-deta > div > p:first-child {
  font-size: 12px;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.pro-deta > div > p:nth-child(2) {
  font-size: 12px;
  height: 20%;
  background-color: #f6f6f6;
  width: 23%;
  margin-top: 2%;
  border-radius: 2px;
  margin-bottom: 4%;
}
.pro-deta > div > p:nth-child(2) > img {
  height: 40%;
}
.pro-deta > div > div {
  display: flex;
  height: 25%;
  flex-direction: row;
  justify-content: space-between;
  flex-shrink: 0;
  color: #f42;
  font-size: 14px;
}
.pro-deta > div > div span:first-child {
  font-weight: bold;
}
.pro-deta > div > div span:nth-child(2) {
  font-size: 11px;
}
.pro-deta > .proDel {
  position: absolute;
  top: 0;
  right: -17%;
  width: 50px;
  height: 100%;
  background-color: rgb(255, 102, 0);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}
.pro-num {
  display: flex;
  justify-content: space-between;
  width: 40%;
  height: 130%;
  border-radius: 8px;
  border: 1px solid #f8f8f8;
  padding: 1%;
}
.pro-num > span {
  background-color: #eee;
  width: 30%;
  height: 100%;
  border-radius: 50%;
  text-align: center;
  color: #222;
}
.pro-num > input {
  width: 60%;
  border: none;
  outline: none;
  text-align: center;
}
.cart-bottom {
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 7%;
  padding: 0 3%;
  position: fixed;
  bottom: 7%;
}

.cart-bottom > div:first-child {
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
}
.cart-bottom > div:first-child > span {
  margin-left: 10%;
}
.cart-bottom input[type="checkbox"] {
  cursor: pointer;
  position: relative;
  width: 17%;
  height: 55%;
  font-size: 14px;
}

.cart-bottom input[type="checkbox"]::after {
  position: absolute;
  top: 5%;
  left: -10%;
  background-color: #fff;
  width: 110%;
  height: 80%;
  display: inline-block;
  visibility: visible;
  text-align: center;
  content: " ";
  border-radius: 50%;
  border: 1px solid #dfdfdf;
}

.cart-bottom input[type="checkbox"]:checked::after {
  content: "✓";
  font-size: 15px;
  font-weight: bold;
  background-color: #ffcc00;
}
.cart-bottom > div:nth-child(2) {
  display: flex;
  width: 80%;
  height: 100%;
  align-items: center;
  justify-content: flex-end;
}
.cart-bottom .total-price {
  margin-right: 2%;
  height: 70%;
  width: 40%;
}
.cart-bottom > div > .total-price > p {
  font-size: 15px;
  text-align: right;
}
.cart-bottom .total-price > p > span {
  color: #f42;
  font-weight: bold;
  font-size: 15px;
}
.cart-bottom .total-price > p:nth-child(2) {
  font-size: 10px;
}
.cart-bottom .total-price .freeCar {
  font-size: 10px;
  border: 1px solid #fb0;
  width: 45%;
  text-align: center;
  border-radius: 4px;
  margin-left: 50%;
}
.cart-bottom .toPay {
  width: 40%;
  height: 70%;
  background-color: #ffcc00;
  border-radius: 10px;
  text-align: center;
  padding-top: 2%;
}
.coverDel {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}
.coverDel > div {
  background-color: #fff;
  width: 70%;
  height: 25%;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.coverDel > div > .reminder {
  height: 50%;
}
.coverDel > div > .reminder > p {
  height: 50%;
}
.coverDel > div > .reminder > p:first-child {
  height: 50%;
  font-size: 17px;
  text-align: center;
  font-weight: bold;
}
.emptyCart {
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.emptyCart > img {
  width: 50%;
}
.emptyCart > p {
  font-size: 15px;
  color: #666;
  margin-top: 5%;
}
.emptyCart > .go-shop {
  margin-top: 5%;
  border: 1px solid #aaa;
  color: #333;
  font-size: 13px;
  background-color: #fff;
  padding: 2px 4px;
  border-radius: 4px;
}

.like {
  margin-top: 20px;
  width: 100%;
  height: 5%;
}
.like img {
  width: 100%;
  height: 100%;
}

/* 猜你喜欢v-for循环 */
.like-content {
  width: 100%;
  padding: 0 12px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 30%;
}
.like-item {
  width: 49%;
  padding: 0px 5px;
  background-color: white;
  margin-top: 8px;
}
.imgBox {
  width: 100%;
}
.imgBox img {
  width: 100%;
}
.proName {
  width: 100%;
  height: 40px;
  font-size: 13px;
  font-weight: bold;
  padding: 6px 4px 0px 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.shopName {
  display: inline-block;
  font-size: 10px;
  padding: 0 4px;
  color: white;
  background: #7a51fa;
  border-radius: 5px;
}
.pro-price {
  flex-shrink: 0;
  padding: 5px 0 10px 0;
}
.pro-price > span:last-child {
  margin-left: 40%;
  background-color: #ffcc00;
  border-radius: 50%;
  display: inline-block;
  width: 20px;
  height: 20px;
  text-align: center;
}
.dollar {
  font-size: 14px;
  color: #ff4422;
}
.price {
  font-size: 16px;
  font-weight: bold;
  color: #ff4422;
}
.evaluateNum {
  font-size: 12px;
  color: #999999;
  margin-left: 10px;
}
</style>
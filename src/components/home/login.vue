<template>
  <div class="login">
      <div class="navurl">
          <a href="">联系客服</a>
          <a href="" @click.prevent="register">企业注册</a>
      </div>
    <!-- login界面 -->
      <div class="login-content">
          <h2>
              <img src="../../images/favImg/login1.png" alt="">
              欢迎登录苏宁易购
          </h2>
          <!-- 手机号 -->
          <div class="phone">
              <input type="text" v-model="phoneNum" placeholder="请输入手机号/用户名/邮箱" class="phone-number">
                
          </div>
          <!-- password -->
          <div class="password">
              <input :type="pwdType" v-model="password" placeholder="请输入密码" class="phone-number">
          
              <div class="password-icon">
                  <img src="../../images/favImg/login2.png" @click="imgclick" v-show="icon" alt="">
                  <img src="../../images/favImg/login3.png" @click="imgclick" v-show="!icon" alt="">
                  <a href="">忘记密码</a>
              </div>
          </div>
          <!-- 登录 -->
          <div class="register">
              <a href="" class="register-p1" @click.prevent="enter(phoneNum,password)">登录</a>
              <a href="" class="register-p2">验证码登录</a>
          </div>
      </div>
      <!-- footer -->
      <div class="footer">
          <p class="footer-p">其他登录方式</p>
          <div class="footer-icon">
              <a href="">
                  <img src="../../images/favImg/login4.png" alt="">
              </a>
              <a href="">
                  <img src="../../images/favImg/login5.png" alt="">
              </a>
              <a href="">
                  <img src="../../images/favImg/login6.png" alt="">
              </a>
          </div>
         <div class="agree-protocol">
            <span class="agree">我同意</span>
            <span class="protocol">《苏宁易购会员章程》</span>
            <span class="protocol">《易付宝协议》</span>
         </div>
      </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
    computed:{
        isLogin(){
            return this.$store.state.isLogin;
    }
    },
    data(){
        return{
            icon:true,
            phoneNum:'',
            password:'',
            pwdType:'password',
        }
    },
    methods:{
        imgclick(){
            this.icon = !this.icon;
            this.pwdType = this.pwdType == 'password'?'text':'password';
        },
        // 登录
        enter(phoneNum,password){
            if(phoneNum==''|| phoneNum==null){
                alert("请输入正确的用户名")
            } else if(password=='' || password==null || password!=111){
                alert("请输入正确的密码");
                return
            };
            if(phoneNum==123456 && password==111){ 
                this.$store.commit("enter")
                this.$router.push({path:"/enter"})
            }               
        },
        register(){
            this.$router.push({path:'/register'})
        }      
    },
}
</script>

<style scoped>
.login{
    height: 100%;
    background-color: #fff;
}
a{
    text-decoration: none;
}
.navurl{
    padding: 10px;
    text-align: right;
}
.navurl a{
    font-size: 12px;
    color: #222;
    padding: 0px 10px;
}
.navurl a:first-child{
    border-right: 1px solid #afadad;
}

/* login界面 */
.login-content{
    margin-top: 28px;
    padding: 0 37.5px;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
}
.login-content h2 img{
    width: 45px;
    height: 45px;
    vertical-align: middle;
    margin-right: 15px;
}
.login-content h2{
    font-size: 18px;
    font-weight: 500;
    color: #222;
}
.phone{
    border-bottom: 1px solid #bbb;
    padding: 0 16px;
    margin-top: 30px;
}
.phone-number{
    width: 100%;
    outline: none;
    border: none;
    padding: 10px 0px;
    font-size: 20px;
}
::-webkit-input-placeholder {
    font-size:14px;
    color: #afadad;
}
.password{
    padding: 0 16px;
    display: flex;
    border-bottom: 1px solid #bbb;
    margin-top: 12px;
}

.password-icon{
    display: flex;
    align-items: center;  
    justify-content: center;
}
.password-icon img{
    width: 1.5rem;
    margin-right: 10px;
}

.password-icon a{
    font-size: 12px;
    flex-shrink: 0;
    color: #222;
}
/* 登录 */
.register{
    margin-top: 30px;
    display: flex;
    flex-direction: column;
}
.register-p1{
    display: block;
    font-size: 17px;
    background-color: #fc0;
    color: #222;
    border-radius: .5rem;
    font-weight: 700;
    text-align: center;
    padding: 12px 0px;
}
.register-p2{
    font-size: 13px;
    text-align: center;
    color: #222;
    margin-top: 21px;
}
/* footer */
.footer{
    position: relative;
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
}
.footer-p{
    font-size: 14px;
    text-align: center;
    margin-bottom: 9.5px;
}
.footer-p::before{
    content: "";
    display: block;
    border-bottom: 1px solid #ddd;
    position: absolute;
    width: 25%;
    left: 40px;
    top: 10px;
    
}
.footer-p::after{
    content: "";
    display: block;
    border-bottom: 1px solid #ddd;
    position: absolute;
    width: 25%;
    right: 40px;
    top: 10px;
}
.footer-icon{
    margin-bottom: 17.5px;
    text-align: center;
}
.footer-icon a{
    padding: 0 30px;
}
.footer-icon a img{
    width: 33px;
    height: 33px;
}
.agree-protocol{
    text-align: center;
}
.agree{
    font-size: 12px;
}
.protocol{
    font-size: 12px;
    border-bottom: 1px solid black;
}



</style>
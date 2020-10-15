<template>
  <div class="login iconfont">
    <div class="navurl">
        <a @click.prevent="goBack">&#xe6ec;</a>
      <a href="" @click.prevent="">联系客服</a>
    </div>
    <!-- login界面 -->
    <div class="login-content">
      <h2>
        <img src="../../images/favImg/login1.png" alt />
        欢迎注册苏宁易购
      </h2>
      <!-- 用户名 -->
      <form action="">
        <div class="userName">
          <input type="text" placeholder="请输入用户名" class="user-name" />
        </div>
        <!-- password -->
        <div class="password">
          <input :type="pwdType" placeholder="请输入密码" class="pwd" />

          <div class="password-icon">
            <img src="../../images/favImg/login2.png" @click="imgclick" v-show="icon" alt />
            <img src="../../images/favImg/login3.png" @click="imgclick" v-show="!icon" alt />
          </div>
        </div>
        <div class="phoneNum">
          <input type="text"  placeholder="请输入手机号" class="pnum" />
        </div>
        <div class="eMail">
          <input type="text"  placeholder="请输入邮箱" class="mail" />
        </div>
        <!-- 登录 -->
        <div class="register">
          <input type="submit" class="register-p1" value="注册"/>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
  },
  data() {
    return {
        icon:false
    };
  },
  methods: {
    imgclick() {
      this.icon = !this.icon;
      this.pwdType = this.pwdType == "password" ? "text" : "password";
    },
    goBack(){
        this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.login {
  height: 100%;
  background-color: #fff;
}
a {
  text-decoration: none;
}
.navurl {
  padding: 10px;
  text-align: right;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.navurl a {
  font-size: 12px;
  color: #222;
  padding: 0px 10px;
}
.navurl a:first-child{
    font-size: 18px;
}

/* login界面 */
.login-content {
  margin-top: 28px;
  padding: 0 37.5px;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
}
.login-content h2 img {
  width: 45px;
  height: 45px;
  vertical-align: middle;
  margin-right: 15px;
}
.login-content h2 {
  font-size: 18px;
  font-weight: 500;
  color: #222;
}
.userName {
  border-bottom: 1px solid #bbb;
  padding: 0 16px;
  margin-top: 30px;
}
.user-name,
.pwd,
.pnum,
.mail {
  width: 100%;
  outline: none;
  border: none;
  padding: 10px 0px;
  font-size: 20px;
}
::-webkit-input-placeholder {
  font-size: 14px;
  color: #afadad;
}
.password,
.phoneNum,
.eMail {
  padding: 0 16px;
  display: flex;
  border-bottom: 1px solid #bbb;
  margin-top: 12px;
}

.password-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}
.password-icon img {
  width: 1.5rem;
  margin-right: 10px;
}

.password-icon a {
  font-size: 12px;
  flex-shrink: 0;
  color: #222;
}
/* 注册 */
.register {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
}
.register-p1 {
  display: block;
  font-size: 17px;
  background-color: #fc0;
  color: #222;
  border-radius: 0.5rem;
  font-weight: 700;
  text-align: center;
  padding: 12px 0px;
  outline: none;
  border: none;
}

/* footer */
.footer {
  position: relative;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
}
.footer-p {
  font-size: 14px;
  text-align: center;
  margin-bottom: 9.5px;
}
.footer-p::before {
  content: "";
  display: block;
  border-bottom: 1px solid #ddd;
  position: absolute;
  width: 25%;
  left: 40px;
  top: 10px;
}
.footer-p::after {
  content: "";
  display: block;
  border-bottom: 1px solid #ddd;
  position: absolute;
  width: 25%;
  right: 40px;
  top: 10px;
}
.footer-icon {
  margin-bottom: 17.5px;
  text-align: center;
}
.footer-icon a {
  padding: 0 30px;
}
.footer-icon a img {
  width: 33px;
  height: 33px;
}
.agree-protocol {
  text-align: center;
}
.agree {
  font-size: 12px;
}
.protocol {
  font-size: 12px;
  border-bottom: 1px solid black;
}
</style>
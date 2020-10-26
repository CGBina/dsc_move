<!-- 登录页面 -->
<template>
<div class='login-wrap'>
    <div class="login-inner">
        <div class="logo">
            <img src="@/assets/logo.png" alt="">
        </div>
        <div class="login-tab">
            <a href="javascript:;" :class="{active:login}" @click="changeActive">短信登录</a>
            <a href="javascript:;" :class="{active:!login}" @click="changeActive">账号登录</a>
        </div>
        <div class="login-content">
            <div v-if="login">
                <section>
                    <input type="tel" placeholder="手机号" maxlength="11" v-model="phone">
                    <button class="getcode" v-if="!icon" @click="getcodeFn">获取验证码</button>
                    <button class="getcode" v-else>已发送{{icon}}</button>
                </section>
                <section>
                    <input type="tel" placeholder="验证码" maxlength="11" >
                </section>
            </div>
            <div v-else>
                <section>
                    <input type="tel" placeholder="用户名/邮箱/手机号" v-model="user_name">
                </section>
                <section>
                    <input type="password" placeholder="密码" v-if="hidePassword" v-model="password">
                    <input type="text" placeholder="密码" v-else v-model="password">
                    <button class="getcode iconfont icon-yincang" v-if="hidePassword" @click="changePassword"></button>
                    <button class="getcode iconfont icon-xianshi" v-else @click="changePassword"></button>
                </section>
                <section>
                    <input type="tel" placeholder="验证码" maxlength="4" v-model="captcha">
                    <img 
                    ref="captcha"
                    src="http://localhost:3000/api/v1/users/captcha" alt=""
                    @click="getCaptcha">
                </section>
            </div>
            <button class="login-btn" @click="loginin">登录</button>
        </div>
    </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import {Toast} from "mint-ui";
import {loginuser} from "@/api/login.js"
export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {
     login: true,
     password:"",
     hidePassword:true,
     icon:"",
     captcha:"",
     user_name:"",
     phone:"",
     timer:"",
};
},
methods: {
    changeActive(){
        this.login=!this.login
    },
    changePassword(){
        this.hidePassword=!this.hidePassword
    },
    
    getcodeFn(){
    //获取验证码
    //判断手机号是否为true
    if(this.indentfyPhone){
       this.icon=10
       this.timer=setInterval(()=>{
       this.icon--
       if(this.icon==0){
       clearInterval(this.timer)
       }
    },1000)
  }else{
    Toast({
       message:"手机号不正确",
       position:"center",
       duration:3000,   
     })
    }
  },
  getCaptcha(){
    this.$refs.captcha.src="http://localhost:3000/api/v1/users/captcha?t="+
        new Date().getTime();
  },
    async loginin(){
    if(!this.user_name){
      Toast("用户名/邮箱/手机号！");
        return;
      }else if (!this.password) {
        Toast("请输入密码！");
        return;
      } else if (!this.captcha) {
        Toast("请输入验证码！");
        return;
      }

      const result=await loginuser(this.user_name,this.password,this.captcha)
      console.log(result)
      if (result.err_code == 0) {
        Toast({
          message: result.msg,
          position: "center",
          duration: 3000,
        });
      }
      if (result.status == 500) {
        Toast({
          message: result.msg,
          position: "center",
          duration: 3000,
        });
      }
      if (result.status == 500) {
        Toast({
          message: result.msg,
          position: "center",
          duration: 3000,
        });
      }
      if (result.status == 200) {
        this.$store.dispatch("getUserInfo", result.data[0]);
        this.$router.push("/home");
      }
}
},
computed: {
  indentfyPhone(){
  return /^[1][3,5,,7,8,9][0-9]{9}$/.test(this.phone);
  }
},
}
</script>
<style lang="less">
.login-wrap {
  width: 100%;
  height: 100%;
  background: #fff;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  .login-inner {
    width: 85%;
    margin: 0px auto;
    .logo {
      width: 10rem;
      height: 10rem;
      border: 6px solid #ccc;
      border-radius: 50%;
      overflow: hidden;
      margin: 0px auto;
      img {
        width: 100%;
      }
    }
    .login-tab {
      width: 100%;
      height: 4.4rem;
      display: flex;
      justify-content: space-between;
      margin-top: 2rem;
      a {
        display: block;
        width: 45%;
        height: 4.4rem;
        line-height: 4.4rem;
        text-align: center;
        background: #ccc;
        font-size: 1.4rem;
      }
      .active {
        background: red;
        color: #fff;
      }
    }
    .login-content {
      section {
        margin-top: 1rem;
        position: relative;
        input {
          width: 100%;
          height: 4.4rem;
          border: 1px solid #ccc;
          box-sizing: border-box;
          border-radius: 5px;
          text-indent: 10px;
          &:focus {
            border: 1px solid #f00;
          }
        }
        button {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          background: transparent;
          font-size: 1.4rem;
          color: #666;
        }
        img {
          position: absolute;
          right: 10px;
          top: 50%;
          height: 4rem;
          transform: translateY(-50%);
          background: transparent;
          font-size: 1.4rem;
          color: #666;
        }
      }
      .login-btn {
        display: block;
        width: 100%;
        height: 4.4rem;
        text-align: center;
        line-height: 4.4rem;
        background: red;
        color: #fff;
        font-size: 1.4rem;
        border-radius: 5px;
        margin-top: 10px;
      }
    }
  }
}
</style>
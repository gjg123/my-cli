<template>
<div class="container">
	<p>{{msg}}</p>
	 <div>
        <div class="login-wrap" v-show="showLogin">
            <h3>登录</h3>
            <p v-show="showTishi">{{tishi}}</p>
            <input type="text" placeholder="请输入用户名" v-model="username">
            <input type="password" placeholder="请输入密码" v-model="password">
            <button v-on:click="login">登录</button>
            <span v-on:click="ToRegister">没有账号？马上注册</span>
        </div>

        <div class="register-wrap" v-show="showRegister">
            <h3>注册</h3>
            <p v-show="showTishi">{{tishi}}</p>
            <input type="text" placeholder="请输入用户名" v-model="newUsername">
            <input type="password" placeholder="请输入密码" v-model="newPassword">
            <button v-on:click="register">注册</button>
            <span v-on:click="ToLogin">已有账号？马上登录</span>
        </div>
    </div>
</div>
</template>

<script>
	import {setCookie,getCookie} from '../assets/js/cookie.js'
	export default {
  name: 'Login',
  data () {
    return {
        msg: '我是Login页面',
        showLogin: true,
	    showRegister: false,
	    showTishi: false,
	    tishi: '',
	    username: '',
	    password: '',
	    newUsername: '',
	    newPassword: ''
    }
  },
   mounted(){
  /*页面挂载获取cookie，如果存在username的cookie，则跳转到主页，不需登录*/
    if(getCookie('username')){
        this.$router.push('/Home')
    }
  },
  methods: {
	       login(){
	       		var username=this.username;
				var password=this.password;
		        if(username == "" || password == ""){
		            alert("请输入用户名或密码")
		        }else{
		       //     let data = {'username':this.username,'password':this.password}
		            /*接口请求*/
				//所有下面URL的前缀
				//所有下面URL的前缀
				var urlPrefix = "http://127.0.0.1/project/artist-v2/api/";
				var loginUrl = urlPrefix+"index.php?m=user&a=login";
				var url=loginUrl+"&username="+username+"&password="+password;

	            this.$http({url:url}).then((res)=>{
		               
		                console.log(res.data);
		                console.log(res.data.code);
		                let id=res.data.data;
		                if (id.code==0){
		                	 console.log("登陆成功")
		                	this.$router.push('/Home')
		                }else{
		                	  this.tishi = "该用户不存在";
		                	  this.tishi = "密码输入错误";
			                  this.showTishi = true;
			                  
			                  this.showTishi = true;
		                }
		              
		          })
		      }
		    },
		    ToRegister(){
				    this.showRegister = true
				    this.showLogin = false
				},
				ToLogin(){
				    this.showRegister = false
				    this.showLogin = true
				},
				register(){
			    if(this.newUsername == "" || this.newPassword == ""){
			        alert("请输入用户名或密码")
			    }else{
			        let data = {'username':this.newUsername,'password':this.newPassword}
			        this.$http.post('http://localhost/vueapi/index.php/Home/user/register',data).then((res)=>{
			            console.log(res)
			            if(res.data == "ok"){
			                this.tishi = "注册成功"
			                this.showTishi = true
			                this.username = ''
			                this.password = ''
			                 /*注册成功之后再跳回登录页*/
			                setTimeout(function(){
			                    this.showRegister = false
			                    this.showLogin = true
			                    this.showTishi = false
			                }.bind(this),1000)
			            }
			        })
			    }
			}
		}
}
</script>

<style>
	.login-wrap{text-align:center;}
    input{display:block; width:250px; height:40px; line-height:40px; margin:0 auto; margin-bottom: 10px; outline:none; border:1px solid #888; padding:10px; box-sizing:border-box;}
    p{color:red;}
    button{display:block; width:250px; height:40px; line-height: 40px; margin:0 auto; border:none; background-color:#41b883; color:#fff; font-size:16px; margin-bottom:5px;}
    span{cursor:pointer;}
    span:hover{color:#41b883;}
</style>
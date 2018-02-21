<template>
<div class="container">
	{{msg}}
	    <div class="header">
	      <div class="logo">派队管家</div>
	      <div class="nav">
	        <ul>
	          <li ></li>
	          <li @click="click1">登陆</li>
	
	        </ul>
	      </div>
	    </div>
	    
	    <el-col :span="12">		    
	    <el-menu
	      :default-active="navActive"
	      class="el-menu-vertical-demo"
	      @open="handleOpen"
	      @close="handleClose"
	      background-color="#545c64"
	      text-color="#fff"
	      active-text-color="#ffd04b"
	     
	      :unique-opened="false" router>
	      <el-submenu index="1">
	        <template slot="title">
	          <i class="el-icon-location"></i>
	          <span>系统消息</span>
	        </template>
	        <el-menu-item-group>		          
	          <el-menu-item index="/Movie/X1" >选项1</el-menu-item>
	          <el-menu-item index="/Movie/X2">选项2</el-menu-item>
	        </el-menu-item-group>
	      </el-submenu>
	  	  
	  	  <el-submenu index="2">
	        <template slot="title">
	          <i class="el-icon-location"></i>
	          <span>赛事管理</span>
	        </template>
	        <el-menu-item-group>		          
	          <el-menu-item index="/Movie/S1">选项1</el-menu-item>
	          <el-menu-item index="/Movie/S2">选项2</el-menu-item>
	        </el-menu-item-group>
	      </el-submenu>
	      
	      <el-submenu index="3">
	        <template slot="title">
	          <i class="el-icon-location"></i>
	          <span>内容管理</span>
	        </template>
	        <el-menu-item-group>		          
	          <el-menu-item index="/Movie/N1">选项1</el-menu-item>
	          <el-menu-item index="/Movie/N2">选项2</el-menu-item>
	        </el-menu-item-group>
	      </el-submenu>
	      
	      <el-submenu index="4">
	        <template slot="title">
	          <i class="el-icon-location"></i>
	          <span>工具管理</span>
	        </template>
	        <el-menu-item-group>		          
	          <el-menu-item index="/Movie/G1">选项1</el-menu-item>
	          <el-menu-item index="/Movie/G2">选项2</el-menu-item>
	        </el-menu-item-group>
	      </el-submenu>
	      
	      <el-submenu index="5">
	        <template slot="title">
	          <i class="el-icon-location"></i>
	          <span>钱包管理</span>
	        </template>
	        <el-menu-item-group>		          
	          <el-menu-item index="/Movie/Q1">选项1</el-menu-item>
	          <el-menu-item index="/Movie/Q2">选项2</el-menu-item>
	        </el-menu-item-group>
	      </el-submenu>
	      
	      <el-submenu  index="6">
            <template slot="title"><i class="el-icon-plus"></i>{{msg}}</template>
            <el-menu-item  index="/Movie/M1" >M1</el-menu-item>
			<el-menu-item  index="/Movie/M2" >M2</el-menu-item>
          </el-submenu>
		</el-menu>
	</el-col>
	
	<div class="view">
      <router-view v-on:view-meun="toMatch"></router-view>
    </div>
</div>
</template>

<script>
	import VueRouter from 'vue-router'
  const router = new VueRouter()
	export default {
  name: 'Movie',
  data () {
    return {
    	activeIndex2: '1',
      	msg: 'Movie页面',
      	navActive:''
     
     
    }
  },
  methods: {
	      registereds(key, keyPath) {
	        alert(456);
	      },
	      out(key, keyPath) {
	        alert(123);
	      },
	      handleOpen(key, keyPath) {
	        console.log(key, keyPath);
	      },
	      handleClose(key, keyPath) {
	        console.log(key, keyPath);
	      },
	      handleSelect(key, keyPath) {
	        console.log(key, keyPath);
	      },
	      click1() {
	      	console.log("我是一一一");
	      },
	      toMatch: function (data) {
	      	
	        this.navActive = data;
	      }
	     
	    }
}
	
</script>

<style>
  *{
  	padding: 0;
  	margin: 0;
  }
  .container {
    /*height:100%;*/
   
  }
  
  .header {
    width:100%;
    height:50px;
    position: fixed;
    top:0;
    left:0;
    background-color: #324157;
    margin: 0 ;
    
    display: flex;
    z-index: 100;
    box-shadow: 0 2px 5px #999;
  }
  .logo {
     background: url("../assets/345086638759734836.png") no-repeat 10px 0;
    background-size:contain;
    background-color: #324157;
    width:200px;
    height:100%;
    color: #ffffff;
    font-size:20px;
    line-height:50px;
    cursor: pointer;
    font-weight:bold;
    text-align: center;
  }
  .nav {
    border-left:1px solid #48576A;
    flex:1;

  }
  .nav ul {
    list-style: none;
    display: flex;
    color: #ffffff;
    float: right;
    margin:0;
  }
  .nav ul li:first-child {
    width:30px;
    height:30px;
    background-color: red;
    margin-top: 10px;
    border-radius: 50%;
  }
  .nav ul li:last-child {
    line-height:50px;
    margin-left: 5px;
    cursor: pointer;
    text-align: center;
    padding: 0 20px 0 20px;
  }
  .nav ul li:last-child:hover {
    background-color: red;
  }
 .el-col-12 {
    width: 200px;
    margin-top:50px;
}
.view {
    margin: 30px 0 0 200px;
    background-color: #EAEDF1;
    padding: 20px;
    height:100%;
  }
</style>
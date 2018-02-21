<template>
	<div class="container">
		<p>{{msg}}</p>
		<el-menu
		  :default-active="activeIndex2"
		  class="el-menu-demo"
		  mode="horizontal"
		  @select="handleSelect"
		  background-color="#545c64"
		  text-color="#fff"
		  :unique-opened="false" router
		  active-text-color="#ffd04b">
		  <el-menu-item index="1">处理中心</el-menu-item>
		  <el-submenu index="2">
		    <template slot="title">我的工作台</template>
		    <el-menu-item index="/Movie/N1/N11">选项1</el-menu-item>
		    <el-menu-item index="/Movie/N1/N12">选项2</el-menu-item>
		    <el-menu-item index="2-3">选项3</el-menu-item>
		  </el-submenu>
		  <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
		</el-menu>

		<div class="v">
	      <router-view v-on:view-meun="toMatch"></router-view>
	    </div>
	</div>
	
</template>

<script>
	export default {
		name: 'N1',
		data (){
			return {
				msg :'我是N1页面',
				activeIndex: '1',
        		activeIndex2: '1',
        		navActive:''
			}
		},
		methods: {
		      handleSelect(key, keyPath) {
		      console.log(key, keyPath);
      		},
      		toMatch: function (data) {
	      	
	        this.navActive = data;
	      }
    }
	}
</script>

<style>
	.el-menu-demo{
		height:60px;
		
	}
	.v {
	    margin: 50px 20px;
}
</style>
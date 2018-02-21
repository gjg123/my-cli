<template>
<div class="container">
	<p>{{msg}}</p>
	<div class="header">
		<el-menu
		  :default-active="activeIndex2"
		  class="el-menu-demo"
		  mode="horizontal"
		  @select="handleSelect"
		  background-color="#545c64"
		  text-color="#fff"
		  active-text-color="#ffd04b">
		  <el-menu-item index="1">处理中心</el-menu-item>
		  <el-submenu index="2">
		    <template slot="title">我的工作台</template>
		    <el-menu-item index="2-1" >选项1</el-menu-item>
		    <el-menu-item index="2-2">选项2</el-menu-item>
		    <el-menu-item index="2-3">选项3</el-menu-item>
		  </el-submenu>
		  <el-menu-item index="3"><a href="#" >订单管理</a></el-menu-item>
		</el-menu>
	</div>

	<el-col :span="12">		    
	    <el-menu
	      default-active="2"
	      class="el-menu-vertical-demo"
	      @open="handleOpen"
	      @close="handleClose"
	      background-color="#545c64"
	      text-color="#fff"
	      active-text-color="#ffd04b">
	      <el-submenu index="1">
	        <template slot="title">
	          <i class="el-icon-location"></i>
	          <span>系统消息</span>
	        </template>
	        <el-menu-item-group>		          
	          <el-menu-item index="1-1" @click="click1">选项1</el-menu-item>
	          <el-menu-item index="1-2">选项2</el-menu-item>
	        </el-menu-item-group>
	      </el-submenu>
	  	  
	  	  <el-submenu index="2">
	        <template slot="title">
	          <i class="el-icon-location"></i>
	          <span>赛事管理</span>
	        </template>
	        <el-menu-item-group>		          
	          <el-menu-item index="2-1">选项1</el-menu-item>
	          <el-menu-item index="2-2">选项2</el-menu-item>
	        </el-menu-item-group>
	      </el-submenu>
	      
	      <el-submenu index="3">
	        <template slot="title">
	          <i class="el-icon-location"></i>
	          <span>内容管理</span>
	        </template>
	        <el-menu-item-group>		          
	          <el-menu-item index="3-1">选项1</el-menu-item>
	          <el-menu-item index="3-2">选项2</el-menu-item>
	        </el-menu-item-group>
	      </el-submenu>
	      
	      <el-submenu index="4">
	        <template slot="title">
	          <i class="el-icon-location"></i>
	          <span>工具管理</span>
	        </template>
	        <el-menu-item-group>		          
	          <el-menu-item index="4-1">选项1</el-menu-item>
	          <el-menu-item index="4-2">选项2</el-menu-item>
	        </el-menu-item-group>
	      </el-submenu>
	      
	      <el-submenu index="5">
	        <template slot="title">
	          <i class="el-icon-location"></i>
	          <span>钱包管理</span>
	        </template>
	        <el-menu-item-group>		          
	          <el-menu-item index="5-1">选项1</el-menu-item>
	          <el-menu-item index="5-2">选项2</el-menu-item>
	        </el-menu-item-group>
	      </el-submenu>
		</el-menu>
	</el-col>
	
	
	  
	
	  <el-tabs :tab-position="tabPosition" style="height: 200px;">
	    <el-tab-pane label="用户管理">用户管理</el-tab-pane>
	    <el-tab-pane label="配置管理">配置管理</el-tab-pane>
	    <el-tab-pane label="角色管理">角色管理</el-tab-pane>
	    <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
	  </el-tabs>
	
</div>
</template>

<script>
 export default {
	  	name: 'Music',
		  data () {
		    return {
		      msg: '我Music页面',	      
        	  activeIndex2: '1',
        	  tabPosition: 'left'
		    }
	  	 },
	  	methods: {
	      handleOpen(key, keyPath) {
	        console.log(key, keyPath);
	      },
	      handleClose(key, keyPath) {
	        console.log(key, keyPath);
	      },
	      handleSelect(key, keyPath) {
	        console.log(key, keyPath);
	      },
	      click1(){
	      	console.log("我是一一一")
	      }
	    }
  }
</script>

<style>
.el-col-12 {
    width: 200px;
}

</style>
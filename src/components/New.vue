<template>
	<div class="container">
		
	
	  <div>
		    <m-tabbar>
		      <m-tabbar-item id='tab1'>
		      	<img src="../assets/testll.png" alt="" slot="icon-normal"/>
		        
		        首页
		      </m-tabbar-item>
		      <m-tabbar-item id='tab2'>
		      	<img src="../assets/testl.png" alt="" slot="icon-normal"/>
		        
		        书影音
		      </m-tabbar-item>
		      <m-tabbar-item id='tab3'>
		      	<img src="../assets/banner_02.jpg" alt="" slot="icon-normal"/>
		        
		        广播
		      </m-tabbar-item>
		      <m-tabbar-item id='tab4'>
		        ![](../assets/images/ic_tab_group_normal.png) 
		        小组
		      </m-tabbar-item>
		       <m-tabbar-item id='tab5'>
		       	<img src="../assets/testl.png" alt="" slot="icon-normal"/>
		         
		        我的
		      </m-tabbar-item>
		    </m-tabbar>
  		</div>
	
	
	
	<div class="m-tabbar">
		
		  <a class="m-tabbar-item is-active">
		    <span class="m-tabbar-item-icon">
		       <img src="../../build/logo.png"/>
		    </span> 
		    <span class="m-tabbar-item-text">  
		          首页
		    </span>
		  </a> 
		  <a class="m-tabbar-item">
		    <span class="m-tabbar-item-icon">
		      <img src="../assets/Ace.jpg"/>
		    </span> 
		    <span class="m-tabbar-item-text">  
		          书影音
		    </span>
		  </a> 
		  <a class="m-tabbar-item">
		    <span class="m-tabbar-item-icon">
		      <img src="../assets/banner_01.jpg"/>
		    </span> 
		    <span class="m-tabbar-item-text">  
		          广播
		    </span>
		  </a> 
		  <a class="m-tabbar-item">
		    <span class="m-tabbar-item-icon">
		       <img src="../assets/Ace.jpg" alt="" />
		    </span> 
		    <span class="m-tabbar-item-text">  
		          小组
		    </span>
		  </a> 
		  <a class="m-tabbar-item">
		    <span class="m-tabbar-item-icon">
		       <img src="../assets/background.png" alt="" />
		    </span> 
		    <span class="m-tabbar-item-text">  
		          我的
		    </span>
		  </a> 
		</div>
	</div>
</template>

<script>
	export default {
		name:'New',
		data () {
			return {
				msg:'我是new'
			}
		}
		
	}
</script>

<style lang="less">
	.m-tabbar{
    display: flex;
    flex-direction: row;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    overflow: hidden;
    height: 50px;
    background: #fff;
    border-top: 1px solid #e4e4e4;

    .m-tabbar-item {
      flex: 1;
      text-align: center;
      .m-tabbar-item-icon {
          display: block;
          padding-top: 2px;
          img{
              width: 28px;
              height: 28px;
          }
      }
      .m-tabbar-item-text {
          display: block;
          font-size: 10px;
          color:#949494;
      }
      &.is-active {
          .m-tabbar-item-text {
              color: #42bd56;
          }
      }
  }
}
</style>
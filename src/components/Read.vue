<template>

<div class="box">
		
	<div>{{msg}}</div>
	<el-row :gutter="10">
	  <el-col :span="6"><div class="grid-content bg-purple"><i class="el-icon-edit"></i>ffffffffff </div></el-col>
	  <el-col :span="12"><div class="grid-content bg-purple">nnnnnnnnnnnn</div></el-col>
	 
	</el-row>
	
</div>

</template>

<script>
 export default {
	  	name: 'Read',
		  data () {
		    return {
		      msg: '我是Read页面'		      
		    }
	  	 },
	  	 methods: {
	      handleOpen(key, keyPath) {
	        console.log(key, keyPath);
	      },
	      handleClose(key, keyPath) {
	        console.log(key, keyPath);
	      }
		}
  }
</script>

<style>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
 
  .bg-purple {
    background: red;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
 

</style>
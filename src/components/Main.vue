<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
   		<div class="box" v-for="item in list">
   			<p >
   				{{item.title}}
   			
   			</p>
   			<p><img :src="imagePrefix+item.img_url"/></p>
   			<div class="btn">
   				我是啊啊啊啊啊啊啊啊啊啊啊啊啊啊 
   			</div>
   		</div>
   			
   	
  </div>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
      msg: '我成功了',
      list:[]
    }
  },
created(){
	
	//所有下面URL的前缀
		var urlPrefix = "http://127.0.0.1/project/artist-v2/api/";
		//所有图片URL的前缀
		var imagePrefix = "http://127.0.0.1/project/artist-v2/";
		var mainListUrl = urlPrefix+"index.php?m=main&a=list";
	
	  this.$http.get(mainListUrl).then(function(r){
	  		console.log(r.data.data)
	  		var data=r.data.data;
	  		this.list=data;
	  		console.log(this.list[1].img_url)
	  		this.imagePrefix=imagePrefix;
	  	})
	  	
	  	  	
}

	
}

</script>

<style scoped>
	.btn{
		background: red;
		width:300px;
		height:100px;
	}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.box p{
	text-align: left;
	padding-left:30px ;
	box-sizing: border-box;
	
}
</style>

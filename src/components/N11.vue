<template>
	<div class="container">
		<p>{{msg}}</p>
		<div class="box">
			我就是NNNN111页面
		</div>
		<img src="../assets/eml.png"/>
	</div>
</template>

<script>
	export default {
		name: 'N11',
		data (){
			return {
				msg :'我是N11页面'
			}
		}
	}
</script>

<style>
	.box{
		width:300px;
		height:100px;
		background: red;
	}
</style>
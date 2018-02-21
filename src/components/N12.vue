<template>
	<div class="container">
		<p>{{msg}}</p>
		<div class="box">
			我就是NNNN222页面
		</div>
		<img src="../assets/alipay.png"/>
	</div>
</template>

<script>
	export default {
		name: 'N12',
		data (){
			return {
				msg :'我是N12页面'
			}
		}
	}
</script>

<style>
	.box{
		width:300px;
		height:100px;
		background: purple;
	}
</style>
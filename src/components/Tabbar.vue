<template>
	<div class="container">
		<p>{{msg}}</p>
	    <div class="m-tabbar">
	       <slot></slot>
	    </div>
	</div>
</template>

<script>
	export default {
		name:'Tabbar',
		data () {
			return {
				msg:'我是他不把人'
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
}
</style>
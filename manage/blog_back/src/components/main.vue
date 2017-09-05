<template>
<div class="box">
	<div class="title"><span>个人博客</span><span>欢迎{{name}}进入</span></div>
	<div class="main_box">
		<div class="nav">
			<nav-list></nav-list>
		</div>
		<div class="main">
			<router-view></router-view>
		</div>
	</div>
	
</div>
</template>
<script>
	import navList from './page/page_nav'
export default{
	name:'main',
	data(){
		return{
			name:''
		}
	},
	components:{
			navList:navList
	},
	mounted(){
		this.name=sessionStorage.getItem('userName')
	}
}
</script>
<style scoped>
.title{
	width:100%;
	height: 60px;
	line-height: 60px;
	display: flex;
	justify-content: space-between;
	font-size:20px;
	background: #66682f;
}
.nav{
	float:left;
	width:20%;
}

.main{
	width:79%;
	float: right;
}
.list{
	width: 100%;
}
.pageNum{
	width:100%;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
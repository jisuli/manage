<template>
<div class="tab">
	<table v-for='item in data'>
		<thead>
			<tr>
				<td>一级类名:{{item.onedata.cname}}</td>
				<td>标识:{{item.onedata.ename}}</td>
				<td>文章数量</td>
				<td>
					<el-button :plain="true" type="info" size="small" @click='amendone(item.onedata.ename)'>修改</el-button>
					<el-button type="danger" size="small" @click='deleone(item.onedata)'>删除</el-button>
				</td>
			</tr>
		</thead>
		<tbody>
			<tr v-for='is in item.twodata'>
				<td>二级类名:{{is.cname}}</td>
				<td>标识:{{is.ename}}</td>
				<td>文章数量</td>
				<td>
					<el-button :plain="true" type="info" size="small" @click='amendtwo(is.ename)'>修改</el-button>
					<el-button type="danger" size="small" @click='deletwo(is,item.onedata.ename)'>删除</el-button>
				</td>
			</tr>
		</tbody>
	</table>

</div>
</template>

<script>
  export default {
  	data(){
  		return{
  			data:''
  		}
  	},
  	mounted(){
  		var that = this
  		this.axios.get('http://localhost:3000/api/class_list').then(function(data){
  			that.data=data.data.data
  			console.log(that.data)
  		})
  	},
  	methods:{
  		amendone(oldEname){//修改一级类名	
  			// console.log(oldEname)
  			this.$router.push({name:'amend',params:{oldEname:oldEname}})	
  		},
  		deleone(obj){//删除一级类名
			var that = this;
			that.axios.post('http://localhost:3000/api/delete_one',{
				params:{
					id:obj.id,
					enname_one:obj.ename
				}
			}).then(function(data){
				that.$router.go(0)
			})
  		},
  		amendtwo(oldEname){//修改二级类名
  			this.$router.push({name:'amendtwo',params:{oldEname:oldEname}})	
  		},
  		deletwo(obj,name){//删除二级类名
  			var that = this;
			that.axios.post('http://localhost:3000/api/delete_two',{
				params:{
					oneId:obj.parent_id,
					twoId:obj.id,
					enname_one:name
				}
			}).then(function(data){
				that.$router.go(0)
			})	
  		}

  	}
  }
</script>
<style>
.tab{
	width:100%;	
}
.tab table{
	border-collapse: collapse;
	margin-top:10px;
	width:100%;
}
.tab table tr{
	height: 50px;
}
.tab table thead{
	background: cyan;
}
.tab table tbody tr{
	background: orange
}
.tab table tr td{
	border:1px solid #ccc;
	text-align:center;
}
.tab table tr td:nth-child(1){
	width:250px;
}
.tab table tr td:nth-child(2){
	width:250px;
}
.tab table tr td:nth-child(3){
	width:250px;
}
/*.tab table tr td:nth-child(4){
	width:;
}
*/
</style>
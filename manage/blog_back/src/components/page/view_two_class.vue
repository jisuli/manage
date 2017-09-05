<template>
<div class="view_two_class">
	<el-form :inline="true" :model="formInline" class="demo-form-inline">
	<h3>一级类名</h3>
	  <el-form-item>
	    <el-select v-model="formInline.region" placeholder="选择一级类名">
	      <el-option v-for='item in dataOne' :label="item.cname" :value="item.id" :key="item.id"></el-option>
	    </el-select>
	  </el-form-item>
	</el-form>

	<el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
	  <el-form-item label="二级中文名称">
	    <el-input v-model="formLabelAlign.cname"></el-input>
	  </el-form-item>
	  <el-form-item label="二级标识">
	    <el-input v-model="formLabelAlign.ename"></el-input>
	  </el-form-item>
	</el-form>
	<el-form label-width="100px" class="demo-ruleForm">
	  <el-form-item>
	    <el-button type="primary" @click="submitForm()">提交</el-button>
	  </el-form-item>
	</el-form>
</div>
</template>
<script>
  export default {
    data() {
      return {
        formInline: {
          user: '',
          region: ''
        },
        labelPosition: 'top',
        formLabelAlign: {
          ename: '',
          cname:'',
          region: '',
          type: ''
        },
        dataOne:''
      }
    },
    mounted(){
    	var that = this;
	  	this.axios.get('http://localhost:3000/api/select_one_class').then(function(data){
	  		that.dataOne=data.data.data
	  	})
	},
	methods: {
	      submitForm() {
	       var that = this;
		  	this.axios.post('http://localhost:3000/api/add_two_class',{
		  		params:{
		  			oneId:that.formInline.region,
		  			enname_two:that.formLabelAlign.ename,
		  			cnname_two:that.formLabelAlign.cname
		  		}
		  	}).then(function(data){
		  		that.$message(data.data.msg)
		  	})
	      }
	  }
 }
</script>
<style>
.el-form-item{
	width:40%;
}
.view_two_class{
	margin-top:30px;
	margin-left:20px;
}
.demo-form-inline{
	margin-bottom:80px;
}
h3{
	height: 35px;
	line-height: 35px;
}
</style>
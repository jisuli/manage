<template>
<el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
	  <el-form-item label="一级类名" prop="name">
	    <el-input v-model="ruleForm.cname"></el-input>
	  </el-form-item>
	 <el-form-item label="一级标识" prop="name">
	    <el-input v-model="ruleForm.ename"></el-input>
	  </el-form-item>
	  <el-form-item>
	    <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
	  </el-form-item>
</el-form>
</template>
<script>
  export default {
    data() {
      return {
        ruleForm: {
          ename: '',
          cname: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        oldEname:''
      }
    },
    mounted(){
    	this.oldEname = this.$route.params.oldEname
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
           	var that = this;
  			this.axios.post('http://localhost:3000/api/amend_class_one',{
  				params:{
  					oldenname_one:that.oldEname,
  					enname_one:that.ruleForm.ename,
  					cnname_one:that.ruleForm.cname
  				}
  			}).then(function(data){
  				that.$message(data.data.msg)
  				that.$router.push({name:'view_list'})
  			})
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  }
</script>
<style>
.el-input__inner{
	width:60%;
}
.demo-ruleForm{
	margin-top:20px;
}
</style>
<template>
<div class="add_box">
<el-form ref="form" :model="form" label-width="80px">
	  <el-form-item label="标题">
	    <el-input v-model="form.title"></el-input>
	  </el-form-item>

	  <el-form-item label="一级分类">
	    <el-select v-model="form.region1" placeholder="请选择一级分类">
	      <el-option v-for='item in dataOne' :label="item.cname" :value="item.id" :key="item.id"></el-option>
	    </el-select>
	  </el-form-item>


	  <el-form-item label="二级分类">
	    <el-select v-model="form.region2" placeholder="请选择二级分类">
	       <el-option v-for='item in dataTwo' :label="item.cname" :value="item.id" :key="item.id"></el-option>
	    </el-select>
	  </el-form-item>
		
	  <el-form-item label="作者">
	    <el-input v-model="form.author"></el-input>
	  </el-form-item>
 

	 <el-form-item label="推荐">
	    <el-radio-group v-model="form.resource1">
	      <el-radio label="是"></el-radio>
	      <el-radio label="否"></el-radio>
	    </el-radio-group>
	  </el-form-item>
	 <el-form-item label="状态">
	    <el-radio-group v-model="form.resource2">
	      <el-radio label="显示"></el-radio>
	      <el-radio label="隐藏"></el-radio>
	    </el-radio-group>
	  </el-form-item>
	

	<el-form-item label="时间">
	    <el-input v-model="form.data"></el-input>
	</el-form-item>


  <el-form-item label="导读">
    <el-input type="textarea" v-model="form.introduction"></el-input>
  </el-form-item>

<template class="ue">
	<quill-editor ref='myTextEditor' v-model='form.content' :config="editorOption"></quill-editor>
<!-- 	 @blur='onEditorBlur($event)' @focus='onEditorFocus($event)' @ready='onEditorReady($event)' -->
</template>
  <el-form-item>
    <el-button type="primary" @click="onSubmit(form)">立即创建</el-button>
    <el-button>取消</el-button>
  </el-form-item>


</el-form>
</div>
</template>

<script>
// import ue from './ue.vue'
  export default {
    data() {
      return {
        form: {
          title: '',
          region1: '',
          region2: '',
          author: '',
          resource1: '',
          resource2: '',
          data:'',
          introduction:'',
          content:''
        },
        dataOne:'',
        dataTwo:''
      }
    },
    mounted(){
    	var that = this;
	  	this.axios.get('http://localhost:3000/articel/getClass').then(function(data){
	  		   that.dataOne=data.data.data[0]
	  		   that.dataTwo=data.data.data[1]
	  	})
    },
    methods: {
      onSubmit(form) {
        	this.axios.post('http://localhost:3000/articel/addArticle').then(function(data){
        		console.log(data)
        	})
      }
    }
  }
</script>
<style>
.add_box{
	margin-top:20px;
}

</style>
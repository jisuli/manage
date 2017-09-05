// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(Element)
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios)

router.beforeEach(function(to,from,next){
	if(to.name ==='login'){
		next()
	}else{
		if(sessionStorage.getItem('userId')){
			next()
		}else{
			next(false)
		}
	}
})

import VueQuillEditor  from 'vue-quill-editor'
Vue.use(VueQuillEditor)
//富文本编辑器
// import '../static/UE/ueditor.config.js'
// import '../static/UE/ueditor.all.js'
// import '../static/UE/lang/zh-cn/zh-cn.js'
// import '../static/UE/ueditor.parse.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

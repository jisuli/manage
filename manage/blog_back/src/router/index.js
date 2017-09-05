import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import main from '@/components/main'
import index from '@/components/index'
import view_one_class from '@/components/page/view_one_class'//添加一级、二级名
import view_two_class from '@/components/page/view_two_class'//添加二级名
import view_list from '@/components/page/view_list'//文章列表显示
import amend from '@/components/list/amend'//修改一级名
import amendtwo from '@/components/list/amendtwo'//修改二级名
import add_article from '@/components/article/add_article'//添加文章
import article_list from '@/components/article/article_list'//文章列表
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/main',
      name: 'main',
      component: main,
      children:[
      		{
      			path: '/',
      			name:'index',
			    component: index,
      		},
      		{
      			path: 'view_one_class',
      			name:'view_one_class',
			    component: view_one_class,
      		},
      		{
      			path: 'view_two_class',
      			name:'view_two_class',
			    component: view_two_class,
      		},
      		{
      			path: 'view_list',
      			name:'view_list',
			    component: view_list,
      		},
      		{
      			path: 'amend',
      			name:'amend',
			    component: amend,
      		},
      		{
      			path: 'amendtwo',
      			name:'amendtwo',
			    component: amendtwo,
      		},
      		{
      			path: 'add_article',
      			name:'add_article',
			    component: add_article,
      		},
      		{
      			path:'article_list',
      			name:'article_list',
			    component:article_list,
      		}
      	]
    }
  ]
})

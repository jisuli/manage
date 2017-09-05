<template>
<div>
<el-col :span="8">
    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>文章管理</template>
        <el-menu-item-group>
          <router-link to='/main/add_article'><el-menu-item index="1-1">添加文章</el-menu-item></router-link>
          <router-link to='/main/article_list'><el-menu-item index="1-2">文章列表</el-menu-item></router-link>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="2">
        <template slot="title"><i class="el-icon-message"></i>分类管理</template>
        <el-menu-item-group>
        <router-link to='/main/view_list'><el-menu-item index="1-1">分类列表</el-menu-item></router-link>
        <router-link to='/main/view_one_class'><el-menu-item index="1-1">增加一级分类</el-menu-item></router-link>
        <router-link to='/main/view_two_class'><el-menu-item index="1-2">增加二级分类</el-menu-item></router-link>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
</el-col>
</div>
</template>
<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        // console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        // console.log(key, keyPath);
      }
    }
  }
</script>
<style scoped>
.el-col-8{
	width: 100%;
}
a{
	text-decoration: none;
}
</style>
<template>
  <!--<div >-->
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect"
           background-color="#545c64" style="height: 100%;"
           text-color="#fff" id="header"
           active-text-color="#ffd04b">
    <el-menu-item index="0"><img src="../assets/logo.png" style="max-height: 100%;max-width: 100%"/></el-menu-item>
    <el-menu-item index="1">处理中心</el-menu-item>
    <el-submenu index="2">
      <template slot="title">我的工作台</template>
      <el-menu-item index="2-1">选项1</el-menu-item>
      <el-menu-item index="2-2">选项2</el-menu-item>
      <el-menu-item index="2-3">选项3</el-menu-item>
      <el-submenu index="2-4">
        <template slot="title">选项4</template>
        <el-menu-item index="2-4-1">选项1</el-menu-item>
        <el-menu-item index="2-4-2">选项2</el-menu-item>
        <el-menu-item index="2-4-3">选项3</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-menu-item index="3">订单管理</el-menu-item>
    <el-menu-item index="4" style="float: right" ><router-link to="/login">登录</router-link></el-menu-item>
    <el-menu-item index="5" style="float: right">消息中心</el-menu-item>
  </el-menu>
  <!--</div>-->
</template>

<script>
  let obj = {
    title: 'welcome to vue, this is header!',
    activeIndex: '1',
    activeIndex2: '1'
  }
  export default {
    // el: '#header',
    name: 'Header',
    data() {
      return obj
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>

<style scoped>
  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
    float: right;
  }

  a {
    color: #42b983;
  }

  /*el-menu-item {*/
  /*height: 99%;*/
  /*}*/
</style>

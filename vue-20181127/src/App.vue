<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <Header class="header"/>
    <el-container class="body">
      <el-aside class="aside">
        <Aside/>
      </el-aside>
      <el-main class="main">
        <router-view/>
      </el-main>
    </el-container>
    <Footer class="footer"/>
  </div>
</template>

<script>
  import Header from '@/components/Header'
  import Footer from '@/components/Footer'
  import Aside from '@/components/Aside'

  export default {
    name: 'App',
    components: {Aside, Footer, Header}
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  html {
    height: 100%;
  }

  body {
    margin: 0;
  }

  .body {
    top: 60px;
    height: 90%;
    position: absolute;
    border: 1px solid #eee;
    width: 100%;
  }

  .header {
    position: absolute;
    top: 0;
    width: 100%;
    height: 60px;
  }

  main {
    padding-bottom: 100px;
    background-color: #ffffff;
  }

  /* main的padding-bottom值要等于或大于footer的height值 */
  .footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 5%;
    background-color: #fffffe;
  }

  .aside {
    width: 15%;
    background-color: #FEFDE9;
  }

  .main {
    width: 100%;
    background-color: floralwhite
  }
</style>

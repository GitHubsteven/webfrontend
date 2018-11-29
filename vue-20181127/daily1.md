想想挺伤人的，无论当初学node.js，还是前端时间学express以及后来的vue，在经历过半个月
后，当初半懂不懂，现在又全忘了，虽然有些项目的步骤还记得，可是，最基本的的一些express
和vue流程仍然忘记，虽然也不是什么大事，但是实在令人头疼。

## eslint js开发规范
在项目创建开始，一开始写vue的时候，会出现大量的有eslint提示的错误，这是由于js不符合eslinit语法
规范引起的，你可以disable这个规范，也可以在.eslintc.js中的rules中参考官网增加规则。


## vue 的路由
路由默认路径是 '/',定义如下：
```
{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
```
但是，通过vue来自动生成的项目，我不知道启动js是那个，也许是main.js或者是server.js，
通常是这样的。
```
import Vue from 'vue'    //引入需要的vue类
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
//其实，我非常不解，为什么在eslintc规范（默认）中，我这么写会报错，但是自动生成的
//却不会。
new Vue({
  el: '#app',
  router,   //初始化路由
  components: { App },
  template: '<App/>'
})

```
增加路由，定义好.vue后，在router定义文件中模仿增加路由。
```
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Footer from '@/components/Footer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/footer',
      name: 'Footer',
      component: Footer
    }
  ]
})

```
## 创建header/footer/aside
如上面步骤中创建header/footer/aside，打开启动app，这里是main.js中定义的app.vue，我们可以打开
app.vue，原本代码如下
```
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
```
引入相关的模板
```
<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  name: 'App',
  components: {Footer, Header}
}
</script>
```
作为标签插入
```
<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>
```
最后：
```
<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  name: 'App',
  components: {Footer, Header}
}
</script>
<style>
  //忽略
</style>
```

## 页面跳转
如果在index中建立的话，直接引用
```
 <router-link to="/study">study</router-link>
```


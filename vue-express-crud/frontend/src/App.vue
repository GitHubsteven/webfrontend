<template>
    <div id="app">
        <p>
            <!-- 使用 router-link 组件来导航. -->
            <!-- 通过传入 `to` 属性指定链接. -->
            <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
            <!--<router-link :to="{ name: 'ListTodo', params: { userId: 123 }}">ListTodo</router-link>-->
        </p>
        <!-- 路由出口 -->
        <!-- 路由匹配到的组件将渲染在这里 -->
        <!--<router-view></router-view>-->
    </div>
</template>

<script>
    // import HelloWorld from './components/HelloWorld.vue'
    import CreateTodo from './components/CreateTodo.vue'
    import ListTodo from './components/ListTodo.vue'

    // 0. 如果使用模块化机制编程，導入Vue和VueRouter，要调用 Vue.use(VueRouter)


    export default {
        name: 'app',
        components: {
            // HelloWorld,
            CreateTodo,
            ListTodo
        },
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
</style>

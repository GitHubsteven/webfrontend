<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <!-- 字符串 -->
      <li>
        <router-link to="study">study</router-link>
      </li>
      <!-- 渲染结果  todo 这个会失效-->
      <li><a href="/study">study</a></li>
      <li>
        <router-link to="/study">study</router-link>
      </li>
      <!-- 使用 v-bind 的 JS 表达式 -->
      <li>
        <router-link v-bind:to="'study'">study</router-link>
      </li>
      <!-- 不写 v-bind 也可以，就像绑定别的属性一样 -->
      <li>
        <router-link :to="'study'">study</router-link>
      </li>
      <!-- 同上 -->
      <li>
        <router-link :to="{ path: 'study' }">study</router-link>
      </li>
      <!-- 命名的路由 -->
      <li>
        <router-link :to="{ name: 'user', params: { userId: 123 }}">User</router-link>
      </li>
      <!-- 带查询参数，下面的结果为 /register?plan=private -->
      <li>
        <router-link :to="{ path: 'register', query: { plan: 'private' }}">Register</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import ajaxService from '../service/ajaxService.js'

  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to vue!'
      }
    },
    mounted() {
      ajaxService
        .get('http://127.0.0.1:8765/hi?name=asa')
        .then(response => (this.msg = response.data.time))
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>

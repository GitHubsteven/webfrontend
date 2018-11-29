<template>
  <div id='div_for'>
    <h1>{{msg}}</h1>
    <ol>
      <li v-for='todo in todos' :key="todo">{{todo}}</li>
    </ol>
  </div>
</template>

<script>
  export default {
    // el:'#div_for',
    name: 'Study',
    data() {
      return {
        msg: 'Vue study',
        todos: [
          {text: '学习 JavaScript'},
          {text: '学习 Vue'},
          {text: '整个牛项目'}
        ]
      }
    }
  }
</script>

<style scoped>

</style>

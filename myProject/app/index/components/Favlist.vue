<template>
    <div v-for="n in 10">
        <span>{{n}}</span>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'Hello World!'
      }
    }
  }
</script>

<style>
    html {
        background: deepskyblue;
    }
</style>
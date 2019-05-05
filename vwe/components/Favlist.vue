<template>
    <div>{{msg}}</div>
    <!--<someComponent></someComponent>-->
</template>
a<template>
    <div v-for="n in 10">div</div>
</template>

<script>
  export default {
    data () {
      return {
        msg: 'Hello World!'
      }
    }
  }
</script>

<style>
    html{
        background: red;
    }
</style>
<script>
  //import someComponent from './someComponent'
  export default {
    name: "",
    data () {
      return {
        msg: "Hello Vue.js"
      }
    },
    component: {
      //someComponent
    }
  }
</script>

<style scoped>

</style>
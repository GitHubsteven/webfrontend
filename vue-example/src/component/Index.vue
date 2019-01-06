<template>
    <div id="index">{{msg}}</div>
    <!--<someComponent></someComponent>-->
</template>

<script>
  //import someComponent from './someComponent'
  export default {
    name: "Index",
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
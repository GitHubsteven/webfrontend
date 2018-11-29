<template>
  <div id='footer' class="footer">
    <label>{{footnote}}</label>
  </div>
</template>

<script>
  export default {
    name: 'Footer',
    data() {
      return {
        'footnote': '下标的；写在下方的；脚注的；下标；脚注；'
      }
    },
    created() {
      console.log('start to create footer')
    }
  }
</script>

<style scoped>

</style>

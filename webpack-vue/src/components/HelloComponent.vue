<template>
    <div>
        <h1>{{count}}</h1>
        <h2>hello</h2>
    </div>
</template>
<script>
  export default {
    name: 'HelloComponent',
    props: {
      name: {
        type: String,
        required: true
      }
    },
    data () {

    },
    methods: {
      addCount: () => {

      }
    },
    computed: {
      count () {
        return this.$store.state.count
      }
    }
  }
</script>
<style lang="stylus" scoped>
    h1
        color red
</style>
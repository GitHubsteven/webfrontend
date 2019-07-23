<template>
    <div>
        <h1>{{count}}</h1>
        <h2>hello, {{name}}</h2>
    </div>
</template>
<script>
  export default {
    name: 'HelloComponent',
    props: {
      name: {
        type: String,
        required: false,
        default: "world"
      }
    },
    data() {
      return {}
    },
    methods: {
      addCount: () => {
        // this.$store.commit("")
      }
    },
    computed: {
      count() {
        return this.$store.state.count
      }
    }
  }
</script>
<style lang="stylus" scoped>
    h1
        color red
</style>
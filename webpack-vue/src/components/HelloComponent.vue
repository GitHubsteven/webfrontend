<template>
    <h1>{{count}}</h1>
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
    methods: {},
    mounted: {},
    created: {},
    beforeCreate: {},
    beforeMount: {},
    computed: {
      count: () => {
        // return this.$store.state.count;
        return 0;
      }
    }
  }
</script>
<style lang="stylus" scoped>
    h1
        color red
</style>
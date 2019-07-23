<template>
    <div>
        <h2>{{count}}</h2>
    </div>
</template>

<script>
  export default {
    name: "ReflectComponent",
    computed: {
      count() {
        return this.$store.state.count;
      }
    }
  }
</script>

<style scoped>

</style>
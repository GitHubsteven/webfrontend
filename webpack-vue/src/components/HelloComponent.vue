<template>
    <div>
        <h1>{{count}}</h1>
        <h2>hello, {{name}}</h2>
        <button v-on:click="addCount(2)">add2</button>
        <button v-on:click="login()">login</button>
        <button v-on:click="logOut()">loginOut</button>
    </div>
</template>
<script>
  export default {
    name: 'HelloComponent',
    props: {
      name: {
        type: String,
        required: false,
        default: 'world'
      }
    },
    data () {
      return {}
    },
    methods: {
      addCount: function (inc) {
        //commit with payload
        // this.$store.commit('increment', {inc: inc})
        //object-style commit
        this.$store.commit({
          type: 'increment',
          inc: inc
        })
      },
      login: function () {
        this.$store.commit('ADD_LOGIN_USER', 'asa.x')
      },
      logOut () {
        this.$store.commit('SIGN_OUT')
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
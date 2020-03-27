<template>
    <div class="full-width center-content">
        <label> username:</label>
        <label><span>{{username}}</span></label>
        <ul>
            <li>
                <router-link to="/hello">hello</router-link>
            </li>
            <li>
                <router-link to="/reflect">reflect</router-link>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
  import router from './router/index.js'

  export default {
    name: 'App',
    router,
    computed: {
      username () {
        return this.$store.getters.username
      }
    }
  }
</script>

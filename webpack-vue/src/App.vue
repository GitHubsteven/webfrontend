<template>
    <div class="full-width center-content">
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
  import router from "./router/index.js"

  export default {
    name: "App",
    router
  }
</script>

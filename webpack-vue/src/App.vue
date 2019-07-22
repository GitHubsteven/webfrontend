<template>
    <div class="full-width center-content">
        <hello-component name="vuex"/>
    </div>
</template>

<script>
  import HelloComponent from './components/HelloComponent.vue'

  export default {
    name: "App",
    components: {
      HelloComponent
    },
  }
</script>

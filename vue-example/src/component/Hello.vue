<template>
    <div id="hello">
        <p>{{message}}</p>
    </div>
</template>

<script>
    export default {
        name: "Hello",
        el: "hello",
        data() {
            return {
                message: "hello!"
            }
        }
    }
</script>

<style scoped>

</style>
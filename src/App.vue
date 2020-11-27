<template>
  <div>
    <navigation-bar></navigation-bar>
    <router-view />
  </div>
</template>
<script>
import NavigationBar from './components/NavigationBar.vue'
export default {
  components: { NavigationBar }
}
</script>
<style lang="scss">
body {
  background: black;
}
#app {
  font-family: Roboto, sans-serif;
  font-size: 1.25rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}
</style>

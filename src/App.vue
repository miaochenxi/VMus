<template>
  <div>
    <navigation-bar></navigation-bar>
    <router-view/>
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
::-webkit-scrollbar {
  width: 12px;
  background-color: #181818;
}
::-webkit-scrollbar-thumb {
  background-color: #717171;
}
</style>

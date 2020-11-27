<template>
  <div class="grid grid-cols-3 gap-4" id="nav">
    <div class="inline-flex col-start-1">
      <img class="h-8 inline" alt="Vue logo" src="../assets/logo.png" />
      <span class="text-2xl">VMusic</span>
    </div>
    <div class="col-start-2" id="router">
      <router-link to="/">首页</router-link>
      <router-link to="/about">探索</router-link>
      <router-link to="/about">媒体库</router-link>
    </div>
    <img alt="User Pic" class="w-9 col-end-4 justify-self-end" src="../assets/images/user.svg">
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
#nav {
  padding: 8px;
  a {
    color: #FFFFFF80;

    &.router-link-exact-active {
      color:white;
    }
  }
}
</style>

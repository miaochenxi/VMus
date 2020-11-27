<template>
  <div class="grid grid-cols-3 gap-4 items-center" id="nav">
    <div class="inline-flex col-start-1">
      <img class="h-8 inline" alt="Vue logo" src="../assets/logo.png" />
      <span class="text-2xl">VMusic</span>
    </div>
    <div class="col-start-2" id="router">
      <router-link to="/">首页</router-link>
      <router-link to="/about">探索</router-link>
      <router-link to="/about">媒体库</router-link>
      <a href="#" style="margin: auto;" class="inline-block">
        <img class="h-6 inline px-4" src="../assets/images/search.svg" alt="search pic" />
        <span style="margin:auto">搜索</span>
      </a>
    </div>
    <img alt="User Pic" class="w-9 col-end-4 justify-self-end" src="../assets/images/user.svg" />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
#nav {
  font-size: 1.25rem;
  padding: 8px;
  a {
    color: #ffffff80;
    margin: 0 24px 0;
    &.router-link-exact-active {
      color: white;
    }
  }
}
</style>

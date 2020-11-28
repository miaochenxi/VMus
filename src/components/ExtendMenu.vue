<template>
  <div id="menu" class="absolute right-4" style="top: 3rem;">
    <ul class="text-left">
      <li class="p-4 flex border border-gray-700 border-opacity-30">
        <img class="rounded-full w-12 inline-block self-start" :src="userProfile.url" />
        <div class="inline-block pl-4">
          <p class="text-base h-5">{{userProfile.nickname}}</p>
          <span class="text-sm">{{userProfile.signature}}</span>
        </div>
      </li>
      <li
        class="text-sm p-4 border border-gray-700 border-opacity-30 hover:bg-opacity-10 hover:bg-white cursor-pointer"
      >
      <img class="w-6 inline-block" src="../assets/images/logout.svg"/><span>退出账号</span></li>
    </ul>
  </div>
</template>

<script>
import { inject } from 'vue'
export default {
  name: 'ExtendMenu',
  setup () {
    const userProfile = inject('userProfile')
    return { userProfile }
  }
}
</script>

<style lang="scss" scoped>
#menu {
  width: 300px;
  background-color: #212121;
}
</style>

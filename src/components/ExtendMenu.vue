<template>
  <div id="menu" class="absolute top-11 right-2">
    <ul class="text-left">
      <li class="p-4 flex">
        <img class="rounded-full w-12 inline-block self-start" :src="userProfile.url"/>
        <div class="inline-block">
          <p class="text-base">{{userProfile.nickname}}</p>
          <span class="text-sm">{{userProfile.signature}}</span>
        </div>
      </li>
      <li class="p-4">退出账号</li>
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

<template>
  <div class="grid grid-cols-3 gap-4 items-center relative z-30" id="nav">
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
    <img
      id="userpic"
      @click="userClick"
      alt="User Pic"
      class="w-8 col-end-4 justify-self-end cursor-pointer rounded-full"
      :src="userProfile.url"
    />
    <extend-menu v-if="showMenu.show"></extend-menu>
  </div>
</template>

<script>
import { onBeforeMount, provide, reactive, readonly } from 'vue'
import { useStore } from 'vuex'
import { netease, baseURL } from '../api/neteasemusic'
import axios from 'axios'
import ExtendMenu from './ExtendMenu.vue'
axios.defaults.baseURL = 'http://localhost:3000'
export default {
  components: { ExtendMenu },
  name: 'NavigationBar',
  setup () {
    const showMenu = reactive({ show: false })
    const store = useStore()
    const userProfile = reactive({
      url: '',
      nickname: '',
      signature: ''
    })

    userProfile.url = require('../assets/images/user.svg')

    onBeforeMount(async () => { // 异步方法，等先获取完登录状态才能判断是否需要登录
      await axios.get(netease.loginstatus).then(() => store.commit('updateLogStatus', true)).catch(() => store.commit('updateLogStatus', false))
      if (!store.state.isLogged) {
        axios.get(baseURL + '/login/cellphone?phone=18317559426&password=miao7456mmmm958.')
          .then(result => {
            userProfile.url = result.data.profile.avatarUrl
            userProfile.nickname = result.data.profile.nickname
            userProfile.signature = result.data.profile.signature
          })
          .catch(err => { console.error(err) })
      }
    })

    provide('userProfile', readonly(userProfile))

    function userClick (e) {
      showMenu.show = !showMenu.show
      if (showMenu.show) {
        e.stopPropagation()
        document.addEventListener('click', menuAction)
      }
    }
    function menuAction () {
      showMenu.show = false
      document.removeEventListener('click', menuAction)
    }

    return { userProfile, showMenu, userClick, menuAction }
  }
}
</script>

<style lang="scss" scoped>
#nav {
  font-size: 1.3rem;
  padding: 16px;
  a {
    color: #ffffff80;
    margin: 0 24px 0;
    &.router-link-exact-active {
      color: white;
    }
  }
}
</style>

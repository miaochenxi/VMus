<template>
  <div class="home">
    <wallpaper></wallpaper>
    <vmusic-carousel class="relative" :reqUrl="carouselApi"></vmusic-carousel>
  </div>
</template>

<script>
import { netease } from '../api/neteasemusic'
import VmusicCarousel from '../components/VmusicCarousel.vue'
import Wallpaper from '../components/Wallpaper.vue'
export default {
  name: 'Home',
  components: {
    Wallpaper,
    VmusicCarousel
  },
  setup () {
    const carouselApi = netease.newsong
    document.addEventListener('scroll', log)
    function log () {
      setTimeout(() => {
        if (document.documentElement.scrollHeight < document.documentElement.scrollTop + 350 + document.documentElement.clientHeight) {
          // 加载组件
          // console.log(this.documentElement.scrollHeight + ' ' + this.documentElement.scrollTop + ' ' + document.documentElement.clientHeight)
        }
      }, 500)
    }
    return { carouselApi }
  }
}
</script>

<style lang="scss" scoped>
</style>

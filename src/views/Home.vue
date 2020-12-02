<template>
  <div class="home">
    <wallpaper></wallpaper>
    <vmusic-carousel :reqUrl="carouselApi"></vmusic-carousel>
  </div>
</template>

<script>
import { config } from '../api'
import VmusicCarousel from '../components/VmusicCarousel.vue'
import Wallpaper from '../components/Wallpaper.vue'
export default {
  name: 'Home',
  components: {
    Wallpaper,
    VmusicCarousel
  },
  setup () {
    const carouselApi = config.newsong
    return { carouselApi }
  }
}
</script>

<style lang="scss" scoped>
</style>

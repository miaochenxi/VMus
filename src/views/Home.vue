<template>
  <div class="home">
    <wallpaper></wallpaper>
    <div v-for="i in rows.value" :key="i">
      <vmusic-carousel :type="carousels[i-1].type" class="relative"></vmusic-carousel>
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, reactive } from 'vue'
import { buildCarousels } from '../common/Carousel'
import VmusicCarousel from '../components/VmusicCarousel.vue'
import Wallpaper from '../components/Wallpaper.vue'
export default {
  name: 'Home',
  components: {
    Wallpaper,
    VmusicCarousel
  },
  setup () {
    const rows = reactive({
      value: 1
    })
    const carousels = buildCarousels()
    onMounted(() => {
      console.log('Mounted')
      document.addEventListener('scroll', log)
    })
    onUnmounted(() => {
      console.log('onUnmounted')
      document.removeEventListener('scroll', log)
    })
    function log () {
      setTimeout(() => {
        if (document.documentElement.scrollHeight < document.documentElement.scrollTop + 450 + document.documentElement.clientHeight) {
          // 加载组件
          if (rows.value < 9) {
            rows.value++
          }
          // console.log(this.documentElement.scrollHeight + ' ' + this.documentElement.scrollTop + ' ' + document.documentElement.clientHeight)
        }
      }, 500)
    }
    return { rows, carousels }
  }
}
</script>

<style lang="scss" scoped>
</style>

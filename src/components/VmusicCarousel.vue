<template>
  <div class="w-11/12 m-auto py-10">
    <div class="text-left pb-10">
      <span class="block">欢庆永远不嫌早</span>
      <h1 class="text-4xl font-bold">推荐的音乐视频</h1>
    </div>
    <div
      id="VmusicCarousel"
      ref="carousel"
      v-if="rendAlbum.rend"
      class="carousel space-x-7 overflow-x-auto whitespace-nowrap"
    >
      <album-item v-for="i in 10" :key="i" :item="i"></album-item>
    </div>
    <button
      @click="scrollright"
      id="btn-right"
      class="absolute -right-5 bottom-44 w-10 h-10 shadow-2xl focus:outline-none rounded-full bg-white"
    ></button>
  </div>
</template>

<script>
import { onMounted, provide, reactive, ref } from 'vue'
import AlbumItem from './AlbumItem.vue'
import Axios from 'axios'
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
gsap.registerPlugin(ScrollToPlugin)
export default {
  components: { AlbumItem },
  name: 'VmusicCarousel',
  setup () {
    const Albums = reactive([])
    const rendAlbum = reactive({ rend: false })
    const carousel = ref(null)
    const width = reactive({ value: 0, trig: true })
    onMounted(() => {
      Axios.get('http://localhost:3000/personalized?limit=10')
        .then(res => {
          res.data.result.forEach(element => {
            Albums.push({ id: element.id, name: element.name, picurl: element.picUrl }) // 提取出result中每个集锦的id，name，picurl 添加到对象传入子组件F
          })
          rendAlbum.rend = true
        })
        .catch(err => console.error(err))
    })
    function scrollright () {
      if (width.trig) {
        width.value = carousel.value.offsetWidth
        width.trig = false
      }
      if (carousel.value.scrollWidth <= width.value) {
        return
      }
      if (carousel.value.scrollWidth - width.value < width.value) {
        gsap.to(carousel.value, { duration: 1.5, scrollTo: { x: carousel.value.scrollWidth }, ease: 'power3.inOut' })
        return
      }
      gsap.to(carousel.value, { duration: 1.5, scrollTo: { x: width.value }, ease: 'power3.inOut' })
      width.value += width.value
    }
    provide('Albums', Albums)
    return { rendAlbum, scrollright, carousel }
  }
}
</script>

<style lang="scss" scoped>
span {
  font-size: 1.1rem;
  color: #ffffff80;
}
#btn-right {
  background-image: url('../assets/images/right.svg');
  background-size: 1.5rem;
  background-repeat: no-repeat;
  background-position: center;
}
.carousel::-webkit-scrollbar {
  display: none;
}
</style>

<template>
  <div class="w-11/12 mx-auto py-16 mb-8" v-if="rendAlbum.rend">
    <img
      v-if="type==='SimiArtists'"
      class="rounded-full w-9 h-9"
      :src="SimiArtists.obj.details.avatarUrl"
    />
    <div class="text-left pb-10">
      <span class="block"></span>
      <h1 class="text-4xl font-bold">{{carouselInfo.category}}</h1>
    </div>
    <button
      v-if="scrollbar.scrollleft"
      @click="scrollleft"
      id="btn-left"
      class="absolute -left-5 top-60 w-10 h-10 shadow-2xl focus:outline-none rounded-full bg-white"
    ></button>
    <div
      id="VmusicCarousel"
      ref="carousel"
      class="carousel space-x-7 overflow-x-auto whitespace-nowrap flex items-start"
    >
      <album-item v-for="i in 10" :key="i" :item="i"></album-item>
    </div>
    <button
      v-if="scrollbar.scrollright"
      @click="scrollright"
      id="btn-right"
      class="absolute -right-5 top-60 w-10 h-10 shadow-2xl focus:outline-none rounded-full bg-white"
    ></button>
  </div>
</template>

<script>
import { provide, reactive, ref } from 'vue'
import AlbumItem from './AlbumItem.vue'
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import Axios from 'axios'
import { netease } from '../api/neteasemusic'
import { getRandomTag } from '../common/Category'
import { getSimiArtists, getSubArtistId } from '../common/Carousel'
gsap.registerPlugin(ScrollToPlugin)

export default {
  components: { AlbumItem },
  name: 'VmusicCarousel',
  props: {
    total: {
      type: String,
      default: '10'
    },
    type: {
      required: true
    }
  },
  setup (props) {
    const playlists = []
    const rendAlbum = reactive({ rend: false })
    const SimiArtists = reactive({ obj: null, Artist: false })// 终究还是要用reactive
    const carousel = ref(null)
    const carouselInfo = reactive({
      category: ''
    })
    carouselInfo.category = getRandomTag()
    const scrollbar = reactive({
      value: 0,
      scrollleft: false,
      scrollright: true
    })
    if (props.type === 'RecPlaylist') {
      Axios.get(netease.playlist, {
        params: {
          cat: carouselInfo.category,
          limit: 10
        }
      }).then(res => {
        res.data.playlists.forEach(element => {
          playlists.push({
            name: element.name,
            id: element.id,
            coverImgUrl: element.coverImgUrl,
            copywriter: element.copywriter
          })
          rendAlbum.rend = true
        })
      }).catch(err => console.log(err))
    } else {
      const fun = async () => {
        const id = await getSubArtistId()
        SimiArtists.obj = await getSimiArtists(id)
        console.log(SimiArtists.obj)
        rendAlbum.rend = true
      }
      fun()
    }
    function scrollright () {
      if (!scrollbar.scrollleft) {
        scrollbar.value = 0
        scrollbar.scrollleft = true
      }// 最左边时执行
      if (carousel.value.scrollWidth - scrollbar.value <= 2 * carousel.value.offsetWidth) {
        gsap.to(carousel.value, { duration: 0.7, scrollTo: { x: carousel.value.scrollWidth - carousel.value.offsetWidth }, ease: 'power2.inOut' })
        scrollbar.scrollright = false
        return
      }
      scrollbar.value += carousel.value.offsetWidth
      gsap.to(carousel.value, { duration: 0.7, scrollTo: { x: scrollbar.value }, ease: 'power2.inOut' })
    }

    function scrollleft () {
      if (!scrollbar.scrollright) {
        scrollbar.scrollright = true
      }// 最右边时执行
      if (scrollbar.value <= carousel.value.offsetWidth) {
        gsap.to(carousel.value, { duration: 0.7, scrollTo: { x: 0 }, ease: 'power2.inOut' })
        scrollbar.scrollleft = false
        return
      }
      scrollbar.value -= carousel.value.offsetWidth
      gsap.to(carousel.value, { duration: 0.7, scrollTo: { x: scrollbar.value }, ease: 'power2.inOut' })
    }
    provide('SimiArtists', SimiArtists)
    provide('playlists', playlists)
    return { rendAlbum, scrollright, scrollleft, scrollbar, carousel, carouselInfo, SimiArtists }
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
#btn-left {
  background-image: url('../assets/images/left.svg');
  background-size: 1.5rem;
  background-repeat: no-repeat;
  background-position: center;
}
.carousel::-webkit-scrollbar {
  display: none;
}
</style>

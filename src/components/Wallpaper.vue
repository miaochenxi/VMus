<template>
  <div>
    <vmusic-carousel type="RecPlaylist" class="z-20 relative"></vmusic-carousel>
    <div class="cover absolute top-0 h-5/6 w-full z-10"></div>
    <div
      id="Wallpaper"
      class="absolute top-0 h-5/6 w-full"
      :style="{backgroundImage:'url('+picurl.url+')'}"
    ></div>
  </div>
</template>

<script>
import Axios from 'axios'
import { wallpaperURL } from '../api/others'
import { reactive } from 'vue'
import VmusicCarousel from './VmusicCarousel.vue'
export default {
  components: { VmusicCarousel },
  name: 'Wallpaper',
  setup () {
    const picurl = reactive({
      url: ''
    })
    Axios.defaults.withCredentials = false
    Axios.get(wallpaperURL,
      {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' }
      })
      .then(res => {
        picurl.url = res.data.data
      })
      .catch(err => console.log(err))

    return { picurl }
  }
}
</script>

<style lang="scss" scoped>
#Wallpaper {
  z-index: 0;
  color: white;
}
.cover {
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.3),
    rgb(0, 0, 0)
  );
}
</style>

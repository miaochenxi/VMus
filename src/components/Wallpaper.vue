<template>
  <div>
    <vmusic-carousel class="z-20 relative" :reqUrl="requestAPI"></vmusic-carousel>
    <div class="cover absolute top-0 h-4/6 w-full z-10"></div>
    <div
      id="Wallpaper"
      class="absolute top-0 h-4/6 w-full z-0"
      :style="{backgroundImage:'url('+picurl.url+')'}"
    ></div>
  </div>
</template>

<script>
import Axios from 'axios'
import { config, wallpaperURL } from '../api'
import { onBeforeMount, reactive } from 'vue'
import VmusicCarousel from './VmusicCarousel.vue'
export default {
  components: { VmusicCarousel },
  name: 'Wallpaper',
  setup () {
    const picurl = reactive({
      url: ''
    })
    const requestAPI = config.personalized
    onBeforeMount(() => {
      Axios.defaults.withCredentials = true
      Axios.get(wallpaperURL)
        .then(res => {
          picurl.url = res.data.data
        })
        .catch(err => console.error(err))
    })

    return { picurl, requestAPI }
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

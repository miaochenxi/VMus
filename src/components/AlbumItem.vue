<template>
  <div class="inline-block">
    <img class="w-52 rounded-md" :class="classObj" :src="Album.coverImgUrl" />
    <div class="text-block mt-4">
      <a href="#">{{Album.name}}</a>
      <span>{{Album.copywriter}}</span>
    </div>
  </div>
</template>
<script>
import { inject, onBeforeMount, reactive } from 'vue'
export default {
  props: {
    item: {
      type: Number,
      required: true
    },
    type: {
      required: false
    }
  },
  setup (props) {
    const playlists = inject('playlists')
    const Album = {
      id: 0,
      name: '',
      coverImgUrl: '',
      copywriter: ''
    }
    const classObj = reactive({
      'rounded-md': true
    })
    const SimiArtists = inject('SimiArtists')
    if (!SimiArtists.Artist) {
      onBeforeMount(() => {
        Album.name = playlists[props.item - 1].name
        Album.id = playlists[props.item - 1].id
        Album.coverImgUrl = playlists[props.item - 1].coverImgUrl
        Album.copywriter = playlists[props.item - 1].copywriter
      })
    } else {
      onBeforeMount(() => { // 此处写10个Album的分配歌手和歌单逻辑。新思路：在vmcarousel中构建好数组，然后shuffle，在这里从其中依次取一个个元素用于显示
        Album.coverImgUrl = SimiArtists.obj.artists[props.item - 1].picUrl
      })
    }
    return { Album, classObj }
  }
}
</script>

<style lang="scss" scoped>
.text-block {
  font-size: 1rem;
  width: 13rem;
  overflow: hidden;
  white-space: normal;
  text-align: left;
  a {
    text-overflow: ellipsis;
    line-height: 1.3rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  span {
    color: #ffffff80;
    margin-top: 0.3rem;
    text-overflow: ellipsis;
    line-height: 1.3rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
}
</style>

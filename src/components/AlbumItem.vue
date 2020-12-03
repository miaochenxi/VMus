<template>
  <div class="inline-block">
    <img class="w-52 rounded-md" :src="Album.coverImgUrl" />
    <div class="mt-4">
      <a href="#">{{Album.name}}</a>
      <span>{{Album.description}}</span>
    </div>
  </div>
</template>
<script>
import { inject, onMounted, reactive } from 'vue'
export default {
  props: {
    item: {
      type: Number,
      required: true
    }
  },
  setup (props) {
    const playlists = inject('playlists')
    const Album = reactive({
      id: 0,
      name: '',
      coverImgUrl: '',
      copywriter: ''
    })
    onMounted(() => {
      Album.name = playlists[props.item - 1].name
      Album.id = playlists[props.item - 1].id
      Album.coverImgUrl = playlists[props.item - 1].coverImgUrl
    })
    return { Album }
  }
}
</script>

<style lang="scss" scoped>
span {
  color: #ffffff80;
}
a {
  width: 13rem;
  height: 3rem;
  display: block;
  overflow: hidden;
  white-space: normal;
  line-height: 1.5rem;
  text-align: left;
  font-size: 1rem;
}
</style>

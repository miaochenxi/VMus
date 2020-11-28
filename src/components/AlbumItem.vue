<template>
  <div>
    <img :src="Album.picurl" />
    <div>
      <a>{{Album.name}}</a>
      <span>{{Album.description}}</span>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
export default {
  setup () {
    const Album = reactive({
      name: '',
      picurl: '',
      description: ''
    })
    return Album
  }
}
</script>

<style lang="scss" scoped>
span {
  color: #ffffff80;
}
</style>

<template>
  <div class="inline-block">
    <img class="w-52 rounded-md" :src="Album.picurl" />
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
    const Albums = inject('Albums')
    const Album = reactive({
      id: 0,
      name: '',
      picurl: '',
      description: ''
    })
    onMounted(() => {
      Album.name = Albums[props.item - 1].name
      Album.id = Albums[props.item - 1].id
      Album.picurl = Albums[props.item - 1].picurl
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
  font-size: 1.1rem;
}
</style>

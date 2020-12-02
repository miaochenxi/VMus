import { useStore } from 'vuex'
const cats = [
  '华语',
  '欧美',
  '韩语',
  '日语',
  '粤语',
  '另类/独立',
  'R&B/Soul',
  '民族',
  '怀旧',
  '小语种',
  '学习',
  '运动',
  'ACG',
  'Bossa Nova',
  '影视原声',
  '流行',
  '性感',
  '摇滚',
  '英伦',
  '后摇',
  '古风',
  '民谣',
  '90后',
  '蓝调',
  '乡村',
  '治愈',
  '浪漫',
  '快乐',
  '经典',
  '世界音乐',
  '轻音乐',
  '电子',
  '器乐',
  '说唱'
]

function getRandomTag () {
  const store = useStore()
  let random = cats[Math.floor(Math.random() * cats.length)]
  while (store.state.playerListTags.includes(random)) {
    random = cats[Math.floor(Math.random() * cats.length)]
  }
  store.commit('addTag', random)
  return random
}
export { getRandomTag }

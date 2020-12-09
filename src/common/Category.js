import Axios from 'axios'
import { useStore } from 'vuex'
import { netease } from '../api/neteasemusic'
const cats = [
  '华语',
  '欧美',
  // '韩语',
  '日语',
  // '粤语',
  // '另类/独立',
  // 'R&B/Soul',
  // '民族',
  // '怀旧',
  '小语种',
  // '学习',
  // '运动',
  'ACG',
  // 'Bossa Nova',
  '影视原声',
  '流行',
  // '性感',
  // '摇滚',
  // '英伦',
  // '后摇',
  '古风',
  '民谣',
  // '90后',
  // '蓝调',
  // '乡村',
  // '治愈',
  // '浪漫',
  // '快乐',
  // '经典',
  // '世界音乐',
  '轻音乐',
  '电子',
  // '器乐',
  '说唱'
]
// 目前歌单数量小于10的全部被注释
// 返回的数据条目并不一定 > 10，乐库可能某些冷门类型歌单就是不太多
function getRandomTag () {
  const store = useStore()
  let random = cats[Math.floor(Math.random() * cats.length)]
  if (store.state.playerListTags.length === 12) return null
  while (store.state.playerListTags.includes(random)) {
    random = cats[Math.floor(Math.random() * cats.length)]
  }
  store.commit('addTag', random)
  return random
}

function listNumOfEachTagPlaylist () { // 测试输出每个tag歌单数量
  for (let i = 0; i < cats.length; i++) {
    Axios.get(netease.playerlist, { params: { cat: cats[i] } }).then(res => console.log(cats[i] + ' ' + res.data.playlists.length))
  }
}
export { getRandomTag, listNumOfEachTagPlaylist }

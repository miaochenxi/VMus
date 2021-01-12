import { useStore } from 'vuex'
import { getRandoms, getRandom } from './utilities/Random'
import { shuffle } from 'lodash'
import Axios from 'axios'
import { netease } from '../api/neteasemusic'

async function getSimiArtists (id) {
  const Simi = {
    from: id,
    artists: [],
    details: null
  }
  await Axios.get(netease.simiartist, {
    params: {
      id: Simi.from
    }
  }).then(res => {
    const randoms = getRandoms(res.data.artists.length, 5)
    for (let i = 0; i < 5; i++) {
      Simi.artists.push({ id: res.data.artists[randoms[i]].id, picUrl: res.data.artists[randoms[i]].picUrl })
    }
  }).catch(err => console.log(err))

  Simi.details = await getArtistDetails(Simi.from)

  return Simi // picUrl相似歌手的头像, id相似歌手的id；from来自的歌手, avatarUrl来源歌手的头像, nickname来源歌手的昵称
}// 随机从关注的歌手中，获取相似歌手，再随机生成相似歌手列表

// 随机获取一个相似歌手Id
async function getArtistDetails (artistId) {
  const details = { nickname: '', avatarUrl: '' }
  await Axios.get(netease.artistdetails, {
    params: {
      id: artistId
    }
  }).then(res => {
    details.nickname = res.data.data.user.nickname
    details.avatarUrl = res.data.data.user.avatarUrl
  }).catch(err => console.log(err))
  return details
}

// 随机获取关注歌手的Id
async function getSubArtistId () {
  let id = 'null'
  Axios.defaults.withCredentials = true
  await Axios.get(netease.sub_artist).then(res => {
    id = res.data.data[getRandom(res.data.data.length)].id
  }).catch(err => console.log(err))
  return id
}

// 构建随机轮播列表
function buildCarousels () {
  const store = useStore()
  store.commit('clearCarousels')
  for (let i = 0; i < 7; i++) {
    store.commit('pushCarousel', { type: 'RecPlaylist' })
  }
  store.commit('pushCarousel', { type: 'SimiArtists' })
  store.commit('pushCarousel', { type: 'SimiArtists' })
  return shuffle(store.state.carousels)
}

export { getSimiArtists, buildCarousels, getSubArtistId }

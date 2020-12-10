import { getRandoms, getRandom } from './utilities/Random'
const { default: Axios } = require('axios')
const { netease } = require('../api/neteasemusic')

async function getSimiArtists () {
  let artistId
  const SimiArtists = []
  await Axios.get(netease.sub_artist)
    .then(res => {
      artistId = res.data.data[getRandom(res.data.data.length)].id
    }).catch(err => console.log(err))
  await Axios.get(netease.simiartist, {
    params: {
      id: artistId
    }
  })
    .then(res => {
      const randoms = getRandoms(res.data.artists.length, 5)
      for (let i = 0; i < 5; i++) {
        SimiArtists.push({ id: res.data.artists[randoms[i]].id, picUrl: res.data.artists[randoms[i]].picUrl })
      }
    }).catch(err => console.log(err))
  return SimiArtists
}// 随机从关注的歌手中，获取相似歌手，再随机生成相似歌手列表
export { getSimiArtists }

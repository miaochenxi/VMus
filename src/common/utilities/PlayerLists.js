import Axios from 'axios'
import { netease } from '../../api/neteasemusic'
import { getRandomTag } from '../Category'
function getPlayLists () {
  const playlists = []
  Axios.defaults.withCredentials = true
  Axios.get(netease.playerlist, {
    params: {
      cat: getRandomTag(),
      limit: 10
    }
  }).then(res => {
    console.log(res)
    res.data.playlists.forEach(element => {
      playlists.push({
        name: element.name,
        id: element.id,
        coverImgUrl: element.coverImgUrl,
        copywriter: element.copywriter
      })
    })
  }).catch(err => console.error(err))
  return playlists
}

export { getPlayLists }

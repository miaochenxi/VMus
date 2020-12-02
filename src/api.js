const baseURL = 'http://localhost:3000'
const wallpaperURL = 'https://api.xygeng.cn/Bing/url' // 必应每日壁纸
const config = {
  personalized: baseURL + '/personalized/?limit=10', // 获取歌单推荐10个
  newsong: baseURL + '/personalized/newsong' // 获取10个新歌推荐
}
export { wallpaperURL, config }

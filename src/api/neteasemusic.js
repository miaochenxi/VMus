const baseURL = 'http://localhost:3000'
const netease = {
  loginstatus: baseURL + '/login/status', // 登录状态
  personalized: baseURL + '/personalized/?limit=10', // 获取歌单推荐10个
  newsong: baseURL + '/personalized/newsong' // 获取10个新歌推荐
}
export { netease, baseURL }

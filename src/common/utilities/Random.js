function getRandoms (ceil, num) { // ceil范围内(不包括)， num个整随机数
  const randoms = []
  while (true) {
    const random = Math.floor(Math.random() * ceil)
    if (randoms.includes(random)) continue
    else randoms.push(random)
    if (randoms.length === num) break
  }
  return randoms
}// 返回一个数组，包含着随机数

function getRandom (ceil) { // 获取ceil范围内一个随机数
  return Math.floor(Math.random() * ceil)
}
export { getRandoms, getRandom }

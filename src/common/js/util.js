/* 将当前毫秒数或 Date 实例转化为 YYYY-MM-DD 格式 */
export function toDateString (time) {
  if (!(time instanceof Date)) {
    time = Number(time)
    if (isNaN(time)) {
      return ''
    }
    time = new Date(time * 1000)
  }
  return `${time.getFullYear()}-${padNum(time.getMonth() + 1)}-${padNum(time.getDate())}`
}

/* 为位数不足的数值添加前导零 */
export function padNum (num, bit = 2) {
  let str = String(num)
  while (str.length < bit) {
    str = '0' + str
  }
  return str
}

/* 判断一个数是否在给定区间内，若在则直接返回，否则返回 min 或者 max */
export function judgeNumInRegion (num, min, max) {
  return Math.min(max, Math.max(min, num))
}
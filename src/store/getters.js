// sound 播放状态
export const playState = state => state.playState

// 原始播放列表
export const originList = state => state.originList

// 当前播放列表
export const playList = state => state.playList

// 当前 sound 的索引
export const currIndex = state => state.currIndex

// 当前 sound
export const currSound = state => {
  return state.playList[state.currIndex] || {}
}

// 当前 sound 播放进度
export const currTime = state => state.currTime
import {playMode} from 'common/js/config'

const state = {
  // sound 播放状态
  playState: false,
  // 原始播放列表
  originList: [],
  // 当前播放列表
  playList: [],
  // 当前播放 sound 在列表中的索引
  currIndex: -1,
  // 当前 sound 进度
  currTime: 0,
  // 播放模式（默认为循环全部）
  playMode: playMode.loop
}

export default state
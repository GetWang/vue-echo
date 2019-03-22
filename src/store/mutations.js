import * as types from './mutation-types'

const mutations = {
  /* mutate sound 播放状态 */
  [types.SET_PLAY_STATE] (state, flag) {
    state.playState = flag
  },
  /* mutate 原始播放列表 */
  [types.SET_ORIGIN_LIST] (state, list) {
    state.originList = list
  },
  /* mutate 当前播放列表 */
  [types.SET_PLAY_LIST] (state, list) {
    state.playList = list
  },
  /* mutate 当前 sound 的索引 */
  [types.SET_CURR_INDEX] (state, index) {
    state.currIndex = index
  },
  /* mutate 当前 sound 的播放进度 */
  [types.SET_CURR_TIME] (state, time) {
    state.currTime = time
  },
  /* mutate 播放模式 */
  [types.SET_PLAY_MODE] (state, mode) {
    state.playMode = mode
  }
}

export default mutations
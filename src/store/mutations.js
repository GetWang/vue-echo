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
  }
}

export default mutations
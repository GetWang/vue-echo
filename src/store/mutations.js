import * as types from './mutation-types'

const mutations = {
  /* mutate sound 播放状态 */
  [types.SET_PLAY_STATE] (state, flag) {
    state.playState = flag
  }
}

export default mutations
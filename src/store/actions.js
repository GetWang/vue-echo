import * as types from './mutation-types'
import {playMode} from 'common/js/config'
import {shuffle} from 'common/js/util'

/* 向列表中插入 sound，位于当前 sound 后面 */
export function insertSound ({state, commit}, sound) {
  if (state.currIndex < 0) {
    commit(types.SET_ORIGIN_LIST, [sound])
    commit(types.SET_PLAY_LIST, [sound])
    commit(types.SET_CURR_INDEX, 0)
    commit(types.SET_CURR_TIME, 0)
    commit(types.SET_PLAY_STATE, true)
    return
  }
  const playList = state.playList.slice()
  const soundId = sound.id
  let index = state.currIndex
  const currSoundId = playList[index].id
  // 若插入的 sound 和列表中当前 sound 的 id 相同，
  // 则只是简单的设置播放状态为“播放”
  if (soundId === currSoundId) {
    commit(types.SET_PLAY_STATE, true)
  } else {
    // 遍历当前播放列表，查看插入的 sound 是否在列表中
    for (let i = 0, len = playList.length; i < len; i++) {
      if (soundId === playList[i].id) {
        index = i
        break
      }
    }
    // 若插入的 sound 位于当前列表中，则设置 currIndex
    // 为 index 值，否则将 sound 插入“原始”和“当前”两个列表当前 sound 后面
    if (index !== state.currIndex) {
      commit(types.SET_CURR_INDEX, index)
      commit(types.SET_CURR_TIME, 0)
      commit(types.SET_PLAY_STATE, true)
    } else {
      const originList = state.originList.slice()
      // 遍历原始播放列表，将 sound 插入列表当前 sound 后面
      for (let i = 0, len = originList.length; i < len; i++) {
        if (originList[i].id === currSoundId) {
          originList.splice(i + 1, 0, sound)
          break
        }
      }
      index++
      // 将 sound 插入当前播放列表当前 sound 后面
      playList.splice(index, 0, sound)
      commit(types.SET_ORIGIN_LIST, originList)
      commit(types.SET_PLAY_LIST, playList)
      commit(types.SET_CURR_INDEX, index)
      commit(types.SET_CURR_TIME, 0)
      commit(types.SET_PLAY_STATE, true)
    }
  }
}

/* 一键播放列表中的所有 sound */
export function playAllSounds ({state, commit}, list) {
  commit(types.SET_ORIGIN_LIST, list)
  commit(types.SET_PLAY_LIST, list)
  commit(types.SET_CURR_INDEX, 0)
  commit(types.SET_CURR_TIME, 0)
  commit(types.SET_PLAY_STATE, true)
}

/* 切换播放模式 */
export function changePlayMode ({state, commit}, mode) {
  const prevMode = state.playMode
  let list = state.originList.slice()
  let index = -1
  commit(types.SET_PLAY_MODE, mode)
  if (mode !== playMode.random && prevMode === playMode.random) {
    // “随机播放”模式改成“循环”或“单曲循环”模式
    index = findIndexInArr(list, state.playList[state.currIndex].id)
  } else if (mode === playMode.random && prevMode !== playMode.random) {
    // “循环”或“单曲循环”模式改成“随机播放”模式
    list = shuffle(list)
    index = findIndexInArr(list, state.playList[state.currIndex].id)
  } else {
    // 其余情况
    return
  }
  commit(types.SET_PLAY_LIST, list)
  commit(types.SET_CURR_INDEX, index)
}

/* 在数组中查找对象属性值等于 id 的元素的索引 */
function findIndexInArr (arr, id) {
  for (let i = 0, len = arr.length; i < len; i++) {
    if (arr[i].id === id) {
      return i
    }
  }
}
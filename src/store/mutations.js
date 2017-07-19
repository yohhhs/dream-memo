import * as types from './mutation-types'

const mutations = {
  [types.SET_NOTE_LIST](state, noteList) {
    state.noteList = noteList
  }
}

export default mutations


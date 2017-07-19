import * as types from './mutation-types'

export const pushNoteList = function({commit, state}, item) {
  let list = state.noteList.slice()
  // let localList = localStorage.getItem('noteList')
  list.unshift(item)
  commit(types.SET_NOTE_LIST, list)
}

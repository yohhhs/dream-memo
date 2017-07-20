import Vue from 'vue'
import Router from 'vue-router'

const NoteEdit = (resolve) => {
  import('components/note-edit/note-edit').then((module) => {
    resolve(module)
  })
}
import noteDetail from 'components/noteDetail/noteDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/NoteEdit',
      component: NoteEdit
    },
    {
      path: '/noteDetail/:index',
      component: noteDetail
    }
  ]
})

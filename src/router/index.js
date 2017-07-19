import Vue from 'vue'
import Router from 'vue-router'

const NoteEdit = (resolve) => {
  import('components/note-edit/note-edit').then((module) => {
    resolve(module)
  })
}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/NoteEdit',
      component: NoteEdit
    }
  ]
})

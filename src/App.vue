<template>
  <div id="app">
    <t-header></t-header>
    <note-list></note-list>
    <router-view></router-view>
  </div>
</template>

<script>
  import THeader from 'components/theader/theader'
  import NoteList from 'components/note-list/note-list'

  export default {
    components: {
      THeader,
      NoteList
    }
  }
</script>

<style>

</style>

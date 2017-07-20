<template>
  <transition name="detail">
    <div class="note-detail">
      <t-header :hasBack="hasBack" :isDetail="isDetail" titleTxt="查看详情"></t-header>
      <h1 class="title">{{item.title}}</h1>
      <div class="content">{{item.content}}</div>
      <p class="time">{{item.time}}</p>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import THeader from 'components/theader/theader'
  import {mapGetters} from 'vuex'

  export default {
    computed: {
      ...mapGetters([
        'noteList'
      ])
    },
    created() {
      this.hasBack = true
      this.isDetail = true
      this.index = this.$route.params.index
      this.item = this.noteList[this.index]
    },
    components: {
      THeader
    }
  }
</script>

<style scoped lang="stylus" type="text/stylus" rel="stylesheet/stylus">
  .note-detail
    position: fixed
    top: 0
    left: 0
    bottom: 0
    width: 100%
    z-index: 99
    background: #fff
    &.detail-enter-active, &.detail-leave-active
      transition: all .2s linear
    &.detail-enter, &.detail-leave-to
      left: 100%
    .title, .content
      margin: 0 15px
      border-bottom: 1px solid rgba(7, 17, 27, .1)
    .title
      font-size: 18px
      padding: 15px 0
    .content
      padding: 24px 0
    .time
      padding:15px
      font-size: 12px
</style>

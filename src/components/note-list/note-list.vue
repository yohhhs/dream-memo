<template>
  <div class="note-list">
    <ul>
      <li @click="select(item)" class="list border-1px" v-for="item in list">
        <p class="title">{{item.title}}</p>
        <div class="bottom">
          {{item.time}}
        </div>
      </li>
    </ul>
    <div class="no-list" v-show="!list.length">
      <i class="iconfont icon-meiyoushuju"></i>
      没有任何数据
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapGetters} from 'vuex'

  export default {
    computed: {
      list() {
        console.log(this.noteList)
        return this.noteList
      },
      ...mapGetters([
        'noteList'
      ])
    },
    methods: {
      select(item) {

      }
    }
  }
</script>

<style scoped lang="stylus" type="text/stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin.styl"
  .note-list
    position: fixed
    top: 45px
    bottom: 0
    left: 0
    right: 0
    padding: 0 15px
    .list
      padding-top: 15px
      border-1px(#F8F3F3)
      .bottom
        padding: 12px 0
        font-size: 14px
        color: rgb(147, 153, 159)
      .title
        overflow: hidden
        text-overflow: ellipsis
        white-space: nowrap
    .no-list
      padding: 40px 0
      text-align: center
      color: rgb(147, 153, 159)
      .iconfont
        margin-bottom: 20px
        display: block
        font-size: 70px
        color: rgba(7, 17, 27, .2)
</style>

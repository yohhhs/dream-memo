<template>
  <div class="header border-1px">
    <span class="header-item header-left">
      <i class="iconfont icon-menu" v-if="!hasBack"></i>
      <span v-else="hasBack" @click="close">
        <i class="iconfont icon-back"></i>
        {{titleTxt}}
      </span>
    </span>
    <span class="header-item header-text" v-show="!hasBack">{{titleTxt}}</span>
    <span class="header-item header-right">
      <i class="iconfont icon-add" v-if="!hasBack" @click="add"></i>
      <span v-else="hasBack" @click="handler">{{editHandle}}</span>
    </span>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      hasBack: {
        type: Boolean,
        default: false
      },
      titleTxt: {
        type: String,
        default: 'dream memo'
      },
      editHandle: {
        type: String,
        default: '完成'
      },
      note: {
        type: Object,
        default: null
      }
    },
    methods: {
      add() {
        this.$router.push({
          path: '/NoteEdit'
        })
      },
      close() {
        this.$router.push({
          path: '/'
        })
      },
      handler() {
        this.$emit('addNote')
      }
    }
  }
</script>

<style scoped lang="stylus" type="text/stylus" rel="stylesheet/stylus">
  @import "~common/stylus/mixin.styl"
  .header
    display: flex
    padding: 0 15px
    height: 45px
    line-height: 45px
    border-1px(rgba(7, 17, 27, .2))
    .header-item
      flex: 1
      .iconfont
        extend-click()
    .header-right
      text-align: right
    .header-text
      text-align: center
</style>

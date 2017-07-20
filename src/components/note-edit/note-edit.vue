<template>
  <transition name="edit">
    <div class="note-edit">
      <t-header @addNote="addNote" :hasBack="hasBack" titleTxt="新增便签"></t-header>
      <div class="container">
        <input class="title" v-model="title" type="text" placeholder="请输入标题">
        <textarea class="content" v-model="content" placeholder="请输入内容"></textarea>
      </div>
      <confirm :tip="tip" ref="confirm"></confirm>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import THeader from 'components/theader/theader'
  import Confirm from 'components/confirm/confirm'
  import {mapActions} from 'vuex'

  export default {
    data() {
      return {
        title: '',
        content: '',
        tip: '内容不能为空'
      }
    },
    created() {
      this.hasBack = true
    },
    components: {
      THeader,
      Confirm
    },
    methods: {
      addNote() {
        let title = this._trim(this.title)
        let content = this._trim(this.content)
        if (title && content) {
          this.tip = '添加成功'
          this.pushNoteList(this._returnItem())
          this.$router.push({
            path: '/'
          })
        } else {
          this.$refs.confirm.show()
        }
      },
      _returnItem() {
        return {
          title: this.title,
          content: this.content,
          time: this._getDate()
        }
      },
      _getDate() {
        let d = new Date()
        let currentYear = d.getFullYear()
        let currentMonth = d.getMonth()
        let currentDay = d.getDate()
        return `${(currentYear + '').substr(2)}-${this._completion(currentMonth + 1)}-${this._completion(currentDay)}`
      },
      _completion(time) {
        return ('00' + time).substr((time + '').length)
      },
      _trim(str) {
        return str.trim()
      },
      ...mapActions(['pushNoteList'])
    }
  }
</script>

<style scoped lang="stylus" type="text/stylus" rel="stylesheet/stylus">
  .note-edit
    position: fixed
    top: 0
    left: 0
    bottom: 0
    width: 100%
    z-index: 99
    background: #fff
    &.edit-enter-active, &.edit-leave-active
      transition: all .2s linear
    &.edit-enter, &.edit-leave-to
      left: 100%
    .container
      margin: 0 15px
      .title
        width: 100%
        padding: 20px 0 10px 0
        font-size: 16px
        &:focus + .content
          border-top-color: #53ECFF
      .content
        position: relative
        margin-top: -1px
        padding-top: 10px
        width: 100%
        height: 500px
        outline: none
        resize: none
        border: none
        border-top: 1px solid rgba(7, 17, 27, .1)
        line-height: 1.2
        font-size: 16px
        font-family: inherit
        &:focus
          border-top-color: #33C5FF
</style>

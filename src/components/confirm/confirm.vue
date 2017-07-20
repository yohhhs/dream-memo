<template>
  <transition name="confirm">
    <div v-show="isShow" class="confirm">
      {{tip}}
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      tip: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        isShow: false
      }
    },
    methods: {
      show() {
        this.isShow = true
        setTimeout(this.hide, 1200)
      },
      hide() {
        this.isShow = false
      }
    }
  }
</script>

<style scoped lang="stylus" type="text/stylus" rel="stylesheet/stylus">
  .confirm
    position: fixed
    top: 0
    left: 0
    right: 0
    bottom: 0
    margin: auto
    padding: 10px 15px
    width: 120px
    height: 40px
    border-radius: 5px
    line-height: 40px
    text-align: center
    color: #fff
    background: rgba(7, 17, 27, .5)
    &.confirm-enter-active, &.confirm-leave-active
      transition: all .2s linear
    &.confirm-enter, &.confirm-leave-to
      opacity: 0
      transform: translate3d(0, 40px, 0)
</style>

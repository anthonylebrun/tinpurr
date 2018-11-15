<template>
  <div class="touchSwipe" :class="{leaveLeft: swipedLeft, leaveRight: swipedRight}"
    v-touch:swipe.left="handleLeftSwipe"
    v-touch:swipe.right="handleRightSwipe"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: ['left', 'right'],
  data() {
    return {
      swipedLeft: false,
      swipedRight: false
    }
  },
  methods: {
    handleLeftSwipe() {
      this.swipedLeft = true

      setTimeout(() => {
        this.swipedLeft = false
      }, 1000)

      this.$emit('left')
    },

    handleRightSwipe() {
      this.swipedRight = true

      setTimeout(() => {
        this.swipedRight = false
      }, 1000)

      this.$emit('right')
    }
  }
}
</script>

<style scoped lang="sass">
  @import "~animate.css"

  .touchSwipe
    @extend .animated
    @extend .fadeIn
    max-height: 100%
    max-width: 100%
    overflow: hidden

    &.leaveLeft
      @extend .animated
      @extend .fadeOutLeft

    &.leaveRight
      @extend .animated
      @extend .fadeOutRight
</style>

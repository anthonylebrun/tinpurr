<template>
  <div class="blink" :class="{visible: visible}">
    <slot />
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: true
    }
  },

  created() {
    this.$options.interval = setInterval(() => {
      this.visible = !this.visible
    }, 1000)
  },

  beforeDestroy() {
    clearInterval(this.$options.interval)
  }
}
</script>

<style scoped lang="sass">
  .blink
    opacity: 0

    &.visible
      opacity: 1
</style>

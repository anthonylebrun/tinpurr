<template>
  <div class="nyanLoader">
    <div class="textInfo">
      <span>LIKEZ {{current}}</span>
    </div>
    <div class="bar">
      <div class="loader" :style="{width: progress}">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["current", "total"],

  computed: {
    progress() {
      if (this.current == 0) {
        return '0%'
      } else if (this.current < this.total) {
        return `${(this.current / this.total * 100)}%`
      } else {
        return '100%'
      }
    }
  }
}
</script>

<style scoped lang="sass">
  .nyanLoader
    width: 100%

    .textInfo
      text-align: center
      color: white

      span
        margin: 0 20px

    .bar
      border: 3px solid white
      border-radius: 5px
      width: 100%
      height: 20px

      .loader
        position: relative
        transition: width 1s ease
        height: 100%
        background-image: url('../assets/img/rainbow.png')
        background-repeat: repeat-x

        &:after
          position: absolute
          top: -15px
          right: -20px
          content: ""
          width: 81px
          height: 51px
          background-color: transparent
          background-image: url('../assets/img/nyan.png')
          background-size: cover
</style>

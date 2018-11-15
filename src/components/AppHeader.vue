<template>
  <div class="header">
    <RetroBlink>
      <h3>{{title}}</h3>
    </RetroBlink>
  </div>
</template>

<script>
import RetroBlink from '@/components/RetroBlink'

export default {
  components: {
    RetroBlink
  },

  props: ['title']
}
</script>

<style scoped lang="sass">
  .header
    text-transform: uppercase
    text-align: center
    color: white
    padding: 10px
    background: $primary
</style>

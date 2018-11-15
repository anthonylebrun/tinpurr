<template>
  <div class="catPic">
    <img :src="url" />
  </div>
</template>

<script>
export default {
  props: ["url"]
}
</script>

<style scoped lang="sass">
  .catPic
    max-height: 100%
    max-width: 100%
    overflow: hidden

    img
      max-height: 90%
      max-width: 100%
</style>

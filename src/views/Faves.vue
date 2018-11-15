<template>
  <div class="faves">
    <AppHeader title="Ma Sexy Kittehs" />
    <span class="loading" v-if="loading">Loading...</span>
    <img v-else v-for="cat in favoriteCats" :key="cat.id" :src="cat.image.url" />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'
import CatAPI from '@/services/catAPI'

export default {
  components: {
    AppHeader
  },

  data() {
    return {
      favoriteCats: []
    }
  },

  computed: {
    loading() {
      return this.favoriteCats.length === 0
    }
  },

  methods: {
    loadFavorites() {
      const { sessionId } = this.$route.params
      return CatAPI.getFavorites(sessionId)
    }
  },

  mounted() {
    this.loadFavorites().then(({ data }) => {
      this.favoriteCats = data
    })
  }
}
</script>

<style scoped lang="sass">
  .faves
    flex: 1
    display: flex
    flex-direction: column
    text-align: center

    .loading
      padding: 20px

    img
      max-width: 100%
</style>

<template>
  <div class="pick">
    <AppHeader title="Iz dis kitteh hawt" />
    <div class="main">
      <div class="no" @click="rejectCat">
        <p><span class="pun">FUR</span>GET</p>
      </div>
      <div class="kitteh">
        <template v-if="loading">
          Loading...
        </template>
        <template v-else>
          <TouchSwipe
            @left="rejectCat"
            @right="acceptCat"
          >
            <CatPic :url="activeCat.url" />
          </TouchSwipe>
        </template>
      </div>
      <div class="yes" @click="acceptCat">
        <p><span class="pun">PURR</span>FECT</p>
      </div>
    </div>
    <div class="footer">
      <NyanLoader :current="faved" :total="$options.maxFaves" />
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'
import CatPic from '@/components/CatPic'
import TouchSwipe from '@/components/TouchSwipe'
import NyanLoader from '@/components/NyanLoader'
import { randomString } from '@/utils'
import CatAPI from '@/services/catAPI'

export default {
  maxFaves: 10,

  components: {
    AppHeader,
    CatPic,
    TouchSwipe,
    NyanLoader
  },

  data() {
    return {
      sessionId: randomString(6),
      catQueue: [],
      activeCat: null,
      faved: 0
    }
  },

  computed: {
    loading() {
      return !this.activeCat
    }
  },

  methods: {
    loadCats() {
      return CatAPI.getRandomCats(10).then(({ data }) => {
        this.catQueue.push(...data)

        // Preloads images in browser cache
        data.forEach((cat) => {
          new Image().src = cat.url
        })
      })
    },

    featureCat(delay = 0) {
      // Delay allows animations to complete before changing the activeCat image
      setTimeout(() => {
        this.activeCat = this.catQueue.pop()
      }, delay)

      // Preload more cats if the user is reaching end of the available queue
      if (this.catQueue < 3) {
        this.loadCats().then(() => {
          if (this.loading) this.featureCat()
        })
      }
    },

    notifyLoading() {
      alert("OH HAI. PLZ BE PATIENT. WE ARE LOADING TEH KITTEHS. MAYBE TEH CAT API ID DOWN? :'( WE BLAME TEH DOGZ!")
    },

    rejectCat() {
      if (this.loading) {
        this.notifyLoading()
      } else {
        this.featureCat(1000)
      }
    },

    acceptCat() {
      if (this.loading) {
        this.notifyLoading()
      } else {
        CatAPI.markAsFavorite(this.sessionId, this.activeCat.id)
        this.featureCat(1000)
        this.faved++
      }
    }
  },

  watch: {
    // Transition to next page once the user has favorited enough cats
    faved(value) {
      if (value >= this.$options.maxFaves) {
        this.$router.push({ name: 'faves', params: { sessionId: this.sessionId }})
      }
    }
  },

  mounted() {
    this.loadCats().then(() => {
      this.featureCat()
    })
  }
}
</script>

<style scoped lang="sass">
  .pick
    flex: 1
    display: flex
    flex-direction: column

    .main
      flex: 1
      display: flex
      flex-direction: row

      .no
        background-image: linear-gradient(to right, rgba(255,255,255,1), rgba(255,255,255,0))

      .yes
        background-image: linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255,1))

      .no, .yes
        display: flex
        align-items: center
        padding: 20px
        overflow: hidden
        cursor: pointer

        p
          width: 1em
          font-size: 1.3rem
          word-break: break-all
          line-height: 1.4em
          color: $secondary

          .pun
            color: $primary

      .kitteh
        flex: 1
        display: flex
        align-items: center
        justify-content: center
        padding: 20px

  .footer
    display: flex
    align-items: center
    justify-content: center
    padding: 0px 60px
    background: $secondary
    height: 100px
</style>

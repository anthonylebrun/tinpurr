<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="sass">
@import "~normalize.css"
@import url('https://fonts.googleapis.com/css?family=Press+Start+2P')

html, body
  font-family: "Press Start 2P", Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  height: 100%
  width: 100%
  display: flex

#app
  background-image: url('./assets/img/background.png')
  background-repeat: repeat
  flex: 1
  height: 100%
  width: 100%
  display: flex
</style>

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/sass/theme.sass";`
      }
    }
  },
  configureWebpack: {
    devServer: {
      disableHostCheck: true
    }
  }
}

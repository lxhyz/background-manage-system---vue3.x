// webpack.config.js
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')



module.exports = {
  configureWebpack:config => {
    config.plugins.push(AutoImport({
      resolvers: [ElementPlusResolver()],
    }),),
    config.plugins.push(Components({
      resolvers: [ElementPlusResolver()],
    }),)
  },
  // devServer:{
  //   https:false,
  //   hotOnly:false,
  //   proxy:{
  //     '/api':{
  //       target:'https://lianghj.top:8888/api/private/v1/',
  //       changeOrigin:true,
  //       pathRewrite:{
  //         '^/api':''
  //       }
  //     }
  //   }
  // },
  lintOnSave: false,
  css: {
    loaderOptions: {
      scss: {
        // 8版本用prependData:
        additionalData: `
          @import "@/styles/variables.scss";  // scss文件地址
          @import "@/styles/mixin.scss";     // scss文件地址
        `
      },
    }
  }
}

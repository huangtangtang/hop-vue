const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}
const login = "http://192.168.9.20:8502";
const integrate = "http://192.168.9.32:11019"; //集成框架
const dataDirectory = "http://www.dccatalogsvc.geovis.ai/data-center/catalog";
const loginUrl = 'http://192.168.9.34:8800';
serviceUrl = 'http://192.168.52.112:28070'; //孙华庚后端服务地址

module.exports = {
  runtimeCompiler: true,
  outputDir: "sjzt", //打包名称
  assetsDir: 'static',
  parallel: false,
  publicPath: './',
  devServer: {
    port: 4200,
    disableHostCheck: true,
    hot: true,
    open: true,
    proxy: {
      "/auto": {
        target: serviceUrl,
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^/auto": " ",
        },
      },
      "/api": {
        //本地服务接口地址
        target: "http://192.168.9.32:11019",
        //远程演示服务地址,可用于直接启动项目
        //target: 'https://saber.bladex.vip/api',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/api": "http://192.168.9.32:11019",
        },
      },
    },
  },
  chainWebpack: (config) => {
    // set svg-sprite-loader
    config.module
    .rule("svg")
    .exclude.add(resolve('src/icons'))
    .end()
    config.module
    .rule("icons")
    .test(/\.svg$/)
    .include.add(resolve('src/icons'))
    .end()
    .use("svg-sprite-loader")
    .loader("svg-sprite-loader")
    .options({
      symbolId: "icon-[name]"
    })
    .end()

    config.resolve.alias
      .set('@', resolve('src'))
      .set('@api', resolve('src/api'))
      .set('@assets', resolve('src/assets'))
      .set('@views', resolve('src/views'))

  },
  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      // sass: {
      //   // @/ 是 src/ 的别名
      //   // 所以这里假设你有 `src/variables.sass` 这个文件
      //   // 注意：在 sass-loader v8 中，这个选项名是 "prependData"
      //   additionalData: `@import "~@/stylesheet/index.scss"`
      // },
      // 默认情况下 `sass` 选项会同时对 `sass` 和 `scss` 语法同时生效
      // 因为 `scss` 语法在内部也是由 sass-loader 处理的
      // 但是在配置 `prependData` 选项的时候
      // `scss` 语法会要求语句结尾必须有分号，`sass` 则要求必须没有分号
      // 在这种情况下，我们可以使用 `scss` 选项，对 `scss` 语法进行单独配置
      scss: {
        prependData: `@import "~@/styles/index.scss";`
      },
      // 给 less-loader 传递 Less.js 相关选项
      // less:{
      //   // http://lesscss.org/usage/#less-options-strict-units `Global Variables`
      //   // `primary` is global variables fields name
      //   globalVars: {
      //     primary: '#fff'
      //   }
      // }
    }
  },
  lintOnSave: false //关闭语法检查
};
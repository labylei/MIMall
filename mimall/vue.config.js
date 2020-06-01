const webpack=require('webpack')
module.exports={
    devServer:{
        host:'localhost',
        port:8080,
        proxy:{
          '/api':{
              target:'http://mall-pre.springboot.cn',
              changeOrigin:true,
              pathRewrite:{
                  '/api':''
              }
          }
        }
    },
    configureWebpack: {
        plugins: [
          new webpack.ProvidePlugin({
              $:'jquery',
              jQuery:'jquery',
              'window.jQuery':'jquery'
          })
        ]
    }
}
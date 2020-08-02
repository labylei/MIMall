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
    },
    //publicPath:'/app',
    //outputDir:'dist',
    //indexPath:'index2.html',
    //lintOnSave:false,
    productionSourceMap:false,
    chainWebpack:(config)=>{
        config.plugins.delete('prefetch');
    }
}
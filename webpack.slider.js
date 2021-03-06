var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  //指定入口文件
  entry:'./slider/index.js',
  //输出设置
  output:{
    //输出的目录名
    path:path.resolve('build'),
    //输出的文件名
    filename:'bundle.js'
  },
  devServer:{
    port:8080,
    contentBase:'./build'
  },
  module:{
    loaders:[
      {
        test:/\.js$/,//文件的匹配模式
        loader:'babel-loader',//加载器
        query:{//查询配置对象
          presets:["react","es2015"]
        },
        //如果要加载的模块在node_modules文件夹下面，那么则不需要扫描加载
        exclude:/node_modules/ //排除的模块
      },
      {
        test:/\.css$/,
        loader:'style-loader!css-loader'
      },
      {
        test:/\.(woff|woff2|eot|svg|ttf)$/,
        loader:'url-loader'
      },
      {
        test:/\.(jpg|png|bmp|gif)$/,
        loader:'url-loader'
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:'./slider/index.html'
    })
  ]
}

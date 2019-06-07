const webpack = require('webpack');
const path=require('path');
module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
          },
          {
            test:/\.(scss|css)$/,
            use:['style-loader','css-loader','sass-loader']
          },
          {
            test:/\.(png|jpg|gif)$/i,
            use:[
              {
                loader:'url-loader',
                options:{limit:8192}
              }
            ]
          },
          {
            test:/\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
            use:[{
              loader:'file-loader',
              options:{name:'[name].[ex]',outputPath:'fonts/'}}]
          }
        ]
      },
      resolve: {
        extensions: ['*', '.js', '.jsx']
      },
    output: {
      path: path.join(__dirname + '/dist'),
      publicPath: '/ontology/',
      //publicPath:"/",
      filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
      ],
    devServer: {
      contentBase: './dist',
      historyApiFallback: true,
      hot:true
    }
  };
const path = require('path');

module.exports = {
  mode : 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
  },
  module:{
      rules:[
          {
              test:/\.(js|jsx)$/,
              exclude:/node_modules/,
              use:{
                  loader:'babel-loader',
                  options : {
                      presets :[
                        '@babel/preset-react'
                      ]
                  }
              }   
          },
          {
              test : /\.scss$/,
              use : [
                {
                  loader : "style-loader"
                },
                {
                  loader : "css-loader"
                },
                {
                  loader : "sass-loader"
                }
              ]
          },
          {
            test : /\.(png|svg|jpg|gif)$/,
            use : [
              'file-loader'
            ]
          }
      ]
  }
};
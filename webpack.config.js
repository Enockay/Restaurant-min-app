const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
   entry :{
      index: './src/index.js',
      main : './src/main.js'
   } ,
   devServer : {
    static :'./dist',
},
   plugins: [
      new HtmlWebpackPlugin({
         title: 'Restaurant',
      }),
     
   ],
   devtool : 'inline-source-map',
   output: {
       filename : '[name].bundle.js',
       path : path.resolve(__dirname, 'dist'),
       clean: true,
       publicPath: '/Restaurant-min-app/',
   },

   module: {
    rules: [
        {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        },
        {
            test: /\.(jpg|jpeg|png|gif)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: 'images/',
                },
              },
            ],
          },
          {
            test: /\.webp$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: 'images/',
                },
              },
              {
                loader: 'webpack-image-resize-loader',
                options: {
                  width: 300,
                  height: 300
                }
              }
            ]
          }
           
    ]
}
}

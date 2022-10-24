const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ESlintPlugin = require('eslint-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

function getStyleLoaders(val) {
    return  [
        // MiniCssExtractPlugin.loader,
       'style-loader',
       'css-loader',
      //  css兼容性配置，需要再package.json文件配置浏览器兼容成度
       {
          loader: 'postcss-loader',
          options: {
              postcssOptions: {
                  plugins: [
                      'postcss-preset-env',
                  ]
              }
          }
       },
       val,
   ].filter(Boolean) // 清除空数组
}

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'static/js/[contenthash:10].js',
        chunkFilename: 'static/js/[contenthash:10].chunk.js',
        assetModuleFilename: 'static/media/[contenthash:10][ext][query]',
    },
    module: {
        rules: [
            // css处理: 兼容性，压缩
           {
             test: /\.css$/,
             use: getStyleLoaders()
           },
           {
             test: /\.less$/,
             use: getStyleLoaders('less-loader')
           },
           {
             test: /\.styl$/,
             use: getStyleLoaders('stylus-loader')
           },
            // 图片，字体图标处理
            {
                test: /\.jpe?j|gif|webp|png|svg$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024
                    }
                }

            },
            {
                test: /\.ttf|woff[2]?$/,
                type: 'asset/source'
            },
            // js处理：eslint,babel,压缩
            // babel需要配合babel.config.js文件进行配置
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/, // 不处理某些文件
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                        cacheCompression: false,
                        // plugins: [require.resolve('react-refresh/babel')], // 激活js的HMR
                        // plugins: [ 'react-refresh/babel'], // 激活js的HMR
                    }
                }
            }

        ]
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new ESlintPlugin({
            context: path.resolve(__dirname, '../src'),
            exclude: 'node_modules',
            cache: true,
            cacheLocation: path.resolve(__dirname, '../node_modules/.cache/eslintcache')
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html')
        }),
        // new ReactRefreshWebpackPlugin() // 激活js的HMR
    ],
    mode: 'development',
    devtool: 'cheap-module-source-map',
    // 代码分割打包
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
        runtimeChunk: {
            name: (entrypoint) => `runtime~~${entrypoint.name}.js`
        }
    },
    resolve: {
        extensions: ['.jsx','.js','.json'],
        alias: {
            '@': '/src/'
        }
    },
    // 开发环境配置
    devServer: {
        host: 'localhost',
        port: 3000,
        historyApiFallback: true,
        // open: true,
        hot: true,
    },
    target: "web", // 枚举
}
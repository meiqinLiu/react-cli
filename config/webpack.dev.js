const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.export = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'static/js/[contenthash].js',
        chunkFilename: 'static/js/[contenthash].chunk.js',
        assetModuleFinename: 'static/media/[contenthash].chunk.js',
    },
    module: {
        rules: [
           {
             // css处理: 兼容性，压缩
             test: /\.less$/,
             use: [
                  MiniCssExtractPlugin.loader,
                 'css-loader',
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
                 'less-loader',
             ]
           }

        
            // 图片，字体图标处理
            // js处理：eslint,babel,压缩

        ]
    },
    plugins: [
        new MiniCssExtractPlugin()
    ],
    mode: 'development',
}
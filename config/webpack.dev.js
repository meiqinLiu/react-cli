const path = require('path')

module.export = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'static/js/[contenthash].js',
        chunkFilename: 'static/js/[contenthash].chunk.js',
        assetModuleFinename: 'static/media/[contenthash].chunk.js',
    },
    modules: [
        // css处理: 兼容性，压缩
        // 图片，字体图标处理
        // js处理：eslint,babel,压缩
    ],
    plugins: [

    ],
    mode: 'development',
}
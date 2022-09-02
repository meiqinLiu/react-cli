module.export = {
    extends: [
        'react-app'
    ],
    parserOptions: {
        bebelOptions: {
            presets: [
                // 解决页面报错问题
                ["babel-preset-react-app",false],
                "babel-preset-react-app/prod"
            ]
        }
    }
}
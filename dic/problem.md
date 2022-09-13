## 入口文件设置无效

module.exports  写成 module.export
配置全部无效


## Cannot find module 'eslint/use-at-your-own-risk' 

node版本12改为16

## HMR 热更新无效

```
"webpack-cli": "^4.10.0",
"webpack-dev-server": "^4.10.0"
```
版本要一致

  "browserslist": [
    "last 2 versions",
    "> 1%",
    "not dead"
  ]

还是不行

react-refresh 使用报错 

`__react_refresh_utils__.getModuleExports is not a function`

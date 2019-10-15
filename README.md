# vue-tpl

## Vue-cli default operation
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



## HINT

1、这里有个坑，需要添加如下内容

- 根目录创建一个vue.config.js文件夹，加上如下代码即可

```
module.exports = {
  runtimeCompiler: true
}
```
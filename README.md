# vue-t  vue-cli webpack demo

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```




+ 模拟数据交互
在config/index.js  中配置proxtTable（依赖于第三方插件http-proxy-middleware）中配置
｛
  '/api':{
    target:'127.0.0.1:9001/mock',
    chengeOrigin:true,
    pathRewrite:{
      '^/mock':'mock'
    }
  }
｝
+ 使用mock.   (并不依赖于第三方插件)
项目中创建mock文件夹，
build/dev-server.js中添加
app.use('/mock',express.status('./mock'))


npm run dev
访问127.0.0.1:9001/mock/db.json

+ 使用Sass
  依赖    sass-loader   node-sass
  <style lang='scss'>

+ 使用UI插件
  使用 element-ui

  引入：
  import 'element-ui/lib/theme-default/index.css'
  import {Button, Alert} from 'element-ui'
  挂载：
  Vue.use(Button)
  Vue.use(Alert)

+ ajax
  依赖：axios

  引入：
  import axios from 'axios'

  挂载：
  Vue.prototype.$axios = axios

  使用：

  methods: {
    submitForm () {
      axios.get('/mock/db.json', {

      }).then(function (res) {
        console.log(res)
      })
    }
  },
  mounted: function () {
    this.submitForm()
  }

+ 路由
  依赖：VueRouter

  引入：
  import VueRouter from 'vue-router'

  挂载：
  Vue.use(VueRouter)

  定义：（routers变量名避免冲突）
  const routers=new VueRouter({
    router
  })

  注册路由 router/index.js

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

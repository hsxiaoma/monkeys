## changelog
----

### v2.1.1
- 修复无法安装ES6规则集bug

### v2.1.0
- 增加babel处理, 支持ES6

### v2.0.2
- 支持.m3u8 .ts多媒体格式

### v1.2.3
- 解决svg图片在打包时增加注释代码的无法使用问题

### v1.2.2
- 增加对svg图片格式的支持


### v1.1.9
- 修复reactjs组件类作为独立模块无法被amd模块引入、使用的问题

### v1.1.8
- 增加对reactjs的支持
- reactjs中的jsx模块可使用require做模块管理

### v1.1.7
- 增加项目构建时的js压缩的开发

### v1.1.5
- 增加js模块中cdn资源domain替换

### v1.1.4
- 增加js模块中版本替换操作

### v1.1.3
- bugfix

### v1.1.2
- 修改脚手架内容

### v1.1.1
- 解决脚手架中.gitignore在npm发布时丢失，从而无法初始化的问题
- 删除项目初始化时操作git库的系列操作
- 去掉打包操作时对当前git分支的检测

### v1.1.0
- 修改打包时的log提示

### v1.0.9
- 修复seed打包时路径错误问题

### v1.0.8
- 增加卸载、更新组件操作
- 增加对用户开放的配置, monkeys config
- 增加base64转码api, monkeys base64 imagepath

### v1.0.7
- 修改打包时的js模块路径错误问题

### v1.0.6
- 增加包管理机制，方便第三方开发者使用h5组件——类似于npm
- 增加monkeys install widget功能
- 默认安装到project/src/js/widget目录

### v1.0.5

- 中间件增加对js文件输出时做px转换rem操作
- 打包时做同样处理

### v1.0.4

- 增加对开放平台sdk的打包支持
- 形如(seed.js)
	- require('xxx')
	- require('yyy')
- 打包后的js文件不包含amd声明语句

### v1.0.3

- 去除构建对r.js的依赖，自定义模块依赖树分析
- 增加css、js文件的压缩

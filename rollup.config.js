import babel from 'rollup-plugin-babel'
import serve from 'rollup-plugin-serve'

export default {
  input: './src/index.js', //打包入口文件
  output: {
    file: 'dist/umd/vue.js', // 出口文件
    name: 'Vue', // 指定打包后全局变量的名字
    format: 'umd', // 统一模块规范
    sourcemap: true // es6 -> es5 开启源码调试 可以找到源代码报错位置
  },
  plugins: [ // 使用插件
    babel({
      exclude: "node_modules/**" // 排除编译文件
    }),
    process.env.ENV === 'development' ? serve({
      open: true, // 启动服务打开页面
      openPage: '/public/index.html', // 默认打开html的路径
      port: 8888, // 端口号
      contentBase: '' // 已当前默认文件路径启动服务
    }) : null
  ]
}
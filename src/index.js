// Vue 核心代码 只是Vue的一个声明
import { initMixin } from './init'

function Vue (options) {
  this._init(options)
}
initMixin(Vue)
export default Vue
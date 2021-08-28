import { initState } from "./state"

export function initMixin (Vue) {
  // 初始化流程
  Vue.prototype._init = function (options) {
    const vm = this // this.$options 指代的就是用户传递的属性
    vm.$options = options
    // 初始化状态
    initState(vm)
  }
}
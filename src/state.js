import { observe } from "./observer/index"
export function initState (vm) {
  // 数据劫持
  const { props, methods, data, computed, watch } = vm.$options
  if (props) {
    initProps(vm)
  }
  if (methods) {
    initMethods(vm)
  }
  if (data) {
    initData(vm)
  }
  if (computed) {
    initComputed(vm)
  }
  if (watch) {
    initWatch(vm)
  }
}

function initProps () { }
function initMethods () { }
function initData (vm) {
  let data = vm.$options.data
  data = vm._data = typeof data === 'function' ? data.call(vm) : data
  observe(data)
}
function initComputed () { }
function initWatch () { }
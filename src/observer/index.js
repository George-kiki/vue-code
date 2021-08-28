import { isObject, def } from "../utils/index";
import { arrayMethods } from '../array/index'
class Observe {
  constructor(value) {
    def(value, '__ob__', this)
    if (Array.isArray(value)) {
      // 如果是数组的话并不会对索引进行观测 
      // 修改数组方法 push shift unshift
      value.__proto__ = arrayMethods

      this.observeArray(value)

    } else {
      this.walk(value)
    }
  }
  observeArray (value) {
    for (let i = 0; i < value.length; i++) {
      observe(value[i])
    }
  }
  walk (data) {
    const keys = Object.keys(data)
    keys.forEach(key => {
      definReactive(data, key, data[key])
    })
  }
}
function definReactive (data, key, value) {
  observe(value)
  Object.defineProperty(data, key, {
    get () {
      return value
    },
    set (newValue) {
      if (newValue === value) return
      value = newValue
      observe(value)
    }
  })
}

export function observe (data) {
  const isObj = isObject(data)
  if (!isObj) {
    return
  }
  return new Observe(data)
}

const oldArrayMethods = Array.prototype
// value__proto__ = arrayMethods 原型链查找问题，会向上查找，先查找我重写的，重写的没有在继续向上查找
export const arrayMethods = Object.create(oldArrayMethods)

const methods = [
  'push',
  'shift',
  'unshift',
  'pop',
  'sort',
  'splice',
  'reverse'
]
methods.forEach(method => {
  arrayMethods[method] = function (...args) {
    console.log('调用push')
    const result = oldArrayMethods[method].apply(this, args) // 调用原生的数组方法
    let inserted; // 当前用户插入的元素
    const ob = this.__ob__
    console.log(method)
    switch (method) {
      case 'push':
      case 'unshift':
        console.log(11)
        inserted = args
        break;
      case 'splice':
        inserted = args.slice(2)
      default:
        break;
    }

    if (inserted) ob.observeArray(inserted)
    return result
  }
})

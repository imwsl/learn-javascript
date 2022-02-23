// errors.js
//

// JavaScript提供原生的Error构造函数
// * 语言标准只提到Error必须要有message属性
// * 大多数JavaScript引擎，对Error实例还提供name和stack属性
var err = new Error("出错了")
console.log(err.message)
console.log(err.name)
//console.log(err.stack)

// Error的6个派生对象
// * SyntaxError : 语法错误
// * ReferenceError: 引用错误
// * RangeError: 超出有效的范围错误
// * TypeError: 类型错误
// * URIError: 对象是URI相关函数的参数不正确时抛出的错误
// * EvalError: 函数没有被正确执行错误

// SyntaxError
//var 1a

// ReferenceError
//console.log(bbb)

// RangeError
//var a = new Array(-1)

// TypeError
//var obj = {}
//obj.aa()

// URIError
//decodeURI('%2')
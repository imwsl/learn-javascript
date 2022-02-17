// 算数运算符
// * 加法运算符: x + y
// * 减法运算符: x - y
// * 乘法运算符: x * y
// * 乘法运算符: x / y
// * 指数运算符: x ** y
// * 余数运算符: x % y
// * 自增运算符: ++x or x++
// * 减法运算符: --x or x--
// * 正数值运算符: +x
// * 负数值运算符: -x

// 略

// 比较运算符
// * > 大于运算符
// * < 小于运算符
// * <= 小于或等于运算符
// * >= 大于或等于运算符
// * == 相等运算符
// * === 严格相等运算符
// * != 不相等运算符
// * !== 严格不相等运算符

// 原始值比较，都是先转化为数值再去比较
console.log(5 > '4') // true
console.log(true > false) // true
console.log(2 > true) // true

// NaN
// 任何值与NaN比较都会返回false
console.log(2 > NaN) // false
console.log(2 == NaN) // false
console.log(2 < NaN) // false
// ....

// 字符串比较
// 字符串是按照Unicode的码点来做比较大，如下
console.log('cat' < 'dog') // true

// 对象比较
var x = [2]
console.log(x > '11') // true
// 如何理解？x.valueOf().toString() 变为'2' '2' > '11'
console.log(x < 3) // true 
// 如何理解？x.valueOf().toString 变为'2' 与整数比较的时候变成数字 2 < 3

// '==' 与 '==='的比较
// * ‘==’ 比较两个值是否相等
// * '===' 比较他们是否为"同一个值"

// "===" 严格相等运算
console.log("\n -------------------- 严格相等运算 -------------------------\n")

console.log("************ 不同类型 **************")
console.log(1 === "1") // false, 不同类型
console.log(true === "true") // false, 不同类型

console.log("\n************ 原始类型(数值，字符串，布尔值): 值相同就相等 **************")
console.log(1 === 0x1) // true
console.log(NaN === NaN) // false, NaN与任何值都不相等(包括自身)
console.log(+0 === -0) // true

console.log("\n************ 复合类型(对象，数组，函数) **************\n")
// * 复合类型的数据比较时，不是比较它们的值是否相等，而是比较她们是否指向同一个地址
console.log({} === {}) // false
console.log([] === []) // false
console.log((function(){} === function(){}))

var v1 = {}
var v2 = v1
console.log(v1 === v2) // true

console.log("\n************ undefined 和 null **************\n")
// * undefined和null与自身严格相等
console.log(undefined === undefined)
console.log(null === null)

// 变量声明的时候值是undefined，因此它们是相等的
var v3 // undefined
var v4 // undefined
console.log(v3 === v4) // true

console.log("\n -------------------- 严格不相等运算 -------------------------\n")
// 先求严格相等运算符的结果，然后返回相反的值 ?? 
// 1 !== '1' 等价于 !(1 === '1')
console.log(1 !== '1') // true
console.log((function(){} !== function(){})) // true

console.log("\n -------------------- 相等运算 -------------------------\n")
// * 比较相同类型的时候，与严格相等运算相同
// * 比较不同类型的时候，先讲数据进行类型转化，然后再用严格相等运算符
console.log("\n************ 原始值(数值，数组, 波尔值): 原始值比较先转化为数值再比较 **************\n")
console.log(1 == true) // true, 等同于 1 === Number(true)
console.log(0 == false) // true, 等同于 0 === Number(false)
console.log(2 == true) // false, 等同于 2 === Number(true)
console.log(2 == false) // false, 等同于 2 === Number(false)
//console.
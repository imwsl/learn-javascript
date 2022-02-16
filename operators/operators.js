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
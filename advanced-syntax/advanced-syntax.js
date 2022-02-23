// advanced-syntax.js
//

// * JavaScript中变量没有类型限制，可以随便赋予任意值
var x = false ? 1 : 'a'
console.log(x) // a
console.log('4' - '3') // 1 这里面有一个隐式的类型转化，先将字符自动转化为数值
console.log('2.99' - '1.55') // 1.4400000000000002

console.log("-------------强制转换Number----------------------")
console.log("Number(324) = ", Number(324)) // 324
console.log("Number('324') = ", Number('324')) // 324
console.log("Number('324abc') = ", Number('324abc')) // NaN
console.log("Number('') = ", Number('')) // 0
console.log("Number(true) = ", Number(true)) // 1
console.log("Number(false) = ", Number(false)) // 0
console.log("Number(null) = ", Number(null)) // 0

// Number要比parseInt严格
console.log("parseInt('42 cats') = ", parseInt('42 cats')) // 42
console.log("Number('42 cats') = ", Number('42 cats')) // NaN

// Number方法的参数是对象时，返回NaN，除非是单个数值的数组
console.log("Number({a: 1}) = ", Number({a: 1})) // NaN
console.log("Number([1, 2, 3]) = ", Number([1, 2, 3])) // NaN
console.log("Number([5]) = ", Number([5])) // 5

// Number转化对象的步骤
// * 第一步， 调用对象自身的valueOf方法，如果返回原始类型值，则直接使用该值，不再进行后续步骤
// * 第二步，如果valueOf返回的是对象，则调用toString, 如果返回原始值类型，则直接使用改制，不再进行后续步骤 
// * 第三步，如果toString返回的还是对象，则报错 
var obj = {
    a: 1,
    valueOf: function() {
        console.log("call valueof...")
        return [1, 2, 3]
    },
    toString: function() {
        console.log("call toString...")
        return 1
    }
}
console.log("Number(obj) = ", Number(obj)) // 1

console.log("\n-------------强制转换String----------------------\n")
// 原始类型值
// * 数值： 转换为相应的字符串
// * 字符串： 转换后还是原来的值
// * 布尔值： true 转换为"true", false转换为"false"
// * undefined: 转换为“undefined”
// * null: 转换为"null"

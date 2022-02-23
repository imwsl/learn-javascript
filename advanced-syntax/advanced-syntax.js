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
console.log("String(123) = ", String(123)) // '123'
console.log("String('abc') = ", String('abc')) // 'abc'
console.log("String(true) = ", String(true)) // "true"
console.log("String(false) = ", String(false)) // "false"
console.log("String(undefined) = ", String(undefined)) // "undefined"
console.log("String(null) = ", String(null)) // "null"

// 对象
// * 如果参数是对象，则返回类型字符串 [object Object]
// * 如果数组，则返回数组的字符串形式
console.log(String({a: 1})) // "[object Object]"
console.log(String([1, 2, 3])) // "1, 2, 3"

// String 转换对象的步骤
// * 第一步: 调用toString方法，返回原始类型，则调用，不再进行以下步骤
// * 第二步：如果toString方法返回对象，则再调用valueOf, 返回原始类型，则调用，不再进行一下步骤
// * 第三步：如果valueOf方法返回的是对象，就报错
var obj1 = {
    a: 1,
    valueOf: function() {
        console.log("call valueOf...")
        return "Hello World"
    },
    toString: function() {
        console.log("call toString...")
        return {}
    }
}
console.log(String(obj1)) // "Hello World"

console.log("\n-------------强制转换Boolean----------------------\n")
// 规则：除了undefined, null, 0, NaN, '' 转化为false, 其它转换为true
console.log("Boolean(undefined) = ", Boolean(undefined)) // false
console.log("Boolean(null) = ", Boolean(null)) // false
console.log("Boolean(0) = ", Boolean(0)) // false
console.log("Boolean(NaN) = ", Boolean(NaN)) // false
console.log("Boolean('') = ", Boolean('')) // false

// 所有对象转换的结果都是true
console.log("\n所有对象转换的结果都是true")
console.log("Boolean({}) = ", Boolean({})) // true
console.log("Boolean([]) = ", Boolean([])) // true
console.log("Boolean(new Boolean(false)) = ", Boolean(new Boolean(false))) // true

console.log("\n-------------自动转换----------------------\n")
// 规则预期是是什么类型，就用什么类型转换
console.log("123 + 'abc'", 123 + 'abc') // 预期String '123abc'
if ('abc') { // 预期Boolean
    console.log("hello")
}
// ** 预期不确定，建议使用Boolean(), Number()和String() 函数进行显示转换
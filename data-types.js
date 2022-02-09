// data-types.js
// 数据类型

// JavaScript的数据类型
//
// 数值(number): 整数和小数(比如1、3.14)
// 字符串(string): 文本(比如Hello World)
// 布尔值(boolean): true, false
//
// * 以上三种类型为原始类型(primitive type)，最基础的数据类型
// 不可再细分

// undefined: 表示“未定义”
// null: 表示空值
//
// * undefined和null可以看成两个特殊值

// 对象(object): 各种值组成的集合
// 对象称为合成类型(complex type)的值，一个对象是多个原始类型
// 的值合成的，可以把把对象看成一个存放这种值的容器
//
// 对象是复杂得数据类型，又可以把对象分为三个子类型，如下
// * 狭义的对象: object
// * 数组: array
// * 函数: function 

// JavaScript确定一个值的类型的三种方法
// * typeof
// * instanceof
// * Object.prototype.toString

// typeof
console.log(typeof 123) // "number"
console.log(typeof '123') // "string"
console.log(typeof false) // "boolean"

function f() {}
console.log(typeof f) // "function"

console.log(typeof undefined) // "undefined"

//console.log(typeof window) // "object" 注意 浏览器里面才会生效 node运行结果为undefined
console.log(typeof {}) // "object"
console.log(typeof []) // "object"
console.log(typeof null) // "object" 注意!! 历史原因


// instanceof
var o = {};
var a = [];
console.log(o instanceof Array) // false
console.log(a instanceof Array) // true

//==========================================================
// null、undefined和boolean
//
// null与undefined
// null表示一个空对象，数值转化的时候为0
// undefined表示无定义，数值转化的时候为NaN
// 他们都在if语句中会被自动转化为false，至于为什么要这么设计，那要问
// JavaScript的最初的设计者Brendan Eich了...
console.log(5+null); // 5
console.log(5+undefined); // NaN
if (!null) {
    console.log("null在if中会自动转化为false");
}
if (!undefined) {
    console.log("undefined在if中会自动转化为false");
}

var i;
console.log(i) // 声明了没有赋值就是undefined

function f(x) {
    return x;
}
console.log(f()) // 调用函数没有输入参数undefined

var o = Object()
console.log(o.p) // 对象没有赋值的属性undefined

function f1() {}
console.log(f1()) // 函数没有返回时候，默认返回undefined

// boolean
// 可返回布尔值的运算符
// * 前置逻辑运算符: ! (Not)
// * 相等运算符: ===、!==、==、!=
// * 比较运算符: >、>=、<、<=
console.log(!false);
console.log(1===1);
console.log(1!==2);
console.log(1==1);
console.log(1!=2);

// JavaScript中可以转化为false的6个值
// * undefined
// * null
// * false
// * 0
// * NaN
// * "" 或 ''
// 其它都是true，例如[]， {}
if (!undefined) {
    console.log("undefined 转化为了false");
}
if (!null) {
    console.log("null 转化为了false");
}
if (!false) {
    console.log("false 转化为了false");
}
if (!0) {
    console.log("0 转化为了false");
}
if (!NaN) {
    console.log("NaN 转化为了false");
}
if (!"") {
    console.log("\"\" 转化为了false");
}
if (!'') {
    console.log("'' 转化为了false");
}
if ([]) {
    console.log("[] 转化为了true");
}
if ({}) {
    console.log("{} 转化为了true");
}







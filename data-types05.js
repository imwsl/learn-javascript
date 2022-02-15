// data-types05.js
// 函数

// 函数的声明三种形式
// * 命令声明
// * 变量赋值
// * Function构造函数

// 命令声明
function print_0(str) {
    console.log(str)
}
print_0("Hello World") // "Hello World"

// 变量赋值
var print_1 = function(str) {
    console.log(str)
}
print_1("Hello World") // "Hello World"

// Function函数构造
var print_2 = new Function('str', 'console.log(str)')
print_2("Hello World") // "Hello World"

// * 注意!! 
// * 函数重复声明，后面会覆盖前面的
// * 函数作为*第一公民*， 可赋值，可以返回，可以作为对象属性

// 不会报错，因为这个地方提升了，运行的时候函数定义会提到前面去
f()
function f() {
    console.log("f is hoisting!!")
}

// 函数的属性和方法
// *name属性：返回函数的名字
// *length属性：返回函数参数的个数
// *toString方法: 返回函数的源码
console.log(f.name) // "f"
console.log(f.length) // 0
console.log(print_0.length) // 1
console.log(print_0.toString()) // 返回源码

// 函数作用域
// * ES5规范中，JavaScript只有两种作用域：全局作用域，变量在整
// * 个程序中一直存在，所有地方都能读取，函数作用域，变量只存在
// * 于函数内部

function foo1(x) {
    if (x > 100) {
        var tmp = x - 100
    }
}

// 等价于
// * var命令声明的变量，不管在什么位置，变量声明都会被提升到函数体的头部

function foo2(x) {
    var tmp
    if (x > 100) {
        tmp = x - 100;
    }
}

// 函数本身的作用域
var a = 1
var x = function() {
    console.log(a)
}

function f2() {
    var a = 5
    x()
}

f2() // 1

// 函数省略参数
// * 只能在尾部省略
function f3(a, b, c) {
    console.log(a)
    console.log(b)
    console.log(c)
    console.log("**********************")
}
f3(1,2,3,4) // 1, 2, 3
f3(1,2,3) // 1, 2, 3
f3(1,2) // 1, 2, undefined
f3(1) // 1, undefined, undefined
f3() // undefined, undefined, undefined
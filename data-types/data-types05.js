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

// 参数传递
// * JavaScript函数如果传递(数值，字符串，布尔值)是值传递(pass by value)，函数体内修改参数值并不影响函数外部
// * 如果传递的是数组，对象和其他函数，则是地址传递(pass by reference)

// 值传递(pass by value)
var p = 3
function f4(x) {
	x=3
}
f4(4)
console.log(p) // 3

// 地址传递(pass by reference) // 这个地方为什么不叫引用传递??
// 如果函数内部修改的不是参数对象的某个属性，而是换掉整个参数，则不会影响原始值 ...
var pp = {
	a: 3
}

function f5(o) {
	o.a = 5
}
f5(pp)
console.log(pp.a) // 5

var ppp = [1, 2, 3]
function f6(o) {
	o = [4, 5, 6]
}
f6(ppp)
console.log(ppp) // [1, 2, 3]

// 同名参数则以后面一个参数为准，即使后面一个参数没有也以后面一个参数为准
function f7(a, a) {
	console.log(a)
}
f7(1, 2) // 2
f7(1) // undefined

// arguments对象
function f8(a, b, c) {
	console.log("arguments[0] = " + arguments[0])
	console.log("arguments[1] = " + arguments[1])
	console.log("arguments[2] = " + arguments[2])
}
f8(7, 8, 9) // 7, 8, 9
f8(7) // 7, undefined, undefined

// arguments支持运行的时候修改...
function f9(a, b) {
	arguments[0] = 1
	arguments[1] = 9

	return a + b
}
console.log(f9(1,1)) // 10

// 可以查看arguments.length来判断输入了几个参数 略
// arguments.callee 返回对应的原始函数，严格模式下use strict没禁用，所以可以不考虑这个特性

// 函数的闭包(closure)
// * 某种情况下，要拿到函数内部的局部变量，需要在函数里面再定义一个函数，如下：
function f10() {
	var n = 10
	function f() {
		console.log(n)
	}
	return f
}

var f11 = f10()
console.log("f11() ===> ")
f11()

// 以上这种可以获取函数内部变量的函数f, 我们称之为 *闭包函数*
// 闭包最大的特点，就是能够记住*诞生*的环境
// 因此闭包的特点
// * 1. 读取外层函数的内部变量
// * 2. 让外层函数的内部变量始终存在于内存中，例子如下：
// * 3. 封装私有属性和方法
function start_with(n) {
	var start = n
	function f(x) {
		return start + x
	}
	return f
}
var start_2_f = start_with(2)
console.log(start_2_f(3)) // 5
console.log(start_2_f(5)) // 7

// 封装私有属性和方法
function Person(name) {
	var _age
	function setAge(age) {
		_age = age
	}

	function getAge() {
		return _age
	}

	return {
		name: name,
		getAge: getAge,
		setAge: setAge
	}
}

var person = Person("Joe")
person.setAge(23)
console.log(person.name + "'s age is " + person.getAge()) // Joe's age is 23

// 注意!! 闭包(closure)会保留外层函数的内部变量，会消耗内存，滥用会有一定的性能损失
// 立即调用的函数表达式(IIFE)
// 语法错误的立即调用，原因是function这个关键字既可以当作语句也可以当作表达式
// function(){/* code */}()
// JavaScript规定， function关键字出现在行首，一律解释为语句，因此首行function关键字
// 则表示是函数的定义，函数的定义以圆括号结尾，就会报错

// 函数定义立即调用的解决办法是，不让function出现在行首，让JavaScript引擎理解为表达式
// * (function(){/* code */}())； // 表达式1
// * (function(){/* code */})()； // 表达式2
// 注意结尾分号是必须的，如果两个IIFE写在一起，没有分号就会报错!!

// 表达式1
var start_3_f = (function(){
	var n = 3
	return function(x) {
		return x + n
	}
}());
console.log("start_3_f => " + start_3_f(4)) // 7

// 表达式2 * 个人比较喜欢这种表达式
var start_5_f = (function(){
	return function(x) {
		return 5 + x
	}
})();
console.log("start_5_f => " + start_5_f(55)) // 60

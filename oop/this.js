// this.js
// 

// this代表当前对象
var person = {
    name: "Joe",
    setName: function(name) {
        this.name = name
    },
    describe: function() {
        return "I am " + this.name
    }
}
person.setName("wesley")
console.log(person.name) // wesley

var B = {
    name: "Joe"
}
B.describe = person.describe
// 属性可以赋予给另一个对象，因此*this*指向可变
console.log(B.describe()) // I am Joe


// 更清晰的一个例子
function describe() {
    return 'name ' + this.name
}

var A1 = {
    name: 'A1',
    describe: describe
}

var A2 = {
    name: 'A2',
    describe: describe
}
console.log(A1.describe())
console.log(A2.describe())


var ff = function() {
    console.log(this.x)
}
var x = 12
var A3 = {
    f: ff,
    x: 2
}
ff() // undefined ?? // 浏览器环境才生效
A3.f() // 2

// * 全局环境
//console.log(this === window) // true 浏览器环境下才生效

// *构造函数
var Obj = function(p) {
    this.p = p
}
var o = new Obj("Hello World")
console.log(o.p) // "Hello World"

// * 对象方法
var obj = {
    ff: function() {
        console.log(this) // { ff: [Function: ff] }
    }
}
obj.ff()

// 避免多层this
var obj1 = {
    f: function() {
        console.log(this)
        var ff = function() {
            console.log(this)
        }()
    }
}
obj1.f()

// *等价于*
var f1 = function() {
    console.log(this) // 全局this
}

var obj2 = {
    f: function() {
        console.log(this)
        var ff = f1()
    }
}
obj2.f()

// *解决办法*
var obj3 = {
    f: function() {
        console.log(this)
        var that = this
        var ff = function() {
            console.log(that)
        }()
    }
}
obj3.f()

// Array的map与foreach方法中不应该使用this 略
// 避免在回调函数中使用this

// 绑定this的方法
// *Function.prototype.call()
// *Function.prototype.apply()
// *Function.prototype.bind()
var n = 123
var obj4 = {n: 456}
function a() {
    console.log(this.n)
}
a.call() // 123 全局 浏览器环境下才适用
a.call(null) // 123 全局 浏览器环境下才适用
a.call(undefined) // 123 全局 浏览器环境下才适用
//a.call(window) // 123 全局 浏览器环境下才适用
a.call(obj4) // 456 指向obj4

function add(a, b) {
    return a + b
}
console.log(add.call(this, 1, 2)) // 3 this指向add内部

// call方法是一个调用对象的原生方法
console.log(obj4.hasOwnProperty('toString')) // false
// 覆盖hasOwnProperty方法
obj4.hasOwnProperty = function() {
    return true
}
console.log(obj4.hasOwnProperty('toString')) // true,调用覆盖的方法
console.log(Object.prototype.hasOwnProperty.call(obj4, 'toString')) // false 真正的调用

// apply与call方法类似，唯一区别是它接受的是数组来作为执行时的参数
console.log(add.apply(this, [3, 4, 4])) // 7

// bind() 方法将函数体内的this绑定到某个对象，然后返回一个新的函数
// * bind每一次调用返回一个新的函数
var d = new Date()
console.log(d.getTime())
var print = d.getTime
//print() // 报错，getTime内部的this绑定了Date，赋值给print后，this就不再指向Date了

// 解决办法
print = d.getTime.bind(d) // 将getTime内部的this绑定到d
console.log(print())

// 一个更加清晰的例子
var counter = {
    count: 0, 
    inc: function() {
        this.count ++
    }
}

var func = counter.inc
func() // inc的this指向外部，无法影响
console.log(counter.count)

func = counter.inc.bind(counter) // bind this
func()
func()
console.log(counter.count) // 2

// 一个更加复杂的例子
var add_xy = function(x, y) {
    return x * this.m + y * this.n
}

var obj5 = {
    m: 5,
    n: 4
}

var add5 = add_xy.bind(obj5, 5) // 这个地方已经确定好了一个参数x = 5
console.log(add5(4)) // 5 * 5 + 4 * 4 = 41

// bind结合回调函数使用
function call_it(callback) {
    callback()
}

// *wrong
counter.count = 0
call_it(counter.inc)
console.log(counter.count) // 0

// *right
call_it(counter.inc.bind(counter))
console.log(counter.count) // 1

// 一个更加隐蔽的例子
var obj5 = {
    name: "Mike",
    times: [1, 2, 3],
    print: function() {
        this.times.forEach(function(n){
            console.log(this.name) // *** 隐蔽错误，这个this指向全局
        })
    },
    print2: function() {
        this.times.forEach(function(n){
            console.log(this.name)
        }.bind(this)) // *** 绑定当前对象
    }
}
obj5.print() // 没有任何输出
obj5.print2()

// 结合call方法使用
// 正常的例子
console.log([1, 2, 3].slice(0, 1)) // [1]
// 等价于
console.log(Array.prototype.slice.call([1, 2, 3], 0, 1)) // 1
// 使用bind改写一个slice
// 这段代码是将Array.prototype.slice变成Function.prototype.call方法所在的对象
// 调用slice的时候，就变成了Array.prototype.slice.call
var slice = Function.prototype.call.bind(Array.prototype.slice)
console.log(slice([1, 2, 3], 0, 1))

// 将Function.prototype.call方法绑定到Function.prototype.bind
// 会改写bind的调用形式
function fff() {
    console.log(this.v)
}
var obj5 = {v:1234}
var bind = Function.prototype.call.bind(Function.prototype.bind)
bind(fff, obj5)() // 1234
// 等价于
var f5 = fff.bind(obj5)
f5()

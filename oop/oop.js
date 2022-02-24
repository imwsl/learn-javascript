// oop.js
// 面向对象

'use strict'

// 生成对象
// * 构造函数的首字母大写
// * 函数体内部使用*this*关键字，代表所要生成的对象
// * 生成对象时候，必须使用*new*命令
var Vehicle = function() {
    this.price = 1000
}

var v = new Vehicle()
v.price = 10000
console.log(v.price) // 10000
//var v1 = Vehicle() // 严格模式下，不加new是错误的

var Dog = function(name, age) {
    this.name = name
    this.age = age 
}

var d = new Dog("Joe", 18)
console.log(d.name)
console.log(d.age)

// new.target 判断是否使用了*new*命令
function f() {
    if (!new.target) {
        throw new Error("请使用*new*命令!")
    }
}
//f() 抛出错误

// Object.create创建对象 略
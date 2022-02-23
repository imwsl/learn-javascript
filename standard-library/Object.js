// Object.js
// Object对象

// * 1、Object对象本身的方法
Object.print = function(o) {
    console.log(o)
}
Object.print("Hello World!!")

// * 2、Object实例的方法
Object.prototype.print = function(o) {
    console.log(o)
}
var obj = new Object()
obj.print("Hello World!!")
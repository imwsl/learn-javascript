// inherit.js
// 对象的继承

// 原型对象 Prototype

// 构造函数的问题
// * 同一个构造函数的不同实例之间，无法共享属性
function Cat(name, color) {
    this.name = name,
    this.color = color,
    this.meow = function() {
        console.log("meow...")
    }
}

var cat1 = new Cat('Joe', 'Red')
var cat2 = new Cat('Johh', 'Blue')
console.log(cat1.meow === cat2.meow) // false, 这样会造成系统资源的浪费

// 每一个函数都有一个prototype属性，指向一个对象
function f() {}
console.log(typeof f.prototype) // object

// 对于构造函数来说，生成实例的时候，prototype的属性会成为实例对象的原型
function Animal(name) {
    this.name = name
}
Animal.prototype.color = "Red"

var cat3 = new Animal('Joe')
var cat4 = new Animal('Jack')
console.log(cat3.color) // Red
console.log(cat4.color) // Red

// 原型对象的属性不是实例对象自身的属性，只要修改原型对象，变动会立刻体现在所有实例对象上
// * 原因：实例对象没有color属性，都是读取原型对象的color属性
Animal.prototype.color = "Yellow"
console.log(cat3.color) // Yellow
console.log(cat4.color) // Yellow

// 如果实例对象自身就有某个属性和方法，它就不会再去原型对象寻找这些属性和方法
// ** 我的理解是*覆盖了*
cat3.color = "Blue"
console.log(cat3.color) // Blue
console.log(cat4.color) // Yellow

Animal.prototype.walk = function() {
    console.log(this.name + ' is walking...')
}
cat3.walk()
cat4.walk()

// 原型链
// * JavaScript规定，所有对象队友自己的原型对象(prototype)
// * 由于原型对象也是对象，所以他们也有自己的原型，这样会形成一个原型链(prototype chain)
// * 如果层层上溯，所有对象原型最终会上溯到Object.prototype
// * Object.prototype的原型是null
console.log(Object.getPrototypeOf(Object.prototype)) // null

// 如果让构造函数的prototype属性指向一个数组，意味着实例对象可以调用数组的方法
var MyArray = function() {}
MyArray.prototype = new Array()
MyArray.prototype.constructor = MyArray

var arr = new MyArray()
arr.push(1, 2, 3)
console.log(arr.length) // 3
console.log(arr instanceof Array) // true

// constructor属性
// prototype对象的constructor属性指向prototype对象所在的构造函数, 默认指向构造函数
function P() {}
console.log(P.prototype.constructor === P) // true
var p = new P()
console.log(p.constructor === P) // true
console.log(p.constructor === P.prototype.constructor) // true
console.log(p.hasOwnProperty('constructor')) // true

// * 有constructor，可以知道某个实例是哪个构造函数产生的
// * 也可以从一个实例创建另一个新的实例
// * 技巧
function X() {}
var x = new X()
var y = new x.constructor()
console.log(y instanceof X) // true

// createCopy

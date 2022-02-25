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
// 修改原型对象(prototype)的时候，同时也要修改constructor属性
// * 例子
function Person(name) {
    this.name = name
}
console.log(Person.prototype.constructor === Person) // true
Person.prototype = {
    hello: function() {}
}
console.log(Person.prototype.constructor === Person) // false
Person.prototype.constructor = Person
console.log(Person.prototype.constructor === Person) // true

// instanceof 运算符
var p = new Person('Joe')
console.log(p instanceof Person) // true
// 等价于
console.log(Person.prototype.isPrototypeOf(p)) // true

// instanceof 可以检查整个原型链
// * 例子
var d = new Date()
console.log(d instanceof Date) // true
console.log(d instanceof Object) // true

// *技巧：由于任意对象(除了null)都是Object实例，所以instanceof可判断一个值是否为null
function isNull(v) {
    return !(v instanceof Object)
}
console.log(null instanceof Object) // false
console.log(isNull(null)) // true
var obj = {}
console.log(obj instanceof Object) // true
console.log(isNull(obj)) // false

// 构造函数的继承
// * 第一步，子类调用父类的构造函数，这样子类就有父类的实例的属性
/*
function Sub(value) { // Sub子类
    Super.call(this)
    this.prop = value
}
// * 第二步，让子类的原型指向父类的原型,这样之类就可以指向父类的原型了
Sub.prototype = Object.create(Super.prototype) // 注意，不能直接指向Super.prototype,这样在修改子类的时候会修改父类的prototype
Sub.prototype.constructor = Sub 
//Sub.prototype.method = '...'

// 等价写法
Sub.prototype = new Super() // 不推荐，子类会具有父类的实例方法，这些方法可能并不是我们需要的
*/
// 举个例子
function Shape() {
    this.x = 0
    this.y = 0
}

Shape.prototype.move = function(x, y) {
    this.x += x 
    this.y += y 
    console.log('Shape moved')
}

function Rectangle() {
    Shape.call(this)
}
Rectangle.prototype = Object.create(Shape.prototype)
Rectangle.prototype.constructor = Rectangle
var r = new Rectangle()
console.log(r instanceof Rectangle) // true
console.log(r instanceof Shape) // true

// 多重继承
// * JavaScript不提供多重继承
// * 技巧：要实现多重继承需要通过一种变通的方法...
// 例子
function M1() {
    this.hello = "Hello"
}
function M2() {
    this.world = "World"
}
function S() {
    M1.call(this)
    M2.call(this)
}

// 继承M1
S.prototype = Object.create(M1.prototype)
// 继承链接上添加上M2
Object.assign(S.prototype, M2.prototype)
// 指定构造函数
S.prototype.constructor = S

var s = new S()
console.log(s instanceof S) // true
console.log(s instanceof M2) // !! false 这是一种Mixin模式
console.log(s instanceof M1) // true 
console.log(s instanceof Object) // true
console.log(s.hello + " " + s.world) // "Hello World"
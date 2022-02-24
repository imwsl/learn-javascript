// Object.js
// Object对象

// * 1、Object对象本身的方法， 又称为静态方法
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

// object.prototype 参看《面向对象编程》

// Object本身是一个函数，当作方法使用的时候，可以将任意值转化为对象
var obj0 = Object()

// 等价于
var obj1 = Object(undefined)
var obj2 = Object(null)

console.log(obj0 instanceof Object) // true
console.log(obj1 instanceof Object) // true
console.log(obj2 instanceof Object) // true

// 利用Object转换对象的能力
// * 如果Object的方法参数是一个对象，它总会返回对象
var arr = []
var obj4 = Object(arr)
console.log("obj4 === arr : ", obj4 === arr) // true

// * 写一个函数，判断变量是否为对象
function isObject(value) {
    return value === Object(value)
}
console.log("isObject([]) = ", isObject([])) // false
console.log("isObject(true) = ", isObject(true)) // false

// Object构造函数
// * Object构造函数与方法一样
// * Object构造函数如果参数是对象的话，直接返回对象
var obj5 = {a: 1}
var obj6 = new Object(obj5)
console.log("obj5 === obj6 : ", obj5 === obj6) // true

// * Object参数是一个原始类型值，则返回原始类型的包装对象
var obj7 = new Object(123)
console.log(obj7 instanceof Number) // true
var obj8 = new Object("Hello")
console.log(obj8 instanceof String) // true

// Object的静态方法
// * Object.keys() Object.getOwnPropertyNames() 返回对象的属性
// * 只有在涉及到不可枚举的属性的时候，会返回不一样的结果
var obj8 = {
    p1: 123,
    p2: 234
}
console.log(Object.keys(obj8)) // ["p1", "p2"]
console.log(Object.getOwnPropertyNames(obj8)) // ["p1", "p2"]

var obj9 = [1, 2]
console.log(Object.keys(obj9)) // ['0', '1']
console.log(Object.getOwnPropertyNames(obj9)) // ['0', '1', 'length']

// * 技巧：获取属性的个数
console.log(Object.keys(obj9).length) // 2
console.log(Object.getOwnPropertyNames(obj9).length) // 3

// 其它静态方法
// *Object.getOwnPropertyDescriptor() 获取某个属性的描述对象
var descriptor0 = Object.getOwnPropertyDescriptor(obj8, "p1")
console.log(descriptor0)

// *Object.defineProperty() 通过描述对象，定义某个属性
var obj10 = new Object()
Object.defineProperty(obj10, "p", {
    value: 55,
    writable: false
})
console.log(obj10.p)
obj10.p = 22 // writable false
console.log(obj10.p)

// *Object.defineProperties 通过描述对象，定义多个属性
Object.defineProperties(obj10, {
    'p1': {
        value: 22,
        writable: true
    },
    'p2': {
        value:33,
        writable: false
    }
})
console.log(obj10.p1)
console.log(obj10.p2)

// 控制对象状态的方法
// *Object.preventExtensions() : 防止对象扩展
// *Object.isExtensible() : 判断对象是否可扩展
// *Object.seal() : 禁止对象配置
// *Object.isSealed() : 判断一个对象是否可配置
// *Object.freeze() : 冻结一个对象
// *Object.isFrozen() : 判断一个对象是否冻结
var obj11 = {}
Object.preventExtensions(obj11)
obj11.p = 22
console.log(obj11.p) // 无法扩展 undefined
console.log(Object.isExtensible(obj11)) // false

var obj12 = {p: 33}
Object.seal(obj12) // 封闭一个对象，阻止新属性，且现在属性无法配置但可以修改
Object.isSealed(obj12) // true
obj12.p = 55
console.log(obj12.p) // 55
delete obj12.p // cannot delete this property
console.log(obj12.p) // 55

var obj13 = {p: 77}
Object.freeze(obj13) // 冻结
obj13.p = 66
console.log(obj13.p) // 77
delete obj13.p
console.log(obj13.p) // 77
console.log(Object.isFrozen(obj13)) // true

// 原型链相关方法
// *Object.create: 该方法可以指定原型对象和属性，返回一个新的对象
// *Object.getPrototypeOf : 获取对象的Prototype对象
var person = {
    name: "Wesley",
    hello: function() {
        return "I am " + this.name
    }
}

var me = Object.create(person) // 使用现有对象的__proto__创建一个新对象
console.log(me.hello()) // I am Wesley
me.name = "John"
console.log(me.hello()) // I am John

console.log(Object.getPrototypeOf(me)) // { name: 'Wesley', hello: [Function: hello] }
console.log(Object.getPrototypeOf(me) === person) // true

// Object实例方法
// *Object.prototype.valueOf : 返回当前对象对应的值
// *Object.prototype.toString : 返回当前对象对应的字符串形式
// *Object.prototype.toLocaleString : 返回当前对象返回的本地字符串形式
// *Object.prototype.hasOwnProperty : 判断某个属性是否为当前对象自身属性，还是继承自原型对象属性
// *Object.prototype.isPrototypeOf : 判断当前对象是否为另一个对象的原型
// *Object.prototype.propertyIsEnumerable: 判断某个对象是否可枚举

// Object.valueOf返回自身
var o0 = new Object()
console.log(o0.valueOf() === o0) // true

// valueOf返回整数，可以与整数做运算
o0.valueOf = function() {
    return 2
}
console.log(1 + o0) // 3

// toString
console.log(o0.toString()) // [object Object]
// 改写 
o0.toString = function() {
    return "is object"
}
console.log(o0.toString()) // "is object"

// 由于对象会覆盖toString，如上代码，想要调用toString
// 使用Object.prototype.toString.call(xx)
console.log(Object.prototype.toString.call(o0)) // [object Object]
// 因此可以用这个方法，写一个类型判断函数

var o1 = {
    p: 123
}
console.log(o1.hasOwnProperty('p')) // true





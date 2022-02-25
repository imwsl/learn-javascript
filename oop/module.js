// module.js
// 模块

//ES6才支持类和模块, 非ES6的写法如下
//

// 基本实现方法
// * 把模块写成一个对象，所有的模块成员

var moudle1 = new Object({
    count: 0,
    m1: function() {
        console.log("m1...")
    },
    m2: function() {
        console.log("m2...")
    }
})

moudle1.m1()
moudle1.m2()

// 封装私有变量：构造函数的写法
function StringBuilder() {
    var buffer = []

    this.add = function(str) {
        buffer.push(str)
    }

    this.toString = function() {
        return buffer.join('')
    }
}

// 以上代码
// * 创建实例后，buffer是私有的，无法访问，但可以通过方法访问
// * 这种方法的问题，构造函数和实例是一体的，总是存在于内存中，用完无法清除

var sb1 = new StringBuilder()
console.log(sb1.buffer) // undefined
sb1.add('Hello World')
console.log(sb1.toString()) // Hello World

// * 第二种写法
function StringBuilder2() {
    this._buffer = []
}

StringBuilder2.prototype = {
    constructor: StringBuilder2,
    add: function(str) {
        this._buffer.push(str)
    },
    toString: function() {
        return this._buffer.join('')
    }
}

// 以上代码
// * 创建实例后，实例和构造函数分离，也可以通过方法访问
// * 问题：私有变量可以外部读写，不是很安全，没有起到封装的作用
var s2 = new StringBuilder2()
s2.add("Hello World")
console.log(s2._buffer) // 可访问 ['Hello World']
console.log(s2.toString()) // 'Hello World'

// 封装私有变量：立即执行函数
var module2 = (function(){
    var _count = 0;
    
    var add = function(x) {
        _count = _count + x
    };

    var count = function() {
        return _count
    };

    return {
        add: add,
        count: count
    }
})();

console.log(module2._count) // undefined
module2.add(9)
module2.add(88)
console.log(module2.count()) // 97

// 以上代码是JavaScript模块封装的基本写法

// 模块的放大模式(augmentation)
// * 给模块添加一个新方法
module2 = (function(mod){
    mod.m3 = function() {
        console.log("m3...")
    };
    return mod;
})(module2);

module2.m3()
module2.add(88)
console.log(module2.count()) // 185

// 模块的宽放大模式(loose augmentation) 待研究，不是很懂这种模式

// 输入全局对象
/*
(function($, window, document){
    function go() {} // 无法调用
    function handleEvent() {} // 无法调用
    function init() {}
    function destroy() {}

    window.finalCarousel = { // 暴露出去，供外部调用
        init: init,
        destroy: destroy
    }
    
})(jQuery, window, document);
*/
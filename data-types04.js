// data-types04.js
//
// 对象
// 对象是JavaScript里面最核心的概念，也是最重要的数据类型
//
// 对象：简单讲，对象是一组“键值对”(key-value)集合
//
// 对象的属性以逗号分隔，最后一个属性可以加逗号(trailing comma)，也可以不加

var obj = {
	foo: 'Hello',
	bar: 'World',
	1: 'a',
	3.2: 3.2,
	1e2: true,
	.234: .234
};
// obj 指向一个对象，对象包含两个键值对(也可以称为“成员”)，键值对以逗号分隔
// 如果键名称是数字，自动转化为字符串 	
// 注意!! 如果键名不符合标识命名条件，且又不是数字就会报错，但加上引号又不报错
//

/*---------------------------------------------------------------------------
 

// 报错

var obj1 = {
	1p: "Hello"
};

// 不报错
var obj2 = {
	'1p': "Hello
};

----------------------------------------------------------------------------*/

// 对象每个键名又可以称为“属性”(property)，键值可以是任何数据类型，如果键值是一个函数
// 我们可以把这个属性叫做"方法"(method)，可以像函数那样调用

var obj3 = {
	p: function(x) {
		return x * x;
	}
};

console.log(obj3.p(9)); // 81

// 属性可以动态创建，如果属性的值是一个对象，我们可以做一个链式引用，如下:

var obj4 = {
	sum: function(x, y) {
		return x + y;
	}
};

obj3.foo = obj4; // 动态创建
console.log(obj3.foo.sum(8, 9)); // 17

// 对象的引用
// 不同变量名是以引用的方式指向同一个对象，如下:
var obj5 = {
	a: 5,
}

var obj6 = obj5;
obj6.a = 6;
console.log(obj5.a); // 6
console.log(obj6.a); // 6

obj5.a = 11;
obj6 = 1; // 取消了obj6的引用
console.log(obj5.a) // 11

// 引用只限于对象，原始类型的值仅仅是拷贝

// 首行是大括号，到底是表达式还是语句?
// JavaScript的规则：
// * 无法确定是对象还是代码块，一律认为是代码块
// * {}加上圆括号，则被认为是对象
// 使用eval来执行如下代码，来确认以上的规则

console.log(eval('{foo: 123}')); // 代码块
console.log(eval('({foo: 123})')); // 表达式

// 属性的读取
var obj7 = {
	p: "Hello World",
	pp: "Hello World",
	1: 123,
};

console.log(obj7.p) // 点运算符
console.log(obj7['p']) // 方括号运算符，记得引号的处理

// 方括号内部还可以使用表达式
console.log(obj7['p' + 'p']) // "Hello World"

// 数字键在方括号里面加不加引号都会自动转化为字符串，且数字键不能使用点
console.log(obj7[1]) // 123
console.log(obj7['1']) // 123
// obj7.1 error

// 属性的赋值，点运算符和方括号都能赋值
obj7.p = "Joe";
obj7['pp'] = "Ryan"
console.log(obj7.p) // Joe
console.log(obj7.pp) // Ryan

// 通过Object.keys()方法查看属性
console.log(Object.keys(obj7))

// 删除属性
delete obj7.p
console.log(Object.keys(obj7))
delete obj7.ppp // 删除一个不存在的属性，依旧返回true，不报错

// 使用in检测属性是否存在
console.log(('pp' in obj7)) // true
console.log(('p' in obj7)) // false

// 使用for..in循环遍历
for (var key in obj7) {
	console.log("key => ", key)
	console.log("value => ", obj[key])
}

// 对象通过hasOwnProperty来判断属性是否属于对象自身属性

// with语句
// 操作同一个对象多个属性的时候用的，只是为了书写方便...
// * 如果with代码块里面没有定义的，就只能当作一个全局变量来处理了，如下图*p4*
var obj8 = {
	p1: 1,
	p2: 2,
	p3: 3,
}

with (obj8) {
	p1 = 4;
	p2 = 5;
	p3 = 6;
	p4 = 7;
}

// 等价于
obj8.p1 = 4;
obj8.p2 = 5;
obj8.p3 = 6;

console.log(p4); // 7
// data-types.js
// 数据类型

// Number.MAX_VALUE Number.MIN_VALUE
//
console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)

console.log(-0 === +0) // true
console.log(0 === -0) // true
console.log(0 === +0) // true

console.log(1/+0) // Infinity
console.log(1/-0) // -Infinity
// 因此 (1/+0) === (1/-0)返回false 

// NaN表述"非数字"，但typeof NaN可以得到NaN属于number类型...
// NaN不属于任何值包括它本身，因此NaN === NaN返回false 
// Boolean运算中NaN被当作false 
// NaN与任何数的运算都是NaN
console.log(5-'x') // NaN
console.log(Math.acos(2)) // NaN
console.log(Math.log(-1)) // NaN

// Infinity
// Infinity大于一切数值，除了NaN
// -Infinity小于一切数值，除了NaN
console.log(Infinity > 1000) // true
console.log(-Infinity < -1000) //true
console.log(Infinity > NaN) // false
console.log(Infinity < NaN) // false
console.log(Infinity === NaN) // false
console.log(-Infinity > NaN) // false
console.log(-Infinity < NaN) // false
console.log(-Infinity === NaN) // false

//// Infinity运算规则
console.log(5 * Infinity) // Infinity
console.log(1/Infinity) // 0
console.log(Infinity/0) // Infinity
console.log(Infinity - Infinity) // NaN
console.log(Infinity / Infinity) // NaN

// null与Infinity运算等同于0
// undefined与Infinity运算都是NaN...

// parseInt
// 可做全局转化，遇到字符串停止，可做进制转化，略

// parseFloat
// 可做浮点数转化，遇到字符串停止，略...

// isNaN 判断值是否是NaN
console.log(isNaN(NaN)) // true
console.log(isNaN(123)) // false
console.log(isNaN("Hello")) // true isNaN检测字符串的时候返回true
console.log(isNaN(['xyz'])) // true 等价isNaN(Number[123])

console.log(isNaN({})) // true 同样检测数组和对象的时候返回true
console.log(isNaN([])) // false 空数组和只有一个数值的数字则返回false
console.log(isNaN([123])) // false

// isNaN并不可靠，检测isNaN之前先要判断一下类型，如下:
function isMyNaN(value) {
	return typeof value === 'number' && isNaN(value)
}
// 更可靠的方法是利用NaN本身的唯一不等于自身的值的特点
function isMyNaN2(value) {
	return value !== value;
}

// isFinite() 判断某个值是否为正常的数值
// 除了Infinity, -Infinity, NaN, undefined都会返回false
// 其它的都会返回true 略


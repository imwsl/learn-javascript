// data-types07.js

// 任何数据类型都能存入数组

var arr = [
    1,
    "Hello",
    function f() {console.log("Function...")}
]

console.log(arr[0]) // 1
console.log(arr[1]) // "Hello"
arr[2]() // "Function..."

// 数组是一种特殊对象
console.log(typeof []) // "object"
console.log(Object.keys(['One', 'Two', 'Three'])) //['1', '2', '3'] 键名

// 数组赋值
// 数组会先把值转化为字符串，再作为键名
// * arr[1.00] 与 arr[1] 是等价的
var arr1 = ['1', '2', '3']
arr1[1.00] = 5
console.log(arr1[1]) // 5
arr1[1] = 6
console.log(arr1[1]) // 6

// 数组有length属性
// in 运算符，检查键名是否存在
if (2 in arr1) {
	console.log('key 2 is valid')
}

// for..in 循环遍历
for (var i in arr1) {
	console.log("key => " + i + " " + arr1[i])
}

// 数组的空位(hole)
var arr3 = [1, ,3]
console.log(arr3.length) // 3
console.log(arr3[1]) // undefined

//delete 组成员，形成空位(hole)，但对数组长度没有影响
delete arr3[0]
console.log(arr3.length) // 3
console.log(arr3[0]) // undefined

// 数组出现空位，使用forEach, for..in, Object.keys 空位会被跳过
arr3.forEach(function(value, key) {
	console.log("forEach => " + key + " value= " + value)
})

for (var key in arr3) {
	console.log("for..in key => " + key + " value= " + arr3[key])
}

console.log(Object.keys(arr3)) // ['2']

// 类似数组的对象(array-like object)

var obj = {
	1: 'a',
	2: 'b',
	3: 'c',
	length: 3
}
console.log(obj[0]) // 'a'
console.log(obj[1]) // 'b'
console.log(obj.length) // 3
console.log(obj instanceof Array) // false
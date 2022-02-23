// 二进制位运算符
//
// * 或运算符(or): |
// * 与运算符(and): &
// * 否运算符(not): ~
// * 异或运算符(xor): ^
// * 左移运算符(left shift): <<
// * 右移运算符(right shift): >>
// * 头部补零的右移运算符(zero filled right shift): >>>

// ** 注意，位运算符只对整数起作用，JavaScript内部是以64位浮点式
// ** 存储，但是在做位运算的时候，是以32位带符号的整数进行运算的，且
// ** 返回一个32位带符号的整数

// 或运算转化为32位整数
// * 注意，这是二进制位运算
function toInt32(x) {
    return x | 0
}
console.log(toInt32(1.01)) // 1
console.log(toInt32(1.999)) // 1
console.log(toInt32(9)) // 9
console.log(toInt32(Math.pow(2, 32) + 1)) // 1
console.log(toInt32(Math.pow(2, 32) - 1)) // -1

console.log("\n --------------二进制或运算: |  --------------")

// 0 的二进制是00, 3的二进制是11, 因此或运算结果是11， 即为3
console.log(0 | 3) // 3

console.log(2.99 | 0) // 2 或运算会将小数部分舍去
console.log(-2.99 | 0) // -2
console.log(2147483649.4 | 0) // -2147483647, 取整的方法不适用超过32位整数的最大值

console.log("\n --------------二进制与运算: &  --------------")
console.log(3 & 0) // 0


console.log("\n --------------二进制否运算: ~  --------------")
console.log(~ 3) // -4
// 如何理解？
// * 3的32位表示：00000000000000000000000000000011 
// * 二进制否后表示: 11111111111111111111111111111100
// * JavaScript内部使用补码的形式表示负数：这个数要减去1，再取反，然后加上负号: 1111111111111111111111111111011 取反 00000000000000000000000000000100
// * 这个要参考补码的逻辑，过于复杂
// * 简单思考： 否的表达式是 *取反减去1*: ~3 == -3 - 1 = -4
console.log(~~2.9) // 2 // 小数取反首先要舍弃小数部分，然后取反
console.log(~2.9) // -3
// 二进制取反求小数整数方法
function toInt(x) {
    return ~~x
}
console.log(toInt(1.99)) // 1
console.log(toInt(3.99)) // 3

console.log("其它类型，先要通过Number转化为数值然后取反")
console.log(~[]) // -1 ~Number([])
console.log(~NaN) // -1 ~Number(NaN)
console.log(~null) // -1 ~Number(null)
console.log(Number([]))
console.log(Number(NaN))
console.log(Number(null))

console.log("\n --------------二进制异或运算: ^  --------------")
console.log(0 ^ 3) // 3
console.log(3 ^ 3) // 0

console.log("三次异或可以交换值")
var a = 99
var b = 10
a ^= b, b ^= a, a ^= b
console.log(a) // 10
console.log(b) // 90

// 左移运算符 略
// 右移运算符 略
// 头部补零的右移运算符 略

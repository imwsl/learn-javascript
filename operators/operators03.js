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
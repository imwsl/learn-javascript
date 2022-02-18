// 布尔运算符
// * 取反运算符: !
// * 且运算符: &&
// * 或运算符: ||
// * 三元运算符: ?:

console.log("\n --------------取反运算符: !  --------------")
console.log("!undefined = " + !undefined) // true
console.log("!null = " + !null) // true
console.log("!false = " + !false) // true
console.log("!0 = " + !0) // true
console.log("!NaN = " + !NaN) // true
console.log("!'' = " + !'') // true
console.log("除了以上为true以外，其它都为false")

console.log("\n --------------且运算符: &&  --------------")
// 规则
// * 如果第一个运算子为true, 则直接返回第二个运算子的*值*
// * 如果第一个运算子为false, 则直接返回第一个运算子的*值*
console.log('t' && 'null') // null
console.log('t' && 'null') // null
console.log(false && 'f') // false
console.log(false && 1) // false

console.log("\n --------------或运算符: ||  --------------")
// 规则
// * 如果第一个运算子为true, 则返回第一个运算子的*值*
// * 如果第一个运算子为false, 则返回第二个运算子的值
console.log('t' || 'null') // t
console.log('t' || 'null') // t
console.log(false || 'f') // f
console.log(false || 1) // 1

console.log("\n --------------三元条件运算符: ?:  --------------")
console.log('t'? 'hello' : 'world') // hello
console.log(0 ? 'hello' : 'world') // world
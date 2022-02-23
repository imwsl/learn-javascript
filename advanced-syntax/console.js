// console.js
//

// 编程风格 略

// console对象
// * console对象是JavaScript原生对象，有点类似于Unix的标准输出stdout和标准错误stderr

// console对象的静态方法
// * console.log
// * console.info
// * console.debug

console.log("1") // 1
console.log("%s %d", "Hello", 2) // "Hello 2"
console.log(Date)

console.info(111) // 111, console.log别名

console.debug("222")

console.warn("warn...")
console.error("error...")

var languages = [
    { name: "JavaScript", fileExtension: ".js" },
    { name: "TypeScript", fileExtension: ".ts" },
    { name: "CoffeeScript", fileExtension: ".coffee" }
  ];
  
console.table(languages);

function greet(user) {
    console.count()
    return 'hi ' + user
}
greet('bob')
greet('alice')
greet('mike')

// console.dir 对对象进行检查，并以易于阅读和打印格式显示
console.dir({f1: 'foo', f2: 'bar'}, {colors: true})

// console.assert 判断条件
console.assert(false, '判断条件不成立')

// 等价于
try {
    throw new Error("判断条件不成立!")
} catch (e) {
    console.log(e.message)
}

// console.time(), console.timeEnd() 计算每一个操作的主要花费时间
console.time("Array initialize")
var array = new Array(1000000)
for (var i = 0; i < array.length; i ++) {
    array[i] = new Object()
}
console.timeEnd("Array initialize")

console.group('一级分组');
console.log('一级分组的内容');

console.group('二级分组');
console.log('二级分组的内容');

console.groupEnd(); // 二级分组结束
console.groupEnd(); // 一级分组结束

// console.trace // console.clear
console.trace() // 显示当前执行代码在堆栈中的调用路径
console.clear() // 清理输出

// debugger语句
for (var i = 0; i < 5; i ++) {
    console.log(i)
    if (i === 2) debugger; // 浏览器中暂停运行，自动打开脚本源码界面
}
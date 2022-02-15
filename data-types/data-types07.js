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

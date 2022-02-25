// promise.js
// 

// 概念
// * Promise是一个对象，也是构造函数
function f1(resolve, reject) {
    console.log("call f1...")
    resolve() // resolve才会触发then
}

function f2() {
    console.log("call f2...")
}

var p1 = new Promise(f1)
p1.then(f2)

// Promise对象的状态
// * pending: 异步操作未完成
// * fulfilled: 异步操作成功 -> resolved
// * rejected: 异步操作失败 -> resolved

// * 异步操作成功，Promise实例传回一个值(value)，状态变为fulfilled
// * 异步操作失败, Promise实例抛出一个错误(error)，状态变为rejected

// Promise构造函数
/*
var promise = new Promise(function(resolve, reject){
    if (success ) { 
        resolve(value)
    } else {
        reject(new Error())
    }
})*/

// Promise.prototype.then
// * 接受两个参数
// * 参数1： 异步回调成功的时候调用
// * 参数2： 异步回调失败的时候调用
// * 写个例子

var p3 = new Promise(function(resolve, reject) {
    resolve('p3 成功')
})
p3.then(function succ() {
    console.log("p3 then 成功!")
}, function fail() {
    console.log("p3 then 失败!")
})

var p4 = new Promise(function(resolve, reject) {
    reject("失败了!")
})
p4.then(function succ() {
    console.log("p4 then 成功!")
}, function fail() {
    console.log("p4 then 失败!")
})

// 小技巧
setTimeout(function() {
    console.log(1);
  }, 0); // 下轮事件执行
  
  new Promise(function (resolve, reject) {
    resolve(2);
  }).then(console.log); // 异步，本轮事件执行
  
  console.log(3); // 同步，最先执行
  // 321



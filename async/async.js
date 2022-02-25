// async.js
// 异步操作

//var $
//$ = require('jquery')

// 背景知识：JavaScript是单线程模型，只在一个线程上运行
// * 同步任务(synchronous)
// * 异步任务(asynchronous)
// JavaScript引擎怎么知道异步任务没有结果：循环检查，也就是event-loop

// 回调函数
function callback() {
    console.log("callback...")
}

function f(ck) {
    ck()
} 
f(callback) // "callback..."

// 事件监听
// * jQuery的写法
// * 优点：可以绑定多个回调函数，去耦合(decoupling)
// * 缺点：整个程序都是事件驱动，运行流程会变得不清晰
function f1() {
    setTimeout(function(){
        //f1.trigger('done')
    }, 1000)
}
//f1.on('done', function() {
    //...
//}) 

f1()

// 发布/订阅
// * 信号中心“发布”(publish)一个信号
// * 任务可以像信号中心“订阅”(subscribe)一个信号
// * 这就是“发布/订阅模式”(public-subscribe pattern) 又称“观察者模式”(observer pattern)
// * 以jquery为例子
/*
function f2() {
    console.log("f2...")
}

function f3() {
    console.log("f3...")
}
// 订阅
$.subscribe('done', f2)
$.subscribe('done', f3)

// 发布
setTimeout(function(){
    $.publish('done')
}, 1000)
*/
// 看这篇文章
// https://lowbrowcoder.wordpress.com/2015/02/16/pubsub-pattern-in-javascript/
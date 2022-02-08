# [JavaScript教程(阮一峰)](https://wangdoc.com/javascript)


## 基础概念

***JavaScript是一种嵌入式语言，语言本身提供的核心语法不多，且并不提供I/O相关API，需要靠宿主环境(Host)提供支持。***

### 浏览器宿主环境提供的额外API分类：

- 浏览器控制类：操作浏览器
- DOM类：操作网页的各种元素
- Web类：实现互联网的各种功能

### 本材料学习四个部分：
- 基本语法
- 标准库
- 浏览器API
- DOM

### JavaScript应用领域:
- 浏览器平台化
- NodeJS
- 数据库操作
- 移动平台开发: PhoneGap, Inoic etc.
- 内嵌脚本语言: Acrobat, Gnome3
- 跨平台应用:Electron

### JavaScript容易学习特点：
- 学习环境无处不在，电脑只要有浏览器和文本编辑器就可以学习
- 语法简单，同时语法也杂乱
- 语法与主流语言相似，同时也存在设计缺陷，代替语言CoffeeScript, TypeScript, Dart

### JavaScript特点：
- 强大的性能
    - 语法灵活，表达力强：过程式，函数式都支持
    - 支持编译运行，还有WebAssembly加持
    - 事件驱动(event-driven)和非阻塞式(non-blocking)设计
- 开放性
- 社区支持

<br>

**Jeff Atwood定律：所有可以用JavaScript编写的程序，最终都会出现JavaScript版本**

<br>

## 浏览器打开开发环境写一段Hello World
<br>

1. 打开Chrome/Microsoft Edge浏览器
2. 快捷键Ctrl + Shift + j
3. 输入代码如下及输出结果，如下图:
```
    function greeting(name) {
        console.log("Hello " + name)
    }

    greeting("Joe")
```

![Snipaste_2022-02-08_17-07-56.png](https://s2.loli.net/2022/02/08/ftzm9gpubrSUq5R.png)

## 扯一点历史

- JavaScript和Java的关系
    
    ***记住，没什么关系!!***

- JavaScript与ECMAScript的关系

    ***ECMAScript是标准，JavaScript是标准的一种实现***



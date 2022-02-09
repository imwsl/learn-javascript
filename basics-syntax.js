// basics-syntax.js
// 基础语法

// 这是一行注释
/*
  这个地方可以写多行注释
  这也是一行注释
*/

// 语句
// var声明了变量a，1+3叫做表达式，计算完之后返回赋值给a
// 分号表达语句的结束
var a = 1 + 3;
console.log("a is " + a);

// 变量
// var声明b是一个变量，b与99建立了引用关系
// 注意!! JavaScript区分大小写，b与B是两个不同的变量
var b = 99;
b = 199; // b已经声明了，可以多次赋值
var B = 299;
console.log("变量b = " + b)
console.log("变量B = " + B)

var c; // c是一个undefined
console.log("c是一个undefined: " + c)

d = 99; // 可以不写var命令，这句话也是有效的

//console.log("e没有声明，则提示(ReferenceError: e is not defined): " + e);

///===================================================================
///
/// 变量提升
/// 这段代码可以正常运行且输出结果是33，因为JavaScript引擎的工作方式是先解析
/// 代码，获取所有的被声明的变量，然后再一行一行的运行，这样做的结果就是所有的
/// 变量都会提升到代码头部，专业术语叫变量提升(hoisting)

/// 补充说明：这种语法在c/Java/go中会直接报错，这也是JavaScript的很糟糕的一点
console.log(f);
var f = 33;

/// 这段代码的输出为undefined, 因为g已经在头部声明了但没有赋值
var g;
console.log(g);
g = 1;

///===============================================================
///
/// 标识符
/// 第一个字符，可以是任意的Unicode字母，以及美元符号$和下划线_,但不能用
/// 数字，星号，加减号，
/// 第二个字符以及后面的字符，除了Unicode字母，美元符号和下划线，还可以用0-9
///
/// 合法标识符，甚至可以用汉字
var arg0 = 0;
var _tmp;
var $goods;
var 临时=99;

/// 非法标识符
/// 1a
/// 23
/// **
/// a+b
/// -d

/// JavaScript保留字不能用标识符
/// arguments, break, case, catch, class, const, continue, debugger, default, delete,
/// do, else, enum, eval, export, extends, false, finally, for, function, if, implements, import, in, instanceof, interface, let, new, null, package, private, protected, public, return, static, super, switch, this, throw, true, try, typeof, var, void,while,with, yield
/// 记不住没关系，如果输入了大部分编辑器orIDE都会提示错误

/// 这是单行注释
/*
  这是
  多行
  注释
*/
/// <!-- --> 兼容HTML的注释，多行注释
/// --> 行首，单行注释
var h = 1; <!-- h = 2;-->
--> h = 3;
console.log(h);1

var i = 23
--> i=32 // 单行注释          
console.log(i);

/// 这种情况下, k --> 20 会被认为是k-- > 20
/// 注意!! 这是JavaScript语法中比较糟糕的一部分,很容易写出可以执行但语义模糊的代码
///
var k = 33;
if (k --> 20) {
    console.log(k)
}

///=============================================================
/// 区块
/// JavaScript中区块对于var命令不构成单独的作用域,因此下面语句依旧可以输出
{
    var l = 23;
}
console.log(l)

///==============================================================
/// 条件语句
///
/// if 略
/// if...else 略
/// switch...case 略
/// 三元运算符 ?: 略
/// while 略
/// do...while 略
/// for循环 略
/// break, continue 略
/// 以上语法与大多数语言语法一致,特别是c语言

/// 标签 label
/// 标签可以是任意的标识符,但不能是保留字,通常和break和continue配合使用
/// Label一般配合for do..while一起执行
/// 如下图代码 break top的意思是跳出top代码块
/// continue top是继续执行top代码块
var m = 0;
top:
for(;;) {
    m = m + 1;
    if (m < 5) {
	continue top;
    } else {
	break top;
    }
}

console.log("m is " + m)

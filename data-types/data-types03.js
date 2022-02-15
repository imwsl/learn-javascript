// data-types.js
// 数据类型
//
// ============================================
// 字符串与数组
//
var s = 'hello';
console.log(s[0]); // "h"
console.log(s[1]); // "e"
console.log(s[4]); // "o"
console.log(s[7]); // undefined 超出字符串索引or方括号里面不是数字都返回undefined

// length属性
console.log(s.length) // 5 且length属性无法修改

// Base64转码
// JavaScript提供原生的Base64编码转化
// * btoa(): 任意值转化为Base64编码
// * atob(): Base64编码转为原来的值
var str = "Hello World";
var b64_str = btoa(str);
console.log(b64_str)
var str_b64 = atob(b64_str)
console.log(str_b64)

// 注意 btoa() atob() 不支持非ASCII字符编码
// 如果非要支持非ASCII字符编码，需要使用转码，如下
function b64Encode(str) {
	return btoa(encodeURIComponent(str));
}

function b64Decode(str) {
	return decodeURIComponent(atob(str));
}

var str1 = "Hello，世界!!";
var b64_str1 = b64Encode(str1);
console.log(b64_str1);
console.log(b64Decode(b64_str1));

// encodeURIComponent : 字符串作为URI组件进行编码
// decodeURIComponent : URI字符串编码解码
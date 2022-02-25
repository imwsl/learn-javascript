// object.copy.js
//

// 对象的拷贝
// * 确保拷贝后的对象，与原对象具有同样的原型
// * 确保拷贝后的对象，与原对象具有同样的实例属性

function copyOwnPropertiesFrom(target, source) { // 拷贝属性
    Object.getOwnPropertyNames(source)
    .forEach(function (propKey){
        var desc = Object.getOwnPropertyDescriptor(source, propKey)
        Object.defineProperty(target, propKey, desc)
    });
    return target;
}

function copyObject(orig) {
    var copy = Object.create(Object.getPrototypeOf(orig)) // 获取prototype
    copyOwnPropertiesFrom(copy, orig)
    return copy
}

// 还有一种写法
function copyObject2(orig) {
    return Object.create(
        Object.getPrototypeOf(orig), // prototype
        Object.getOwnPropertyDescriptors(orig) //descriptors
    )
}

// * 遗留问题：关于对象的深拷贝，浅拷贝需要后续重新研究

// 1. 普通惰性单例(非闭包和匿名函数实现)
let Singleton1 = function (name){
    this.name = name
    this.instance = null
}

Singleton1.prototype.getName = function (){
    console.log(this.name)
}

Singleton1.getInstance = function (name){
    if (! this.instance){
        this.instance = new Singleton1(name)
    }
    return this.instance
}

let a1 = Singleton1.getInstance('instance name 1')
let b1 = Singleton1.getInstance('instance name 2')
console.log(a1 === b1)

// 2. 普通惰性单例(闭包和匿名函数实现)
let Singleton2 = function (name) {
    this.name = name
}

Singleton2.prototype.getName = function (){
    console.log(this.name)
}

Singleton2.getInstance = (function () {
    let instance = null
    return function (name) {
        if (! instance){
            instance = new Singleton2(name)
        }
        return instance
    }
})()

let a2 = Singleton2.getInstance('1')
let b2 = Singleton2.getInstance('2')
console.log(a2 === b2)

// 1、2的问题:不透明性，不能直接使用new，用户必须知道这是一个单例类

// 3. 透明单例，返回一个构造函数，在该构造函数中进行判断
// 闭包+立即执行函数
let Singleton3 = (function () {
    let instance;
    let Singleton = function (name){
        if (instance)return instance
        this.init(name)
        return instance = this
    }
    Singleton.prototype.init = function (name) {
        this.name = name
    }
    Singleton.prototype.getName = function () {
        console.log(this.name)
    }
    return Singleton
})()
let a3 = new Singleton3('1')
let b3 = new Singleton3('2')
console.log(a3 === b3)

// 3存在如果要不单独使用单例，而是可以使用普通方法，则代码复用不太好
// 4. 使用代理类
let Singleton4 = function (name){
    this.init(name)
}
Singleton4.prototype.init = function (name) {
    this.name = name
}
Singleton4.prototype.getName = function () {
    console.log(this.name)
}
let ProxySingleton = (function () {
    let instance;
    return function (name) {
        if (!instance)return instance =  new Singleton4(name)
        return instance
    }
})()
let a4 = new ProxySingleton('1')
let b4 = new ProxySingleton('2')
console.log(a4 === b4)

// 5. 通用惰性单例
let getSingle = function (fn) {
    let result;
    return function () {
        return result || (result = fn.apply(this, arguments))
    }
}

// 6. 单例的其它场景: 由于单例创建的对象只执行一次，所以用来执行只需要执行一次的函数，例如绑定事件
let bindEvent = getSingle(function () {
    console.log("bind event...")
    return this
})

let render = function () {
    console.log("render...")
    bindEvent()
}

render()
render()
render()

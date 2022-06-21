let Singleton2 = function (name) {
    console.log('create')
    this.name = name
}


Singleton2.getInstance = (function () {
    let instance = new Singleton2('has create')
    return function () {
        return instance
    }
})()

let a2 = Singleton2.getInstance()
let b2 = Singleton2.getInstance()
console.log(a2 === b2)

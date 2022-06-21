// main2.js
import Singleton from './singleton.js'
Singleton.method1()
Singleton.method2()
console.log(Singleton.method.time)
console.log(Singleton.method.name)
Singleton.method.getTime('main3')
console.log(Singleton.method.name)
Singleton.method.getTime('main4')
console.log(Singleton.method.name)

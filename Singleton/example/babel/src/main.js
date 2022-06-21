// main.js
import Singleton from './singleton.js'
Singleton.method1()
Singleton.method2()
console.log(Singleton.method.time)
console.log(Singleton.method.name)
Singleton.method.getTime('main1')
console.log(Singleton.method.name)
Singleton.method.getTime('main2')
console.log(Singleton.method.name)

// singleton.js
const somePrivateState = [
    "state"
]
function privateMethod () {
    console.log("privateMethod")
}

function Obj(){
    this.index = 0
    this.time = new Date()
    this.name = ''
}

Obj.prototype.getTime = function (name) {
    console.log(this.index)
    this.name = name
    this.index  = this.index + 1
}
let obj = new Obj()

export default {
    method1() {
        console.log("method1")
    },
    method2() {
        console.log("method2")
    },
    method: obj
}

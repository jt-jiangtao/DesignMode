"use strict";
class Invoker {
    constructor(cmd) {
        this.cmd = cmd;
    }
    action() {
        this.cmd.execute();
    }
}
class Receiver {
    action() {
        console.log("action...");
    }
}
class ConcreteCommand {
    constructor() {
        this.receiver = new Receiver();
    }
    execute() {
        this.receiver.action();
    }
}
// ----------------------
let cmd = new ConcreteCommand();
let invoker = new Invoker(cmd);
invoker.action();

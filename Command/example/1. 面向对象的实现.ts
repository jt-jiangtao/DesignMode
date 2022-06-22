class Invoker{
    private cmd : ICommand;

    public constructor(cmd : ICommand) {
        this.cmd = cmd
    }

    public action() : void {
        this.cmd.execute()
    }
}

class Receiver{
    public action(): void{
        console.log("action...")
    }
}

interface ICommand {
    execute: Function
}

class ConcreteCommand implements ICommand {
    private receiver : Receiver = new Receiver()

    execute() {
        this.receiver.action()
    }
}

// ----------------------
let cmd : ICommand = new ConcreteCommand()
let invoker : Invoker = new Invoker(cmd)
invoker.action()

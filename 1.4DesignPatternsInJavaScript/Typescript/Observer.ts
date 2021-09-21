
type InternalState = {
    event: String
}

abstract class Observer { 
    abstract update(state:InternalState): void 
} 


abstract class Observable {

    protected observers: Observer[] = [] //the list of observers
    protected state:InternalState = { event: "" } //the internal state observers are watching

    public addObserver(o:Observer):void {
        this.observers.push(o)
    }
    
    protected notify() {
        this.observers.forEach( o => o.update(this.state) )
    }
}

//Actual implementations
class ConsoleLogger extends Observer  {

    public update(newState: InternalState) {
        console.log("New internal state update: ", newState)
    }
}

class InputElement extends Observable {

    public click():void {
        this.state = { event: "click" }
        this.notify()
    }

}

const input = new InputElement()
input.addObserver(new ConsoleLogger())

input.click()

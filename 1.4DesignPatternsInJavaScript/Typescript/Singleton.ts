
//Simulate a database connectino class
class MyDBConn {

    protected static instance: MyDBConn | null = null
    private id: number = 0

    constructor() {
        //... db connection logic
        this.id = Math.random() //the ID could represent the actual connection to the db
    }
    
    public getID(): number {
        return this.id
    }

    public static getInstance(): MyDBConn {
        if(!MyDBConn.instance) {
            MyDBConn.instance = new MyDBConn()
        }
        return MyDBConn.instance
    }
}


const connections = [
    MyDBConn.getInstance(),
    MyDBConn.getInstance(),
    MyDBConn.getInstance(),
    MyDBConn.getInstance(),
    MyDBConn.getInstance()
]

connections.forEach( c => {
    console.log(c.getID())
})

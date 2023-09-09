//Quick review on this keyword 
//DOcs https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this

function profit(){
    return this.revenue - this.expenses   
}
const tacoTruck = {
    name: "taco truck",
    revenue: 300,
    expenses: 175,
    profit: profit
}

const lemonadeStand = {
    name: "lemonade stand",
    revenue: 8712,
    expenses: 123,
    profit: profit
}

// debugger
console.log("taco truck", tacoTruck.profit())
console.log("lemonade stand", lemonadeStand.profit())

//create blueprint of a foodvendor
//name, rev, expesns
class FoodVendor{
    //initialzie a new food vendor
    //abbreviated ctor
    //order of our properties in constructor matters
    constructor(name, revenue, expenses){
        //set my instance's properties to waht ctor had
        this.name = name;
        this.revenue = revenue;
        this.expenses = expenses;
    }

    //class method still a function
    profit(){
        //calc the instances profit
        return this.revenue - this.expenses   
    }
}
console.log(FoodVendor)

let tt = new FoodVendor("Taco Truck", 300, 175)
console.log(tt, "profit " + tt.profit())

//Create a class for car
class Car{
    //called when intializing a class instance with new
    constructor(make, model, color,price){
        this.make = make;
        this.model = model;
        this.color = color

        //in real-world our developers decided car must have price, don't create cars without
        if(price === undefined){
            throw new Error("You must give a price")
        }
        this.price = price// can be constant 0 but we dont want to sell cars for free
        //define as many as you want
    }
}


//create cars
let newJag = new Car("Jaguar", "Turbo XE", "Black",60000)
console.log(newJag)

let newEvo = new Car("Mitsubishi", "Evo Lancer", "Hunter Green",0)
console.log(newEvo)

//create a tesla
// debugger
let newTesla = new Car("Tesla", "Model S", "Blue",87000)
console.log(newTesla)








//We do - practice together
// 4-6 of lesson companion https://digitalskills.instructure.com/courses/10576/pages/lesson-companion-js-5-classes-properties-and-methods?module_item_id=1426882

//what is wrong with this class?
class Fruit {
    //remember to put properties in ctro
    constructor(name,color) {
        this.name = name;
        this.color = color;
    }
}

let banana = new Fruit("banana", "yellow");
console.log(banana);

//Why do I get an error?
class Elevator {
    constructor() {
        this.floor = 1;
    }
    
    goUp() {
        //make sure to only affect the data we want
        //floor is a propetry of class use this to access
        this.floor += 1;
        console.log(
            "Going up to floor " + this.floor
        );
    }

    goDown() {
        this.floor -= 1;
        console.log(
            "Going up to floor " + this.floor
        );
    }
}
//use dbgr to step throguh code
// debugger

//Test case #1
let elevator = new Elevator();
elevator.goUp();
elevator.goUp();
elevator.goDown();
//output after your tests
console.log(elevator);


//Why won't it create my class?

//be careful about syntax
class TV{
    constructor(size, brand) {
        this.size = size
        this.brand = brand
    }
} 

let myTV = new TV("big", "Sony")
console.log(myTV)


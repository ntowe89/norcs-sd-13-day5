// Add a new class named Vehicle to the file.
// Add a constructor.
// Add five properties that show the different aspects of the vehicles.
// make, model, color, price, etc
// Add methods to three properties that extend the functionality of those vehicles.
//What can a car do?
//drive
//stop
//start / turn on / turn off

class Vehicle{
    constructor(make, model, color, price, miles, gear, running){
        this.make = make;
        this.model = model;
        this.color = color;
        this.price = price;
        this.miles = miles;
        this.gear = gear;
        this.running = running;
    }
    //start the vehicle
    turnOn(running){
        if(this.running == false){
            console.log(this.model + ' ' + 'is turning on!')
            this.running = true
        }
        else{
            console.log(this.model + ' ' + 'is already running!')
        }

    }
    //shutdown the vehicle
    turnOff(running){
        if(this.running == true){
            console.log(this.model + ' ' + 'is turning off!')
            this.running = false
        }
        else{
            console.log(this.model + ' ' + 'is already off!')
        }

    }
    //putting vehicle into drive
    drive(gear){
        if(this.gear == 'park'){
            console.log('Shifting ' + this.model + ' into drive!')
            this.gear = 'drive'
        }
        else{
            console.log(this.model + ' is already in drive!')
        }
    }
    //putting vehicle into park
    park(gear){
        if(this.gear == 'drive'){
            console.log('Putting '+ this.model + ' into park!')
            this.gear = 'park'
        }
        else{
            console.log(this.model + ' is already in park!')
        }
    }



}

let sonata = new Vehicle('Hyundai', 'Sonata', 'White', 25100, 0, 'park', false)
let elantra = new Vehicle('Hyundai', 'Elantra', 'black', 20950, 0, 'park', false)
let ioniq5 = new Vehicle('Hyundai','IONIQ5','red', 41450, 0, 'park', false)

console.log(sonata)
console.log(elantra)
console.log(ioniq5)

//testing turrn on
console.log(sonata.running)
sonata.turnOn()
console.log(sonata.running)
sonata.turnOn()

//testing turn off
sonata.turnOff()
sonata.turnOff()
console.log(sonata.gear)

//testing drive
sonata.drive()
console.log(sonata.gear)
sonata.drive()

//testing park
sonata.park()
sonata.park()
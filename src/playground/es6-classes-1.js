class Person {
    constructor(name = 'Anonymous', age=0){    //default argument
        this.name = name;
        this.age = age
    }
    getGreeting(){
        return `Hi. I'm ${this.name}!`;
    }
    getDescription () {
        return `${this.name} is ${this.age} year(s) old.`
    }
}

class Student extends Person {
    constructor(name, age, major){
        super(name, age);        // super refers to parent class and if we call super() as function it calls to the constructor of parent class.
        this.major = major;
    }
    hasMajor () {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();
        
        if(this.hasMajor()) {
            description += ` Their major is ${this.major}.`;
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation
    }
    getGreeting() {
        let greeting = super.getGreeting();
        if(this.homeLocation){
            greeting += ` I'm visiting from ${this.homeLocation}`;
        }
        return greeting
    }
}




const me = new Traveler('Shikhar Rastogi', 20, 'Philadelphia')
console.log(me.getGreeting())

const other = new Traveler();
console.log(other.getGreeting())




// const me = new Student('Shikhar Rastogi', 20, 'Computer Science')
// console.log(me.hasMajor())
// console.log(me.getDescription())

// const other = new Student();
// // console.log(other.hasMajor())
// console.log(other.getDescription())



// const me = new Person('Shikhar Rastogi', 20)
// console.log(me.getGreeting())
// console.log(me.getDescription())

// const other = new Person();
// console.log(other.getGreeting())
// console.log(other.getDescription())


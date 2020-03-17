
class OldSyntax {
    constructor() {
        this.name = 'Mike';
        this.getGreeting = this.getGreeting.bind(this)
    }
    getGreeting() {
        return `Hi. My name is ${this.name}`;
    }
}

const oldSyntax = new OldSyntax();
const getGreeting = oldSyntax.getGreeting;
console.log(getGreeting());


//---------

class NewSyntax {
    name = 'Jen';
    getGreeting = () => {
        return `Hi. My name is ${this.name}`;       //for arrow function on class properties that (this) is class instance. 
    }
}

const newSyntax = new NewSyntax()
const newGetGreeting = newSyntax.getGreeting
console.log(newGetGreeting())

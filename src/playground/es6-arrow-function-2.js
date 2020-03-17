// with normal function

// const add = function (a,b) {
//     console.log(arguments)   // this will console all of the arguments passed in function call
//     return a + b
// }
// console.log(55, 3, 1001)


// arguments object - no longer bound with arrow functions
// const add = (a, b) => {
//     console.log(arguments)      // this will not work in arrow function
//     return a+b
// }
// console.log(55, 6)

// this keyword  - no longer bound

const user = {
    name: 'Shikhar',
    cities: ['Philadelphia', 'New York', 'Dublin'],

    printPlacesLived () {
        return this.cities.map((city) => { 
           // return city + '!'           // this will concatenate ! to every array elements and return new array
            return this.name + ' has lived in ' + city
        })
    }

    // printPlacesLived: function (){  // if we change it to arrow function then it fails to work
    //     this.cities.forEach((city) => {     //  if we change it to normal function then it fails to work and we have to make const that = this and then that.name will works
    //         console.log(this.name + ' has lived in ' + city)    // here also this refer to parent object 
    //     })
    // }

    // can also be written as: 
    // printPlacesLived () {
    //     this.cities.forEach((city) => { 
    //         console.log(this.name + ' has lived in ' + city) 
    //     })
    // }

}

// console.log (user.printPlacesLived())


const multiplier = {
    numbers: [1, 6],
    multiplyBy: 7,
    multiply () {
        return this.numbers.map((number) => number * this.multiplyBy )
    }
}

console.log(multiplier.multiply())
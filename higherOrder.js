let animals = [
    { name: 'Fluff', species: 'rabbit' },
    { name: 'Caro', species: 'dog' },
    { name: 'Hamilton', species: 'dog' },
    { name: 'Harold', species: 'fish' },
    { name: 'Ursula', species: 'cat' },
    { name: 'Jimmy', species: 'fish' }    
]


/*
    [].filter(...)
*/

// let isDog = function(animal) {
//     return animal.species === 'dog'
// }
let isDog = (animal) => animal.species === 'dog'

let dogs = animals.filter(isDog);
//let otherAnimals = animals.reject(isDog);  // Needs undescore.js

console.log(dogs)
//console.log(otherAnimals)


/*
    [].map(...)
*/

// let names = animals.map(function(animal) {
//     return animal.name + ' is a ' + animal.species
// })

let toName = (animal) => animal.name + ' is a ' + animal.species

let names = animals.map(toName)

console.log(names)


/*
    [].reduce(...)
*/

let orders = [
    { amount: 250},
    { amount: 400},
    { amount: 100},
    { amount: 325},
]

// let totalAmount = 0
// for ( let i = 0; i < orders.length; i++ ) {
//     totalAmount += orders[i].amount
// }

let fn = (all, item, index) => all + item.amount

let totalAmount = orders.reduce(fn, 0 )

console.log(totalAmount)

let users = [
    {name:"alex", email:"alex@1.com" , gender:"male" },
    {name:"chris", email:"chris@net.com" , gender:"male" },
    {name:"soph", email:"soph@test.com" , gender:"female" },
    {name:"greg", email:"greg@plop.net" , gender:"male" },
    {name:"nat", email:"nat@bloop.org" , gender:"female" }
]
// make an array containing the emails
let emails = users.reduce( function( all, item , index) {
    all.push({email : item.email, id: index})
    return all
} , [] )

console.log(emails)


// make an object containing two arrays of users, one for females and one for males

let result = users.reduce(function(all, item, index) {
    if(item.gender === "male" ) {
        all.males.push(item);
    } 
    if(item.gender === "female") {
        all.females.push(item);
    }
    return all;
},{males:[],females:[]})

console.log(result)





/*
    Object.create()
*/
console.log('********** Object.create() **********')
const food = {
    init: function(type) {
        this.type = type
    },
    eat: function() {
        console.log('you ate the ' + this.type)
    }
}

const waffle = Object.create(food)
const carrot = Object.create(food)

food.eat = function() {
    console.log('YOU TOTALY ATE THE '+ this.type.toUpperCase())
}

waffle.init('waffle')
waffle.eat()

carrot.init('carrot')
carrot.eat()

console.log('is waffle food ? => ', food.isPrototypeOf(waffle))


/*
    bind()
    Video Turorial : https://www.youtube.com/watch?v=PIkA60I0dKU [Fun Fun Function]
*/

console.log('********** bind() **********')

let dog = {
    sound: 'woof',
    talk: function() {
        console.log(this.sound)
    }
}

dog.talk()
let talkFunction = dog.talk
talkFunction() // in this context, 'this' is an empty object
                // thus, this.sound is undefined

let boundFunction = talkFunction.bind(dog) // now, this = dog
boundFunction()

//-

function talk(sound) {
    console.log(this.sound)
}

let boromir = {
    sound: 'One dies not simply walk into mordor'
}
let talkBoundToBoromir = talk.bind(boromir)

/*
    Object.setPrototypeOf(obj, parentObj)
    Video Tutorial : https://www.youtube.com/watch?v=YkoelSTUy7A [Fun Fun Function]
*/
console.log('********** Object.setPrototypeOf( obj, parent) **********')

let livingThing = {
    walk: function() {
        console.log('walking...')
    }
}

let human = {
    
    talk: function() {
        console.log('talking...')
    }
}

let doctor = {
    heal: function() {
        console.log('healing...')
    }
}

Object.setPrototypeOf(human,livingThing)
Object.setPrototypeOf(doctor,human)

doctor.heal()
doctor.talk()
doctor.walk()

/*
    class keyword
    the same as above but with classes instead of using Object.setPrototypeOf()
*/

console.log('********** class keyword **********')

class LivingThing {
    walk() {
        console.log('walking...')
    }
}

class Human extends LivingThing {
    constructor(name){
        super()
        this.name = name;
    }
    talk() {
        console.log('talking...')
    }
}

class Doctor extends Human {
    constructor( firstName, lastName ) {
        super(lastName)
        this.firstName = firstName
    }
    heal() {
        console.log('healing...')
    }
}


let mrSmith = new Doctor('Leonard', 'Smith')
console.log(mrSmith.firstName +' ' +mrSmith.name)
mrSmith.heal()
mrSmith.walk()
mrSmith.talk()



/*
    __proto__
    Video Tutorial : https://www.youtube.com/watch?v=DqGwxR_0d1M [Fun Fun Function]
*/

/*
    new Obj()
    Video Tutorial : https://www.youtube.com/watch?v=Y3zzCY62NYc
*/

console.log('********** new Obj() **********')

function Person(saying) {
    this.saying = saying
}

Person.prototype.talk = function() {
    console.log('I say: ', this.saying)
}

var crockforg = new Person('Semiconlans !!!1one1')
crockforg.talk()

/*
    Temporary tests
*/

console.log('********** Temporary tests **********')

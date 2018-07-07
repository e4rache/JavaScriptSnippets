class Animal {
    constructor(sound) {
        this.sound = sound;
    }
}


class Dog extends Animal {
    constructor() {
        super("woof");
        this.name = "Dog";
    }
}


let dog = new Dog();

console.log(dog.sound);
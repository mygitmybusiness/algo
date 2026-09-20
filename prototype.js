function Animal(name) {
    this.name = name
}

Animal.prototype.makeSound = function () {
    console.log(`The ${this.constructor.name} makes a sound`);
}

function Dog(name) {
    Animal.call(this, name);
}

Object.setPrototypeOf(Dog.prototype, Animal.prototype);
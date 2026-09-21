const FrameWireFaction = function (name, positionX, positionY) {
    this.health = 100,
    this.label = name,
    this.isDead = false,
    this.x = positionX,
    this.y = positionY,
    this.getPosition = () => {
        return [this.x, this.y]
    },
    this.move = (a, b) => {
        this.x += a;
        this.y += b;

        return this.getPosition();
    },
    this.heal = (amount) => {
        this.health += amount;
        if (this.health > 100) this.health = 100;
    }
    this.damage = (amount) => {
        this.healt -= amount;
        if (this.health <= 0) this.isDead = true;
    }
    this.onCreate = () => {
        console.log(this.label);
        return this;
    }
}

const unit = new FrameWireFaction("Marine Bob", 0, 0);
console.log(`UNIT CREATED: ${Object.getOwnPropertyNames(unit)}`);

console.log(unit.onCreate());

console.log(unit.move(1, 2));

const mike = new FrameWireFaction("Mike the Jagger", 5, -5);

console.log(mike.onCreate());

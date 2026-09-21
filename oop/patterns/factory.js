class Unit {
    constructor (label, position,) {
        this.label = label;
        this.x = position.x;
        this.y = position.y;
        this.movementPoints = 10;
    }
}

class Obstacle {
    constructor (label, position) {
        this.label = label;
        this.x = position.x;
        this.y = position.y;
        this.angle = 30;
    }
}

class EntityFactory {
    static createEntity(type, props) {
        switch(type.toLowerCase()) {
            case 'unit':
                return new Unit(props.label, props.position);
            case 'obstacle':
                return new Obstacle(props.label, props.position);
            default:
                throw new Erros(`You fucked up`);
        }
    }
}

const Marine = EntityFactory.createEntity('unit', {label: 'Greg', position: {x: 1.0, y: 2.0}});
const Box = EntityFactory.createEntity('obstacle', {label: 'Box', position: {x: 2.0, y: 4.0}});

console.log(Marine, Box);

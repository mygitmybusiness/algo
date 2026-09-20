class RangedWeapon {
    constructor (
        damageDealt,
        weight,
        reloadTime,
        ammoType,
        capacity
    ) {
        this.firepower = damageDealt;
        this.weight = weight;
        this.reloadSpeed = reloadTime;
        this.ammoType = ammoType;
        this.magCapacity = capacity;
        this.currentBullets = 0;

        this.reload();
    };

    reload() {
        return new Promise((resolve, reject) => {
            return setTimeout(() => {
                this.currentBullets = this.magCapacity;
                resolve("Reloaded!");
            }, this.reloadSpeed);
        });
    };

    async fireTheGun(target) {
        if (this.currentBullets === 0) {
            return await this.reload();
        }

        this.currentBullets--;

        if (!target) return "Miss";

        target.health -= this.firepower;

        return this.currentBullets;
    }
}


const machineGun = new RangedWeapon(33, 1, 5000, 2, 3);
console.log(machineGun)

const data = async () => {
    console.log(await machineGun.fireTheGun(null));
    console.log(await machineGun.fireTheGun(null));
    console.log(await machineGun.fireTheGun(null));
    console.log(await machineGun.fireTheGun(null));
};

data();





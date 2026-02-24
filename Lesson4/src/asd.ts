let megaNightHealth = 100;

class goblin {
    constructor(
        public name: string,
        protected healt: number,
        protected attackSpeed: number,
    ) {}

    attack() {
        megaNightHealth -= 20;
        console.log(`${this.name} аттаковал босса | Здоровье босса ${megaNightHealth}`);
    }
}

class miniPeka extends goblin {
    constructor (
        name: string,
        health: number,
        attackSpeed: number,
        private championHero: boolean,
    ) {
        super(name, health, attackSpeed);
    }

    attack() {
        megaNightHealth -= 100;
        console.log(`${this.name} аттаковал босса | Здоровье босса ${megaNightHealth}`);
    }
}

const arr: goblin[] = [new goblin('goblin', 50, 80), new miniPeka('miniPeka', 80, 50, true)];

for (const hero of arr) {
    hero.attack();
    console.log(megaNightHealth); 
}

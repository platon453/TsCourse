/*


let bossHealth:number = 150

class Employee {
    constructor(
        public name: string,
        protected salary: number,
    ) {}

    work() {
        console.log(`${this.name} выполняет обычную работу`)
    }

    attack() {
        bossHealth -= 10;
    }

    getSalary() {
        return this.salary;
    }
}

class Manager extends Employee {
    
    constructor(
        name: string,
        salary: number,
        public teamSize: number,
    ) {
        // Передает аргументы в метод конструктора
        // родительского класса Employee 
        super(name, salary); 
        // Мы просто проиницализировали поля...
        
    }

    holdMeeting() {
        console.log(`${this.name} проводит совещание для ${this.teamSize}`);
        
    }

    attack() {
        bossHealth -= 140;
    }
}

const arr: Employee[] = [new Employee('Alex', 500), new Manager('Donald', 100, 9)];
console.log(arr);

for (const hero of arr) {
    hero.attack();
    console.log(bossHealth);
}

*/


abstract class Transport {
    constructor(
        public speed: number,
    ) {}

    abstract move(): void;

    stop() {
        console.log('Транспорт остановился');
    }
}

class Car extends Transport {

    move() {
        console.log(`Машина едет по дороге со скоросью ${this.speed} км/ч`);
    }
}

class Ship extends Transport {

    move() {
        console.log(`Корабль плывет со скоростью ${this.speed} км/ч`);
    }
}


const newCar = new Car(100);

newCar.move();
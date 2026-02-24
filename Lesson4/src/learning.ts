/*

class Employee {
    constructor(
        public name: string,
        protected salary: number
    ) {}

    work() {
        console.log(`${this.name} выполняет обычную работу...`);
    }
}

class Manager extends Employee {
    constructor(
        name: string,
        salary: number,
        public teamSize: number,
    ) {
        // super() вызывает конструктор родительского класса, 
        // передавая ему нужные параметры, 
        // и инициализирует свойства родительского класса в дочернем классе.
        super(name, salary);  
    }

    holdMeeting() {
        console.log(`${this.name} проводит совещание для ${this.teamSize} человек.`);
    }

    getSalary()  {
        console.log(`Зарплата работнка с именем: ${this.name} состовляет ${this.salary}$.`)
    }
}

// Создаем экземпляр нашего дочернего класса Manager
const manager = new Manager('Иван', 50000, 10);

manager.work();  // Вызываем метод родительского класса
manager.holdMeeting();  // Вызываем метод дочернего класса
manager.getSalary(); // Вызываем метод дочернего класса Manager который обращается к полю salary    

*/


/*

class Employee { // Родительский класс
    constructor(
        public name: string,
        protected salary: number,
        // Private дает менять только в родительском классе, 
        // а protected - во всех дочерних классах
    ) {}

    work() {
        console.log(`${this.name} выполняет обычную работу...`);
    }

    getsalary() {
        return this.salary;
    }
}

class Manager extends Employee { // Дочерний класс
    constructor(
        name: string,
        salary: number,
        public teamSize: number,
    ) {
        super(name, salary);
    }

    holdMeeting() {
        console.log(`${this.name} проводит совещание для ${this.teamSize} человек.`);
    }
}

const empl = new Manager('Иван', 50000, 10);
empl.work();  // Вызовет метод родительского класса
empl.holdMeeting();  // Вызовет метод дочернего класса

*/


abstract class Transport {
    constructor(
        public speed: number,

    ) {}

    // Что мы хотим видить в наших наследниках
    // AKA дочерних классах
    abstract move(): void;

    stop() {
        console.log('Транспорт остановился');
    }
}

class Car extends Transport {
    constructor(
        speed: number,
        public brand: string,
    ) {
        super(speed)
    }
    move() {
        console.log(`Машина едет по дороге со скоростью ${this.speed}км/ч.`)
    }
}

class Ship extends Transport {
    move() {
        console.log(`Машина едет по дороге со скоростью ${this.speed}км/ч.`)
    }
}

const myCar = new Car(100,'bmw');
myCar.move();
myCar.stop();
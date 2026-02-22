// Книга Алексадро швеца по патернам TypeScript


/*class User { 
    private name: string;
    private age: number;

    public constructor(userName: string, userAge:number) {
        this.name = userName;
        this.age = userAge;
    }
    // пишем метод класса
    public greet() {
        console.log(`Привет, я ${this.name}, мне ${this.age} лет.`)
    }

}

const alex = new User('Alex', 25);
const vika = new User('Vika', 19)

// Обрщаемся к экземпляру класса alex
//alex.age = 100; 

// Вызываем метод
alex.greet();
vika.greet();

*/


interface IUser {
    name: string;
    age: number;
    sayHello(): string;

}

class User implements IUser {
    public name: string;
    public age: number

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    sayHello(): string {
        return `Привет, меня зовут ${this.name}`;
    }
}

class BankAccount {
    private balance: number;
    private owner: string;

    constructor(owner: string, balanse: number) {
        this.balance = balanse;
        this.owner = owner;
    }
    
    public deposit(amount: number) {
        if (amount <= 0) {
            console.log('Ошибка: Сумма должна быть больше нуля');
            return;
        }

        this.balance += amount;

        console.log(`${this.owner}, ваш счет пополнен на ${amount}.
            Текущий  баланс ${this.balance}`
        );
    }
    
    public withDraw(amount: number) {
        if (amount > this.balance) {
            console.log('Ошибка: Недостаточно средств');
            return;
        }

        this.balance -= amount;
        console.log(`Выданно: ${amount}. Остаток: ${this.balance}`)
    }
}

const myAccount = new BankAccount('Alex', 0);

myAccount.deposit(0);
myAccount.withDraw(200);
myAccount.deposit(1000);



// Что такое get set in TypeScript(пересмотреть лекцию)
/*

class Car {
    // Свойства или поля класса
    model: string;
    fuel: number;

    // Метод класса который вызывается когда мы 
    // создаем новый обьект этого класса с помощью ключевого слово new  
    constructor(model: string, fuel:number) {
        //Инициализация свойств через конструктор
        this.model = model;
        //Инициализация свойств через конструктор
        this.fuel = fuel;
    }

    // Метод drive, к которому мы можем обращаться где угодно 
    // (в пределах области видимости объекта)
    drive() {
        console.log(`${this.model} едет....`);
    }
}

// Мы сейчас создаем обьект на основе класса Car
// Или если правильно говорить создаем экземпляр класса Car
let car1 = new Car('BMW', 200); // создаем экземпляр класса Car
let car2 = new Car('YAZIK', 30); // создаем экземпляр класса Car

car1.drive(); // обращаемся к методу класса

car2.drive(); // обращаемся к методу класса



class PlayersInSmurfPool {
    nickName: string;
    mmr: number;
    games: number;

    constructor(nickName: string, mmr: number, games: number) {
        this.nickName = nickName; // Инициализация свойств через конструктор
        this.mmr = mmr; // Инициализация свойств через конструктор
        this.games = games; // Инициализация свойств через конструктор
    }

    smoorfPoolich() {
        console.log(`Привет уебок с ником: ${this.nickName} ты в смурфпуле, поздравляю))`);
    }
}


//Мы сейчас создаем обьект на основе класса PlayersInSmurfPool

let player1 = new PlayersInSmurfPool('skittles', 7000, 300);
console.log(player1);
player1.smoorfPoolich();

*/

/*

Пример как можно использовать опциональные типы через type

type EmailType = string | undefined;

class BankAccount {
    login: string;
    password: number;
    email?: EmailType;

    constructor(userLogin: string, userPassword: number, userEmail?: EmailType) {
        this.login = userLogin;
        this.password = userPassword;
        this.email = userEmail;
    }
}

let userPlaton = new BankAccount('Platon', 123213112);

console.log(userPlaton);

*/



/*

class User {
    private name: string;
    private age: number;

    public constructor(userName: string, userAge: number) {
        this.name = userName;
        this.age = userAge;
    }

    public sayWhatYourName() {
        console.log(`Привет я ${this.name}, мне ${this.age} лет`);
    }
}

const Platon = new User('Платон', 19);

Platon.name = 'Евгений'; 

Platon.sayWhatYourName();

*/




class BankAccount {
    private _owner: string;
    private _balance: number;

    // Добавили публичное поле walletName
    // Потому что в интерфейсе оно есть
    // А мы имплементируем наш класс от интерфейса
    public walletName: string;
    
    constructor(userOwner: string, userBalance: number, userWalletName: string) {
        this._balance = userBalance;
        this._owner = userOwner;
        this.walletName = userWalletName; // Инициализоровали поле walletName
    }

    public get balance() {
        return this._balance;
    }

    public get owner() {
        return this._owner;
    }

    public set balance(value: number) {
        if (value > 1000 || value < 0) {
            console.log('Ошибка: Устновки балланса');
            return;
        } 

        this._balance = value;
    } 
    
    public depocit(amount: number) {
        if (amount <= 0) {
            console.log(`Ошибка: Сумма должна быть больше 0`);
            return;
        }

        this._balance += amount;

        console.log(
            `${this._owner}, ваш счет пополнен на: ${amount} | Текущий баланс ${this._balance} | Публичное имя кошелька ${this.walletName}`
        ); // Добавили строчку про Публичное имя кошелька
    }

    public withDraw(amount: number) {
        if (amount > this._balance) {
            console.log('Ошибка: Недостаточно средств!');
            return;
        };

        this._balance -= amount;
        console.log(
            `Снято с баланса: ${amount} | Остаток ${this._balance}`
        );
    }
}
// И в созданном экземпляре класса добавили аргумент userWalletName
const myAccount = new BankAccount('Platon', 0, 'skittlesWallet');

// Обращаемся к public методам
myAccount.depocit(500);
myAccount.withDraw(200);
myAccount.depocit(1000);


//console.log(`НАПОМИНАЮ : что у кашелька с именем: ${myAccount.walletName} | Баланс: ${myAccount.balance} | Хозяин кошелька: ${myAccount.owner}`)

myAccount.balance = 10000000;

console.log(myAccount);








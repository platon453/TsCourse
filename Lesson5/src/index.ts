/*

class User {
    constructor(
        public name: string,
    ) {}
}

class UserRepository {
    save(user: User) {
        console.log(`Сохраняем нашего пользователя с именем ${user.name}`);
    }
}

class EmailService {
    sendWelcome(user: User) {
        console.log(`Отправляю на почту пользователю: ${user.name}`);
    }
}

const user = new User('Platon');
const emailService = new EmailService();
emailService.sendWelcome(user);

*/

/*


type TSize = 'L' | 'XL' | 'S' | 'M';

interface IItem {
    color: string;
    size: TSize;
}

interface ISpecification {
    isSatisfied(item: IItem) : boolean;
}

class color implements ISpecification {
    constructor(
        private color: string,
        
    ) {}

    isSatisfied(item: IItem): boolean {
        return item.color === this.color;
    }
}

class Size implements ISpecification {
    constructor(private size: TSize) {}

    isSatisfied(item: IItem): boolean {
        return item.size === this.size;
    }
}

class ProductFilter {
    filter(products: IItem[], spec: ISpecification) {
        return products.filter((product) => spec.isSatisfied(product));
    }
}

const cart = new ProductFilter();

const filteredCart = cart.filter([{color: 'red', size: 'L'}, {color: 'green', size: 'XL'}], new color('red'));

console.log(filteredCart);

*/


interface ILoger {
    log(msg: string): void;
}

class TestLogger implements ILoger {
    log(msg: string): void {
        console.log('TEST LOG:', msg);
    }
}

class ProductionLogger implements ILoger {
    log(msg: string): void {
        console.log('PRODUCTION LOG', msg);
    }
}

class Bot {
    constructor (
        private logger: ILoger
    ) {}

    onMessage(msg: string) {
        this.logger.log(msg);
    }
}

let bot: Bot;

if (process.env.PRODUCTION) {
    bot = new Bot(new ProductionLogger());
} else {
    bot = new Bot(new TestLogger());
}

bot.onMessage('PRODUCTION');
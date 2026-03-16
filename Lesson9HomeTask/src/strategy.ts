interface IDiscountStrategy {
    applyDiscount(amount: number):number;
}

class NoDiscount implements IDiscountStrategy {
    applyDiscount(amount: number): number {
        console.log(`На сумму ${amount} ваша скидка будет 0%`);
        return amount;
    }
}

class BlackFridayDiscount implements IDiscountStrategy {
    applyDiscount(amount: number): number {
        console.log(`Вы попали на черную пятницу, на сумму ${amount} ваша скидка будет 50%`);
        const discount = 50;
        return amount - (amount * discount / 100);
    }
}

class VipClientDicount implements IDiscountStrategy {
    applyDiscount(amount: number): number {
        console.log(`Вы наш vip клиент на вашу сумму ${amount} скидка будет 20%`);
        const discount = 20;
        return amount - (amount * discount / 100);
    }
}

class Cart {
    constructor(
        private _discountStrategy: IDiscountStrategy,
        private userName: string
    ) {}

    setDiscount(discount: IDiscountStrategy) {
        console.log('Мы поменяли скидку для пользователя на лету!')
        this._discountStrategy = discount;
    }

    checkout(amount: number) {
        console.log(`У пользователя ${this.userName} проводится вычет скидки на ${amount}`);
        const finalPrice = this._discountStrategy.applyDiscount(amount);
        console.log(`Финальная сумма к оплате: ${finalPrice}`);
    }
}

const clientCart = new Cart(new BlackFridayDiscount(), 'Platon');

clientCart.checkout(5000);

clientCart.setDiscount(new VipClientDicount());
clientCart.checkout(5000);

clientCart.setDiscount(new NoDiscount());
clientCart.checkout(5000);
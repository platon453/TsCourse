interface IPaymentStrategy {
    pay(amount: number): void;
}

class CryptoStrategy implements IPaymentStrategy {
    pay(amount: number): void {
        console.log(`Переводит ${amount} через криптосеть. Ждем подтверждение блоков...`);
    }
}

class PayPalStrategy implements IPaymentStrategy {
    pay(amount: number): void {
        console.log(`Списывает ${amount} с банковской кары. Ожидаем код из смс`)
    }
}

class CashStrategy implements IPaymentStrategy {
    pay(amount: number): void {
        console.log(`Пользователь сказал что эта скам платформа и он будет оплачивать сумму ${amount} ток налом`)
    }
}

class ProccesTransaktion {
    constructor(
        private _paymentStrategy: IPaymentStrategy,
        private user: string,
    ) {}

    public setStrategy(strategy: IPaymentStrategy) {
        console.log(`У пользователя ${this.user} возникла проблема с транзакцией`)
        this._paymentStrategy = strategy;
        console.log(`Пользователь ${this.user} поменял способ оплаты`)
    }

    public processPayment(amount: number) {
        console.log(`Пользователь ${this.user} инциировал опалуту...`);
        this._paymentStrategy.pay(amount);
    }
}

const testPayment = new ProccesTransaktion(new CryptoStrategy(), 'platon');
testPayment.processPayment(2000);

testPayment.setStrategy(new PayPalStrategy());
testPayment.processPayment(200000);

testPayment.setStrategy(new CashStrategy());
testPayment.processPayment(500000);
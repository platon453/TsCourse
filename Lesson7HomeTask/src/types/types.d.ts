export interface IPaymentProcessor {
    pay(amount: number): void;
}
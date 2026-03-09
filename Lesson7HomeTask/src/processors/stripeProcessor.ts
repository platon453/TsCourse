import { IPaymentProcessor } from "../types/types";

export class StripeProcessor implements IPaymentProcessor {
    public pay(amount: number): void {
        console.log(`Оплата ${amount} через Stripe (комиссия 2%)`);
    }
}
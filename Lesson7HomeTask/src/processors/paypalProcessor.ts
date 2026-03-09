import { IPaymentProcessor } from "../types/types";

export class PayPalProcessor implements IPaymentProcessor {
    public pay(amount: number): void {
        console.log(`Оплата ${amount} через PayPal (комиссия 5%)`);
    }
}
import { IPaymentProcessor } from "../types/types";

export abstract class PaymentGateway {
    abstract createProcessor(): IPaymentProcessor;

    public processOrder(amount: number) {
        const newProcessor = this.createProcessor();

        newProcessor.pay(amount);
    }
}
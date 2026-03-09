import { IPaymentProcessor } from "../types/types";
import { PaymentGateway } from "./abstractPaymentGateway";
import { PayPalProcessor } from "../processors/paypalProcessor";

export class PayPalGateway extends PaymentGateway {
    public createProcessor(): IPaymentProcessor {
        return new PayPalProcessor();
    }
}
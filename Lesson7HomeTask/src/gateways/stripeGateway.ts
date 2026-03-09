import { IPaymentProcessor } from "../types/types";
import { PaymentGateway } from "./abstractPaymentGateway";
import { StripeProcessor } from "../processors/stripeProcessor";

export class StripeGateway extends PaymentGateway {
    public createProcessor(): IPaymentProcessor {
        return new StripeProcessor();
    }
}

import { PaymentGateway } from "./gateways/abstractPaymentGateway";
import { PayPalGateway } from "./gateways/paypalGateway";
import { StripeGateway } from "./gateways/stripeGateway";

const checkout = (gateway: PaymentGateway, amount: number) => {
    console.log('Проводится оплата...')
    gateway.processOrder(amount);
}


checkout(new PayPalGateway(), 1000);
checkout(new StripeGateway(), 1000);
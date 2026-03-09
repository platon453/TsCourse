import { ITransport } from "../types/types";

export class Truck implements ITransport {
    public deliver(): void {
        console.log('Доставка на транспорте!');
    }
}
import { ITransport } from "../types/types";

export class Ship implements ITransport {
    public deliver(): void {
        console.log('Доставка на корабле!');
    }
}
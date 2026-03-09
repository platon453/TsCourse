import { ITransport } from "../types/types";

export class Plain implements ITransport {
    public deliver(): void {
        console.log('Доставка на самолете!');
    }
}
import { ITransport } from "../types/types";

export abstract class Logistics {
    // Мы заставим класс которые будем наследовать от Logistics
    // реализовать метод createTransport
    public abstract createTransport(): ITransport;

    // Реализуем бизнес логику
    public planDelivery() {
        const transport = this.createTransport();

        // Получаем доступ к методу dilever потому-что
        // abstract method возращат interface ITransport
        transport.deliver();
    }
}
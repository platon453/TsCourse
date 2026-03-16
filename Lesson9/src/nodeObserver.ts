import { EventEmitter } from "events";
import { Events } from "./typings/types";

const EventOrders = new EventEmitter();

// on подписываемся!
// emit оповещаем!

EventOrders.on('NEW_ORDER', (obj) => {
    // Записываем order в бд

    console.log('Получили заказ с даныыми', obj);
})

EventOrders.on('CANCEL_ORDER', (obj) => {
    // Записываем order в бд

    console.log('Отменили заказ с даныыми', obj);
})

class Order {
    // Инициализируем наш массив строк _logs
    private _logs: string[] = [];

    public createOrder(id: number) {
        this._logs.push(`Заказ усешно создан ${id}`);

        EventOrders.emit('NEW_ORDER', { id });
    }

    public cancelOrder(id: number) {
        this._logs.push(`Заказ с айди: ${id} отменен`);

        EventOrders.emit('CANCEL_ORDER', { id });
    }

    public getLogs() {
        return this._logs;
    }
}

const order = new Order();

order.createOrder(1);
console.log(order.getLogs());

order.cancelOrder(1);
console.log(order.getLogs());

order.createOrder(2);
console.log(order.getLogs());

order.createOrder(3);
console.log(order.getLogs());

order.createOrder(4);
console.log(order.getLogs());
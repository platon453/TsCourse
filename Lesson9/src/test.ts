import { EventEmitter } from "node:events";

const subscirbeInfo = new EventEmitter;

subscirbeInfo.on('SUBSCRIBE', (data) => {
    console.log('Записываем подписчика в БД в таблицу с данными', data);
})

subscirbeInfo.on('UNSUBSCRIBE', (data) => {
    console.log('Записываем чела кто отписался в БД в таблицу с данными', data);
})

class Subscribes {
    private _logs: string[] = [];

    public subscribe(id: number) {
        this._logs.push(`Подписчик с айди ${id} подписался на закрытый tgk`);
        subscirbeInfo.emit('SUBSCRIBE', { id });
    }

    public unSubscribe(id: number) {
        this._logs.push(`Подписчик с айди ${id} отписался от tgk`);
        subscirbeInfo.emit('UNSUBSCRIBE', { id });
    }
    
    public getLogs() {
        return this._logs;
    }
}

const infoAboutSubscriber = new Subscribes();

infoAboutSubscriber.subscribe(1);
infoAboutSubscriber.subscribe(2);
infoAboutSubscriber.subscribe(3);
infoAboutSubscriber.unSubscribe(1);

console.log(infoAboutSubscriber.getLogs());


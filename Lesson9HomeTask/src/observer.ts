interface IAdmin {
    subscribe(subscriber: ISubscriber): void;
    unsubscribe(subscriber: ISubscriber): void;
    publishNews(headline: string): void;
}

interface ISubscriber {
    update(news: string): void;
}

class TelegramBotSubscriber implements ISubscriber {
    public constructor(private userName: string) {}

    update(news: string): void {
        console.log(`Отпрвили рассылку новости: ${news}, пользователю: ${this.userName} в ТГ`);
    }
}

class WebsiteSubscriber implements ISubscriber {
    public constructor(private userName: string) {}

    update(news: string): void {
        console.log(`Отпрвили рассылку новости: ${news}, пользователю: ${this.userName} на ЛЕНДИНГ`);
    }
}

class NewsAgency implements IAdmin {
    private _subscribers: ISubscriber[] = [];

    subscribe(subscriber: ISubscriber): void {
        this._subscribers.push(subscriber);
        console.log('Пользователь успешно добавлен в БД');
    }

    unsubscribe(subscriber: ISubscriber): void {
        this._subscribers = this._subscribers.filter((sub) => sub !== subscriber);
        console.log('Подписчик удален из БД');
    }

    publishNews(headline: string): void {
        console.log('Агенство публикует ноовость!');

        for (const sub of this._subscribers) {
            sub.update(headline);
        }
    }
}

const agency = new NewsAgency;

const myUsers = [
    new TelegramBotSubscriber('Платон'),
    new TelegramBotSubscriber('Полина'),
    new WebsiteSubscriber('Виолетта'),
]

// ! убираю лишнюю заботу от TS
// он говорит "Я ПРИНИМАЮ ВСЮ ОТВЕТСТВЕННОСТЬ НА СЕБЯ. Я ГАРАНТИРУЮ, ЧТО ТУТ НЕ ПУСТО!"
agency.subscribe(myUsers[0]!); 
agency.subscribe(myUsers[1]!);
agency.subscribe(myUsers[2]!);

agency.publishNews('АААА ПРОГРАММИСТА НЕ НУЖНЫ ВСЕХ РОБОТЫ ЗАМЕНЯТ');

agency.unsubscribe(myUsers[2]!);

agency.publishNews('ПРОВЕРОЧНАЯ НОВОСТЬ ПРИЙДЕТ ЛИ ЮЗЕРУ НОВОСТЬ ПОСЛЕ ОТПИСКИ');
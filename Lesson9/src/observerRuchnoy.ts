interface ISubscriber {
    update(eventName: string, data: any): void;
}

interface IPublisher {
    subscribe(observer: ISubscriber): void;
    unsubscribe(observer: ISubscriber): void;
    notify(eventName: string, data: any): void;
}

class UserAuthService implements IPublisher {
    private _subscribes: ISubscriber[] = [];

    public subscribe(observer: ISubscriber): void {
        this._subscribes.push(observer);
    }

    public unsubscribe(observer: ISubscriber): void {
        this._subscribes = this._subscribes.filter((sub) => sub !== observer);
    }

    public notify(eventName: string, data: any): void {
        for (const sub of this._subscribes) {
            sub.update(eventName, data);
        }
    }

    public registerUser(username: string) {
        console.log(`Регистрирую пользователя ${username}`);

        // Сохранение в бд

        this.notify('USER_REGISTERED', { username });
    }
}

class EmailService implements ISubscriber {
    public update(eventName: string, data: any): void {
        if (eventName === 'USER_REGISTERED') {
            console.log(`Отправляю письмо для: ${data.username}`); // откуда тут .username
        }
    }
}

class BonusService implements ISubscriber {
    public update(eventName: string, data: any): void {
        if (eventName === 'USER_REGISTERED') {
            console.log(`Начисляю бонусы для: ${data.username}`); // откуда тут .username
        }
    }
}

class LoggerService implements ISubscriber {
    public update(eventName: string, data: any): void {
        if (eventName === 'USER_REGISTERED') {
            console.log(`Событие ${eventName} с данными `, data); 
        }
    }
}


const authSevice = new UserAuthService();

const emailService = new EmailService();
const bonusService = new BonusService();
const loggerService = new LoggerService();

for (const service of [
    emailService,
    bonusService,
    loggerService
]) {
    authSevice.subscribe(service);
}

authSevice.registerUser('Platon');
authSevice.unsubscribe;
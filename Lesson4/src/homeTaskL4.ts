//1

abstract class Notification {
    constructor(
        protected recipient: string,
    ) {}

    abstract send(message:string): void
}

class EmailNotification extends Notification {
    send(message:string) {
        console.log(`Отправка Email на ${this.recipient}: ${message}`);
    }
}

class SmsNotifications extends Notification {
    send(message: string) {
        if (message.length > 100) {
            console.log('Ошибка SMS слишком длинное');
        } else {
            console.log(`Отправка SMS на ${this.recipient}: ${message}`);
        }
    }
}

/*const emailMessage = new EmailNotification('Костя');
emailMessage.send('Привет меня зовут платон и я кручу возраст и опыт!');

const smsMessage = new SmsNotifications('Костя');
smsMessage.send('Hello!');*/

//2

const arr: Notification[] = [
    new EmailNotification('email@example.com'),
    new SmsNotifications('198231293819')
];

for (const Send of arr) {
    Send.send('Привет это тест!');
}
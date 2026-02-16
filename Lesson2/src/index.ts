    // interface User {
    //     name: string;
    //     age: number;
    //     email?: string;
    // }

    // interface ChangeRub {
    //     rate?: number;
    //     rubs: number;
    // }

    // const kursRup : ChangeRub = {
    //     rate: 80,
    //     rubs: 2000,
    // }

    // const convertRubToUsd = (obj: ChangeRub):number | string => {
    //     if (obj.rate) {
    //         return obj.rubs / obj.rate;
    //     } else {
    //         return 'Error';
    //     }
    // }

    // console.log(convertRubToUsd({rubs:80000}));


    // const alex: User = {
    //     name: 'Alex',
    //     age: 23,
    //     email: 'platon.fedotov97@mail.ru'
    // }

    // const printName = (user: User) => {
    //     console.log(`Ваш email: ${user.email}`);
    // }

    // printName(alex);

    // interface MailRecipient {
    //     email: string;
    //     displayName: string;
    //     message: string;
    // }

    // const sendEmail = (user: MailRecipient) => {
    //     console.log(`Hello, ${user.displayName}! Sending email to ${user.email}.....`);
    //     console.log(`Сообщение от ${user.displayName}: ${user.message}`);
    // }

    // const mail: MailRecipient = {
    //     email: 'platon.fedotov97@mail.ru',
    //     displayName: 'Anton',
    //     message: 'Привет я Антон',
    // }
    // sendEmail(mail);

    // interface ServerConfig {
    //     readonly port: number;
    //     readonly host: string;
    //     status: string;
    // }

    // const config: ServerConfig = {
    //     port: 3000,
    //     host: 'localhost',
    //     status: 'active',
    // }

    // config.status = 'stopped';

    // Что такое тайпы, почему они лучше интерфейсов в не которых моментах

    // type Status = string | number;

    // const status: Status = 'success';

    // interface Vehicle {
    //     brand: string;
    //     speed: number;
    //     isSuperCar: boolean;
    // };

    // interface Car extends Vehicle {
    //     isCabriolet: boolean;
    // }

    // interface Truck extends Vehicle {
    //     cargoOpacity: number;
    // }

    // const test1: Car | Truck = {
    //     brand: 'Audi',
    //     speed: 300,
    //     isSuperCar: false,
    //     isCabriolet: false,
    // }

// interface Enemy {
//     hp: number;
//     attack: number;
//     name: string;
// };

// interface Zombie extends Enemy {
//     sword: 'diamond' | 'iron'
// };

// interface Skeletone extends Enemy {
//     bow: 'wood' | 'emerald';
// }

// const zombie: Zombie = {
//     hp: 100,
//     attack: 20,
//     name: 'Zombie',
//     sword: 'diamond',
// }

// const skeletone: Skeletone  = {
//     hp: 100,
//     attack: 20,
//     name: 'Zombie',
//     bow: 'wood'
// }

interface DotaPlyesrs {
    id: number,
    name: string,
    mmr: number,
    matches: number,
    smurfpool: boolean,
    toxicInVoice?: boolean,
}

const skittlesPlayer: DotaPlyesrs = {
    id: 0,
    name: 'skittles',
    mmr: 7000,
    matches: 4000,
    smurfpool: true,
    toxicInVoice: false,
}

const astelPlayer: DotaPlyesrs = {
    id: 1,
    name: 'Morphey',
    mmr: 10000,
    matches: 8000,
    smurfpool: false,
    toxicInVoice: true,
}

console.log(`Привет, пользователь с id: ${skittlesPlayer.id}
Пользователя зовут ${skittlesPlayer.name}
Просматриваю его аккаунт...
Пользователь: ${skittlesPlayer.name} || его ммр: ${skittlesPlayer.mmr}
Проверяю аккаунт на смурф пулл...
А вижу: у пользователя ${skittlesPlayer.name} смурфпульный акк, показывает: ${skittlesPlayer.smurfpool}
Пошел нахуй гандон!`)
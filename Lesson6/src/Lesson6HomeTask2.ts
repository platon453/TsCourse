import dotenv from 'dotenv';

class ConfigService {
    // Создали сейф
    private static instance: ConfigService;
    
    private _config: dotenv.DotenvParseOutput;

    private constructor() {
        // Распарсили файл
        const cfg = dotenv.config();

        // Добавили проверки
        if (cfg.error) {
            throw new Error('Файл .env не найден');
        }

        if (!cfg.parsed) {
            throw new Error('Ваш .env файл пуст!');
        }

        // Проинициализировали поле
        this._config = cfg.parsed; 
    }

    public getNumber(key: string): number {
        const response = this._config[key];
        const stringToNumber = Number(response);    

        if (Number.isNaN(stringToNumber)) {
            throw new Error('Это не число')
        }

        return stringToNumber;
    }

    // Создаем того самого статичекого охраника
    public static getInstance(): ConfigService {
        if (!ConfigService.instance) {
            ConfigService.instance = new ConfigService();
            // Добавляем логи чтобы увидеть как это работает
            console.log('Экземпляр класса успешно создан!')
        } else {
            console.log('Экземпляр класса уже есть, используем созданный')
        }

        return ConfigService.instance;
    }

    // Создаем публичный метод для теста
    public get(key: string):string {
        const response = this._config[key];

        if (!response) {
            throw new Error(`Нет такого ключа как: ${key}`);
        }
        return response;
    }
}

class TgBot {
    public constructor() {}
    
    public run() {
        // В классе TgBot создаем экземпляр класса ConfigService через
        // static method getInstance(), должен вывести Экземпляр класса успешно создан!
        const config = ConfigService.getInstance();
        
        // Получаем токены и выводим 
        const token = config.get('TG_BOT_TOKEN');
        const port = config.getNumber('PORT');

        console.log(`Запускаю телеграмм бота на порту ${port}, с токеном ${token}`);
    }
}
const tgApp = new TgBot()
tgApp.run();

class MaxBot {
    public constructor() {}

    public run() {
        // В классе MaxBot создаем экземпляр класса ConfigService через
        // static method getInstance(), Экземпляр класса уже есть, используем созданный
        const config = ConfigService.getInstance();

        const token = config.get('MAX_BOT_TOKEN');
        const port = config.getNumber('PORT');

        console.log(`Запускаю телеграмм бота на порту ${port}, с токеном ${token}`);
    }
}

const maxApp = new MaxBot();
maxApp.run();
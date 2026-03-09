export class ConnectToDB {
    private static instance: ConnectToDB;
    
    private constructor() {
        console.log('Ты успешно подключен к БД!');
    }

    public static getInstance(): ConnectToDB {
        if (!ConnectToDB.instance) {
            ConnectToDB.instance = new ConnectToDB();
        } else {
            console.log('Подключение к БД уже есть!')
        }

        return ConnectToDB.instance;    
    }
    
    // Публичный метод для теста
    public query(sql: string) {
        console.log(`Выполняю запрос: ${sql}`);
    }
}

// Не могу создать ошибка ошибка
//const createExemplyar = new ConnectToDB();

// Через охраника могу
const dbConnect = ConnectToDB.getInstance();
// Ты успешно подключен к БД!
// Выполняю запрос: DROP DATABASE
dbConnect.query('DROP DATABASE'); 

const dbConnect2 = ConnectToDB.getInstance();
// Подключение к БД уже есть!
// Выполняю запрос: DROP TABLE
dbConnect2.query('DROP TABLE');

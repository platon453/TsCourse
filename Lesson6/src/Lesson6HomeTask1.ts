class LoggerService {
    private static instance: LoggerService;
    private _logs: string[];

    public static getInstance() {
        if (!LoggerService.instance) {
            LoggerService.instance = new LoggerService();
            console.log('Экзепляр класса успешно создан!')
        } else {
            console.log('Экземпляр класса уже есть, используем созданный');
        }
        return LoggerService.instance;
    }
    private constructor() {
        this._logs = [];
    }

    public log(message: string) {
        return this._logs.push(`[${new Date().toLocaleString()}] ${message}`);
        // Загуглил)
    }

    public getLogs() {
        return this._logs;
    }
}

const logMes1 = LoggerService.getInstance();
logMes1.log('asdasdadasd');
console.log(logMes1.getLogs());


const logMes2 = LoggerService.getInstance();
logMes2.log('второй месседж');
console.log(logMes2.getLogs());


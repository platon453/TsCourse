import { ICommand } from "../typings";
import { UserService } from "../structures/userService";

export class StartCommand implements ICommand {
    
    public nameCommand = '/start';
    constructor(private UserService: UserService) {};
    
    execute(): void {
        console.log(`Привет от бота, начинаем работу`);

        this.UserService.register();
    }
}
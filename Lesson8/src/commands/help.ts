import { ICommand } from "../typings";

export class HelpCommand implements ICommand {
    
    public nameCommand = '/help';
    execute(): void {
        console.log(`Введи любую команду: /start или /balance`);
    }
}
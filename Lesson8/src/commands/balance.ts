import { ICommand } from "../typings";
import { UserService } from "../structures/userService";

export class BalanceCommand implements ICommand {
    
    public nameCommand = '/balance';
    constructor(private UserService: UserService) {};
    
    execute(): void {
        this.UserService.showBalance();
    }
}
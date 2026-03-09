import { BalanceCommand } from "./commands/balance";
import { HelpCommand } from "./commands/help";
import { StartCommand } from "./commands/start";
import { Bot } from "./structures/client";
import { UserService } from "./structures/userService";


const userService = new UserService();
const bot = new Bot();

const commands = [
    new StartCommand(userService), 
    new BalanceCommand(userService), 
    new HelpCommand()
]

for (const command of commands) {
    bot.registerCommand(command);
}

bot.onMessage('/balance');




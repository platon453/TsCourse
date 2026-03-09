import { ICommand } from "../typings";

export class Bot {
    private commands: Map<string, ICommand> = new Map();

    registerCommand(command: ICommand) {
        this.commands.set(command.nameCommand, command);
    }

    onMessage(text: string) {
        const command = this.commands.get(text);

        if (command) {
            command.execute();
        } else {
            console.log('Неизвестаня комманда');
        }
    }
}

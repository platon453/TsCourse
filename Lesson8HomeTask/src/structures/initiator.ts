import { ICommand } from "../typings/types";

export class RemoteControl {
    private slots: Map<string, ICommand> = new Map();

    public setCommand(buttonId: string, command: ICommand) {
        this.slots.set(buttonId, command);
    }


    public pressButton(buttonId: string) {
        const command = this.slots.get(buttonId);

        if (command) {
            command.execute();
        } else {
            console.log('Такой комманды нет бро')
        }
    }
}
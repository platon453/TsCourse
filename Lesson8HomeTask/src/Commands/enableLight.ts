import { ICommand } from "../typings/types";
import { Light } from "../Devices/recipients";


export class LightOnCommand implements ICommand {
    constructor(private light: Light) {}

    public CommandName = '/enableLight';
    
    execute() {
        this.light.turnOn();
    }
}
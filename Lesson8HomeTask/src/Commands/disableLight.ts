import { ICommand } from "../typings/types";
import { Light } from "../Devices/recipients";


export class LightOffCommand implements ICommand {
    constructor(private light: Light) {}

    public CommandName = '/disableLight';
    
    execute() {
        this.light.turnOff();
    }
}
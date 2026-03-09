import { ICommand } from "../typings/types";
import { MusicPlayer } from "../Devices/recipients";

export class MusicStopCommand implements ICommand {
    constructor(private musicPlayer: MusicPlayer) {}

    CommandName = '/stopMusic';
    
    execute(): void {
        this.musicPlayer.stop();
    }
}
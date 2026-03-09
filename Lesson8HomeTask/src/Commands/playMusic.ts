import { ICommand } from "../typings/types";
import { MusicPlayer } from "../Devices/recipients";

export class MusicPlayCommand implements ICommand {
    constructor(private musicPlayer: MusicPlayer) {}

    CommandName = '/playMusic';

    execute(): void {
        this.musicPlayer.play();
    }
}
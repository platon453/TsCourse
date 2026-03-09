import { ICommand } from "../typings/types";

export class Light {
    public turnOn() {
        console.log('Лампочка ВКЛ');
    }

    public turnOff() {
        console.log('Лампочка ВЫКЛ')
    }
}

export class MusicPlayer {
    play() {
        console.log('Муызка ВКЛ');
    }

    stop() {
        console.log('Музыка ВЫКЛ');
    }
}

export class ClaudeCode {
    public start() {
        console.log(`Запустил нейроночку братиш ща будем вайбить`);
    }

    public stop() {
        console.log(`Бля братан токены закончились, пойду траву потрогаю...`);
    }
}


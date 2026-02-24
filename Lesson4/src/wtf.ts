class AudioPlayer {
    constructor(
        private _volume: number,
        public userName: string,

    ) {
        if (_volume < 0) {
            console.log(`Громкость пользователя: ${this.userName} меньше 0`);
            this._volume = 0;
            this.volumeInfo;
        } else if (_volume > 100) {
            console.log(`Громкость пользователя: ${this.userName} больше 100`);
            this._volume = 100;
            this.volumeInfo;
        } else {
            this._volume = _volume;
            this.volumeInfo;
        }
    }

    public get volumeInfo() {
        console.log(`Текущая громкость пользователя: ${this.userName} = ${this._volume}`);
        return; // нужен ли тут return?
    }

    public set volumeChanged(v:number) {
        if (v < 0) {
            console.log(`Громкость пользователя: ${this.userName} меньше 0`);
            this._volume = 0;
            this.volumeInfo;
        } else if (v > 100) {
            console.log(`Громкость пользователя: ${this.userName} больше 100`);
            this._volume = 100;
            this.volumeInfo;
        } else {
            this._volume = v;
            this.volumeInfo;
        }
    }

}

const music1 = new AudioPlayer(-12391283, 'Платон');

//usic1.volumeChanged = 20;


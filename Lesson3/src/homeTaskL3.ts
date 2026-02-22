//1

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

const music1 = new AudioPlayer(150, 'Платон');

music1.volumeChanged = 20;


//2

class Cart {
    constructor (
        private items: string[],
        public userName: string,
    ) {}

    addItem(item:string) {
        this.items.push(item);
        console.log(`Товар ${item} добавлен в корзину`);
        return this.items.length;
    }

    getItems() {
        console.log(`У пользователя: ${this.userName} в корзине: ${this.items}`);
        return this.items;
    }

    clearCart() {
        this.items.splice(0);
        console.log(`Коризна пользователя: ${this.userName} успешно очищена.`);
        return this.items;
    }
}

const platonCart = new Cart(['Iphone11', 'Iphone12'], 'Platon');

platonCart.getItems();
platonCart.addItem('MacBook');
platonCart.getItems();
platonCart.clearCart();
platonCart.getItems();






//1
type Level = 'junior' | 'middle' | 'middle+' | 'senior'

interface Developer {
    level: Level;
    login: string;
    skills: string[];
    isLookingForJob?: boolean;
}

const newDev: Developer = {
    level: 'middle+',
    login: 'skittles',
    skills: ['docker', 'TS', 'cluadeCode'],
    isLookingForJob: true,
};

//2
interface IProuduct {
    id: number;
    price: number;
    title: string;
}

interface ICartEntry {
    product: IProuduct;
    quantity: number;
}

// цена товар(IProduct.price) * количество(ICartEntry.quantity)

// const calculateTotal = (cart: ICartEntry[]):number => {
//     for (const total: number of IProduct)
// }

const calculateTotal = (cart: ICartEntry[]):number => {
    let total = 0;
    for (let item of cart) {
        total += item.quantity * item.product.price; 
        // сделал total += чтобы тотал не удалял старый товар!
        // а просто плюсовал второй
    }
    return total;
};

const userPlatonCart: ICartEntry[] = [
    {
        product: {id: 0, price: 3500, title: 'MacBookProM3PRO'},
        quantity: 3,
    },
    
    {
        product: {id: 1, price: 3500, title: 'Iphone17ProMax'},
        quantity: 1,
    }
];

const result = calculateTotal(userPlatonCart);
console.log(`Цена твоей корзины: ${result}`);
//1
const greet = (name: string):string => {
    return 'Hello, ' + name;
}
const resultGreet = greet('Kostya');
console.log(resultGreet);

// можно еще записать как
const greet1 = (name:string):string => 'Hello, ' + name
const reult1Greet = greet1('Kostya');
console.log(reult1Greet);

//2
const multiply = (a:number, b:number):number => {
    return a * b;
}
const resultMultiply = multiply(5, 5);
console.log(resultMultiply);

// так-же можно в одну строчку
const multiply1 = (a:number, b:number):number => a * b;
const resultMultiply1 = multiply1(5, 5);
console.log(resultMultiply1);

//3
const isAdult = (age:number):boolean => {
    return age >= 18;
}
const resultIsAdult = isAdult(17);
if (resultIsAdult === true) {
    console.log(`Ты проходишь тебе есть 18 лет!`)
} else {
    console.log(`Иди отсюда!`)
}

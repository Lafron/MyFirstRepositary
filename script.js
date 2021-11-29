let title="Calculator";
let screens="Простые, Сложные, Интерактивные";

let screenPrice="200$";
let rollback=20;
let fullPrice=220;
let adaptive=true;

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);


console.log(screens.length);

console.log("Стоимость верстки экранов: "+screenPrice+"$");
console.log("Стоимость разработки сайта: "+fullPrice+"$");

const lowScreens=screens.toLowerCase();
const arr=lowScreens.split(", ");

console.log(arr);

console.log(fullPrice * (rollback/100));
let title="Calculator";
let screens="Простые, Сложные, Интерактивные";

let screenPrice="200$";
let rollback=20;
let fullPrice=220;
let adaptive=true;

title=prompt("Как называется ваш проект?");
let sPrice;
do{
    sPrice=+prompt("Сколько будет стоить данная работа?");
    if(isNaN(sPrice)){
        alert("Введите валидное число!");
    }
}while(isNaN(sPrice));
screenPrice=sPrice;

adaptive=confirm("Нужен ли адаптив на сайте?");


let service1=prompt("Какой дополнительный тип услуги нужен?");
do{
    sPrice=+prompt("Сколько это будет стоить?");
    if(isNaN(sPrice)){
        alert("Введите валидное число!");
    }
}while(isNaN(sPrice));
let servicePrice1=sPrice;



let service2=prompt("Какой дополнительный тип услуги нужен?");
do{
    sPrice=+prompt("Сколько это будет стоить?");
    if(isNaN(sPrice)) {
        alert("Введите валидное число!");
    }
}while(isNaN(sPrice));
let servicePrice2=sPrice;


fullPrice=screenPrice+servicePrice1+servicePrice2;

let servicePercentPrice=fullPrice * (rollback/100);

console.log(Math.ceil(servicePercentPrice));

if((fullPrice>30000)||(fullPrice===30000)) {
    console.log("Даем скидку в 10%");
}
else if((fullPrice>15000)||(fullPrice===15000)) {
    console.log("Даем скидку в 5%");
}
else if(fullPrice>0) {
    console.log("Скидка не предусмотрена");
}
else {
    console.log("Что то пошло не так");
}

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
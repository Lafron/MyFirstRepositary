"use strict";
let title=prompt("Как называется ваш проект?","калькулятор");
let screens=prompt("Какие типы экранов нужно разработать?","Простые");

let rollback=20;

let screenPrice=+prompt("Сколько будет стоить данная работа?");

const adaptive=confirm("Нужен ли адаптив на сайте?");

let service1=prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1=+prompt("Сколько это будет стоить?");


let service2=prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2=+prompt("Сколько это будет стоить?");


let fullPrice=screenPrice+servicePrice1+servicePrice2;
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
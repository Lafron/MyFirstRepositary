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


const getAllServicePrices = function(){
    return servicePrice1+servicePrice2;
}; 

const allServicePrices = getAllServicePrices();

function getFullPrice(){
    return screenPrice + allServicePrices;
}

function getServicePercentPrices(){
    return fullPrice * (rollback/100);
}

let fullPrice = getFullPrice();
let servicePercentPrice = getServicePercentPrices();


const getTitle = function()
{
    let i=0;
    let firstLetter;
    do{
        firstLetter = title.substring(i,i+1).toUpperCase();
        i++;
    }while(firstLetter===" ");
    
    let nTitle = title.slice(i).toLowerCase();
    title = firstLetter+nTitle;
    return title;
};


function getRollbackMessage(){
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
}


function showTypeOf(arg){
    console.log(typeof arg);
}

console.log(screens.split(""));


showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);

console.log("Простые, Сложные, Интерактивные");

getRollbackMessage();
console.log(Math.ceil(getServicePercentPrices()));

// const lowScreens=screens.toLowerCase();
// const arr=lowScreens.split(", ");

// console.log(arr);

//console.log(servicePercentPrice);

//console.log(getTitle());
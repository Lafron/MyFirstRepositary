"use strict";
let title = prompt("Как называется ваш проект?","калькулятор");
let screens = prompt("Какие типы экранов нужно разработать?","Простые");

let rollback = 20;

let screenPrice =+ prompt("Сколько будет стоить данная работа?");

const adaptive = confirm("Нужен ли адаптив на сайте?");

let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 =+ prompt("Сколько это будет стоить?");

let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 =+ prompt("Сколько это будет стоить?");


const getAllServicePrices = function(){
    return servicePrice1+servicePrice2;
}; 

const allServicePrices = getAllServicePrices();

function getFullPrice(){
    return screenPrice + allServicePrices;
}

function getServicePercentPrices(){
    return fullPrice * (1 - rollback/100);
}

let fullPrice = getFullPrice();
let servicePercentPrice = getServicePercentPrices();


const getTitle = function()
{
    title = title.trim();
    let firstLetter;
    
    firstLetter = title.substring(0,1).toUpperCase();
        
    title = title.slice(1).toLowerCase();
    title = firstLetter + title;
    return title;
};


function getRollbackMessage() {
    if(fullPrice >= 30000) {
    console.log("Даем скидку в 10%");
}
else if(fullPrice >= 15000) {
    console.log("Даем скидку в 5%");
}
else if(fullPrice > 0) {
    console.log("Скидка не предусмотрена");
} 
else {
    console.log("Что то пошло не так");
}
}


function showTypeOf(arg, message) {
    console.log(message, typeof arg);
}

console.log("Значение переменной screens в виде массива: ",screens.split(" "));


showTypeOf(title, "Тип переменной title: ");
showTypeOf(fullPrice, "Тип переменной fullPrice: ");
showTypeOf(adaptive, "Тип переменной adaptive: ");

console.log("Тип экрана: ", screens);

getRollbackMessage();

console.log("Cтоимость за вычетом процента отката посреднику: ",
    Math.ceil(getServicePercentPrices()));

console.log(getTitle());
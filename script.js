"use strict";
let title = prompt("Как называется ваш проект?","калькулятор");
if(typeof title != String){
    title = title.toString();
}

let screens = prompt("Какие типы экранов нужно разработать?","Простые");
if(typeof screens != String){
    screens = screens.toString();
}

let rollback = 20;

let sPrice;
do {
    sPrice = prompt("Сколько будет стоить данная работа?");
    if(sPrice == null) {
        sPrice = 0;
    }
    else {
        sPrice = parseInt(sPrice.trim());
        if(isNaN(sPrice)||(sPrice<0)){
            alert("Введите валидное число!");
    }
}
}while(isNaN(sPrice)||(sPrice<0));
let screenPrice=sPrice;
//console.log(screenPrice);

//let screenPrice =+ prompt("Сколько будет стоить данная работа?");

let adaptive = confirm("Нужен ли адаптив на сайте?");
if(typeof adaptive != Boolean){
    adaptive = Boolean(adaptive);
}

let service1 = prompt("Какой дополнительный тип услуги нужен?");
if(typeof service1 != String){
    service1 = service1.toString();
}

let servicePrice1 = prompt("Сколько это будет стоить?");

let service2 = prompt("Какой дополнительный тип услуги нужен?");
if(typeof service2 != String){
    service2 = service2.toString();
}

let servicePrice2 = prompt("Сколько это будет стоить?");


const getAllServicePrices = function(){
    servicePrice1 = CheckPrice(servicePrice1, service1);
    servicePrice2 = CheckPrice(servicePrice2, service2);

    return +servicePrice1+servicePrice2;
}; 

function CheckPrice(price, serv)
{
    let servP = parseInt(price.trim());
    if ((isNaN(servP)||(servP<0)))
    {
        console.log("Введенное значение стоимости " + serv + " не является числом!");
        servP = 0;
    }
    return servP;
}
const allServicePrices = getAllServicePrices();

function getFullPrice(){
    return screenPrice + parseInt(allServicePrices);
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
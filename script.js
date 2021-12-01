"use strict";
let title = prompt("Как называется ваш проект?","калькулятор");
title = CheckString(title);

let screens = prompt("Какие типы экранов нужно разработать?","Простые");
screens = CheckString(screens);

let rollback = 20;

let screenPrice;
do {
    screenPrice = prompt("Сколько будет стоить данная работа?");
}while(CheckPrice(screenPrice) == 0);


let adaptive = confirm("Нужен ли адаптив на сайте?");
if(typeof adaptive != Boolean){
    adaptive = Boolean(adaptive);
}

function CheckString(str){
    if(str == null) {
        str = "";
    }
    else{
        if(typeof str != String){
            str = str.toString();
        }
    }
    return str;
}

const getAllServicePrices = function(){
    let service1 = prompt("Какой дополнительный тип услуги нужен?");
    service1 = CheckString(service1);

    let servicePrice1;
    servicePrice1 = priceTest(servicePrice1);

    let service2 = prompt("Какой дополнительный тип услуги нужен?");
    service2 = CheckString(service2);

    let servicePrice2;
    servicePrice2 = priceTest(servicePrice2);    

    return parseInt(servicePrice1) + parseInt(servicePrice2);
}; 

function priceTest(price){
    do{
        price = prompt("Сколько это будет стоить?");
    }while(CheckPrice(price) == 0);
    return price;
}

function CheckPrice(price)
{
    let servP;
    if(price == null) {
        servP = 0;
    }
    else{
        servP = parseInt(price.trim());
        
        if ((isNaN(servP)||(servP<0)))
        {
            alert("Введите валидное число!");
            servP = 0;
        }
    }
    return servP;
}
    
const allServicePrices = getAllServicePrices();

let fullPrice = getFullPrice();

function getFullPrice(){

    return parseInt(screenPrice) + allServicePrices;
}

function getServicePercentPrices(){
    return fullPrice * (1 - rollback/100);
}

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
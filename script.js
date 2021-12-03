"use strict";

const appData = {
    title: "",
    screens: "",
    rollback: 20,
    screenPrice: 0,
    adaptive: true,
    service1: "",
    servicePrice1: "",
    service2: "",
    servicePrice2: "",
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,

    asking: function(){
        appData.title = prompt("Как называется ваш проект?","калькулятор");
        appData.title = appData.CheckString(appData.title);

        appData.screens = prompt("Какие типы экранов нужно разработать?","Простые");
        appData.screens = appData.CheckString(appData.screens);

        do {
            appData.screenPrice = prompt("Сколько будет стоить данная работа?");
        }while(appData.CheckPrice(appData.screenPrice) == 0);


        appData.adaptive = confirm("Нужен ли адаптив на сайте?");
        if(typeof appData.adaptive != Boolean){
            appData.adaptive = Boolean(appData.adaptive);
        }

    },

    CheckString: str =>{
        if(str == null) {
            str = "";
        }
        else{
            if(typeof str != String){
                str = str.toString();
            }
        }
        return str;    
    },

    priceTest: price =>{
        do{
            price = prompt("Сколько это будет стоить?");
        }while(appData.CheckPrice(price) == 0);
        return price;
    },

    CheckPrice: function(price) {
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
    },

    getAllServicePrices: () =>{
        appData.service1 = prompt("Какой дополнительный тип услуги нужен?");
        appData.service1 = appData.CheckString(appData.service1);

        appData.servicePrice1 = appData.priceTest(appData.servicePrice1);

        appData.service2 = prompt("Какой дополнительный тип услуги нужен?");
        appData.service2 = appData.CheckString(appData.service2);

        appData.servicePrice2 = appData.priceTest(appData.servicePrice2);    

        return parseInt(appData.servicePrice1) + parseInt(appData.servicePrice2);
    },

    getFullPrice: () => parseInt(appData.screenPrice) + appData.allServicePrices,

    getServicePercentPrices: () => appData.fullPrice * (1 -appData.rollback/100),

    getTitle: function() {
        appData.title = appData.title.trim();
        let firstLetter;        
        firstLetter = appData.title.substring(0,1).toUpperCase();
        
        appData.title = appData.title.slice(1).toLowerCase();
        appData.title = firstLetter + appData.title;
        return appData.title;
    },

    getRollbackMessage: function() {
        if(appData.fullPrice >= 30000) {
            console.log("Даем скидку в 10%");
        }
        else if(appData.fullPrice >= 15000) {
            console.log("Даем скидку в 5%");
        }
        else if(appData.fullPrice > 0) {
            console.log("Скидка не предусмотрена");
        } 
        else {
            console.log("Что то пошло не так");
        }
    },

    showTypeOf: (arg, message) => console.log(message, typeof arg),

    Start: function(){

        appData.asking();
        
        appData.allServicePrices = appData.getAllServicePrices();

        appData.fullPrice = appData.getFullPrice();

        appData.servicePercentPrice = appData.getServicePercentPrices();

        appData.logger();
    },

    logger: function()
    {
        console.log("Значение переменной screens в виде массива: ",appData.screens.split(" "));

        appData.showTypeOf(appData.adaptive, "Тип переменной adaptive: ");
        appData.showTypeOf(appData.title, "Тип переменной title: ");
        appData.showTypeOf(appData.fullPrice, "Тип переменной fullPrice: ");

        console.log("Тип экрана: ", appData.screens);

        appData.getRollbackMessage();

        console.log("Cтоимость за вычетом процента отката посреднику: ",
        Math.ceil(appData.getServicePercentPrices()));

        console.log(appData.getTitle());

        for( let k in appData)
        {
            console.log(k);
        } 
    }
};

appData.Start();
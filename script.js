"use strict";

const appData = {
    title: "",
    screens: "",
    rollback: 20,
    screenPrice: 0,
    adaptive: true,
    services: {},
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,

    asking: function(){
        do{
            appData.title = prompt("Как называется ваш проект?","калькулятор");
        }while(appData.CheckString(appData.title) == 0);

        do{
            appData.screens = prompt("Какие типы экранов нужно разработать?","Простые");
        }while(appData.CheckString(appData.screens) == 0);
        

        do {
            appData.screenPrice = prompt("Сколько будет стоить данная работа?");
        }while(appData.CheckPrice(appData.screenPrice) == 0);


        appData.adaptive = confirm("Нужен ли адаптив на сайте?");
        if(typeof appData.adaptive != Boolean){
            appData.adaptive = Boolean(appData.adaptive);
        }

    },

    CheckString: function(str){
        let result = 0;
        if(str == null) {
            result = 1;
        }
        else{
            str = parseInt(str);
            if(isNaN(str)){
              result = 1;
            }
            else{
                alert("Введите строку!");    
            }
        } 
        
        return result;    
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
        let name = "";
        let price = 0;

        for(let i = 0; i < 2; i++){
            name = prompt("Какой дополнительный тип услуги нужен?");
            name = appData.CheckString(name);

            name+=i;
            
            price = appData.priceTest(price);

            appData.services[name] = +price;

            appData.allServicePrices += appData.services[name] ;
        }

    },

    getFullPrice: () => appData.fullPrice = 
        parseInt(appData.screenPrice) + appData.allServicePrices,

    getServicePercentPrices: () => appData.servicePercentPrice = 
        appData.fullPrice * (1 -appData.rollback/100),

    getTitle: function() {
        appData.title = appData.title.trim();
        let firstLetter;        
        firstLetter = appData.title.substring(0,1).toUpperCase();
        
        appData.title = appData.title.slice(1).toLowerCase();
        appData.title = firstLetter + appData.title;
        //return appData.title;
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
        
        appData.getAllServicePrices();

        appData.getFullPrice();

        appData.getServicePercentPrices();

        appData.getTitle();

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

        console.log(appData.title);

        for(let k in appData)
        {
            console.log(k+": "+appData[k]);
        } 
    }
};

appData.Start();
"use strict";

const appData = {
    title: "",
    screens: [],
    rollback: 20,
    adaptive: true,
    services: {},
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,

    asking: function(){
        let nameArr = [];
        let priceArr = [];
        
        do{
            appData.title = prompt("Как называется ваш проект?","калькулятор");
        }while(appData.CheckString(appData.title));

        for(let i = 0; i < 2; i++)
        {
            let name = "";
            let price = 0;

            do{
                name = prompt("Какие типы экранов нужно разработать?","Простые");
            }while(appData.CheckString(name));
            
            name = name.trim() + "_"+ i;

            do {
                price = prompt("Сколько будет стоить данная работа?");
            }while(appData.CheckPrice(price));

            nameArr.push(name);
            priceArr.push(price);

        }
        this.screens.push(nameArr);
        this.screens.push(priceArr);
        
        appData.adaptive = confirm("Нужен ли адаптив на сайте?");
        if(typeof appData.adaptive != Boolean){
            appData.adaptive = Boolean(appData.adaptive);
        }

        let name = "";
        let price = 0;

        for(let i = 0; i < 2; i++){
            do{
                name = prompt("Какой дополнительный тип услуги нужен?");
            }while(appData.CheckString(name));
            
            name = `${name.trim()}_${i}`;
            
            do{
                price = prompt("Сколько это будет стоить?");
            }while(appData.CheckPrice(price));
            
            appData.services[name] = +price;
            appData.getAllServicePrices(name);
        }
    },

    CheckString: function(str) { 
        let result = true;
        
        if(str != null) {
            str = str.trim();
            if(str == "") {
                alert("Введите строку!");
            }
            else{
                str = parseInt(str);
                if(isNaN(str) || (str == 0)){
                    result = false;
                }
            }
        }
        else{
            alert("Введите строку!");
        } 
        
        return result;    
    },

    CheckPrice: function(price) {
        let servP = false;
        if(price == null) {
            servP = true;
            alert("Введите валидное число!");
        }
        else{
            price = parseInt(price.trim());
        
            if ((isNaN(price) || (price < 0)))
            {
                servP = true;
                alert("Введите валидное число!");
            }
        }
        
        return servP;
    },

    getAllServicePrices: name => appData.allServicePrices += appData.services[name],

    getScreensPrice: () => appData.screens[1].reduce((one, two) => 
        parseInt(one) + parseInt(two)),

    getFullPrice: () => appData.fullPrice = 
        parseInt(appData.getScreensPrice()) + appData.allServicePrices,

    getServicePercentPrices: () => appData.servicePercentPrice = 
        appData.fullPrice * (1 -appData.rollback/100),

    getTitle: function() {
        appData.title = appData.title.trim();
        let firstLetter;        
        firstLetter = appData.title.substring(0,1).toUpperCase();
        
        appData.title = appData.title.slice(1).toLowerCase();
        appData.title = firstLetter + appData.title;
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
        
        appData.getFullPrice();

        appData.getServicePercentPrices();

        appData.getTitle();

        appData.logger();
    },

    logger: function()
    {
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
"use strict";

const h1 = document.getElementsByTagName("h1")[0];

const btns = document.getElementById("start");

const plusBtn = document.querySelector(".screen-btn");

const otherPercent = document.querySelectorAll(".other-items", "percent");

const otherNumber = document.querySelectorAll(".other-items", "number");

const inputRange = document.querySelector(".rollback input[type='range']");

const spanRange = document.querySelector(".rollback span[class='range-value'");
const select = document.querySelector("select[name='views-select']");
const userNumOfScr = document.querySelector("input[placeholder*='Коли']");
const range = document.querySelector("#range");
const span = document.querySelector("#range +span");
//const RollInput = document.querySelector("input[id*='roll'");

let totalCost = document.getElementsByClassName("total-input")[0];
let totalScreenNumber = document.getElementsByClassName("total-input")[1];
let totalServicesCost = document.getElementsByClassName("total-input")[2];
let totalFullCost = document.getElementsByClassName("total-input")[3];
let totalRollbackCost = document.getElementsByClassName("total-input")[4];
let screenDivs = document.querySelectorAll("div[class*='screen'");


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
        do{
            appData.title = prompt("Как называется ваш проект?","калькулятор");
        }while(appData.CheckString(appData.title));

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

    addPrices: () => { 
        let SumOfScreens = 0;
        let fullPrice = 0;

        appData.rollback = range.value;
        
        appData.screens.forEach(function(screen){
            SumOfScreens += screen.count;
            fullPrice += screen.price;
        });

        appData.fullPrice = fullPrice;
        totalScreenNumber.value = SumOfScreens;

        appData.servicePercentPrice = appData.fullPrice * (1 -appData.rollback/100);
        totalRollbackCost.value = appData.servicePercentPrice;
    },

    addScreens: () => {        
        screenDivs.forEach(function(screen, index){
            let select = screen.querySelector("select");
            let input = screen.querySelector("input");

            index = select.selectedIndex;
            let screenName = select.options[index].text;

            appData.screens.push({
                id: index,
                name: screenName,
                count: +input.value, 
                price: +select.value * +input.value
            });
        });
        appData.addPrices();
    },

    getTitle: function() {
        appData.title = appData.title.trim();
        let firstLetter;        
        firstLetter = appData.title.substring(0,1).toUpperCase();
        
        appData.title = appData.title.slice(1).toLowerCase();
        appData.title = firstLetter + appData.title;
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

//appData.Start();

///1)
btns.addEventListener("click", appData.addScreens); 
select.addEventListener("change", handFunc);
userNumOfScr.addEventListener("input", handFunc);

function startF() {
    btns.disabled = true;
    btns.style.opacity = 0.2;
    }

function handFunc(){
    let index = select.selectedIndex;
    
    let screenNumber = parseInt(userNumOfScr.value);
    
    if((index > 0)&&(!isNaN(screenNumber))){
        btns.disabled = false;
        btns.style.opacity = 1;
    }
    else{
        startF();
    }
        
}

//2)

const changeRollback = () => {
    let rollback = range.value;
    appData.rollback = rollback;
    span.innerHTML = rollback;
};
range.addEventListener("input", changeRollback);


startF();
"use strict";

const h1 = document.getElementsByTagName("h1")[0];

const btns = document.getElementById("start");

const plusBtn = document.querySelector(".screen-btn");

const otherPercent = document.querySelectorAll(".other-items", "percent");

const otherNumber = document.querySelectorAll(".other-items", "number");

const inputRange = document.querySelector(".rollback input[type='range']");

const spanRange = document.querySelector(".rollback span[class='range-value'");
let select = document.querySelector("select[name='views-select']");
let userNumOfScr = document.querySelector("input[placeholder*='Коли']");
const range = document.querySelector("#range");
const span = document.querySelector("#range +span");

let totalCost = document.getElementsByClassName("total-input")[0];
let totalScreenNumber = document.getElementsByClassName("total-input")[1];
let totalServicesCost = document.getElementsByClassName("total-input")[2];
let totalFullCost = document.getElementsByClassName("total-input")[3];
let totalRollbackCost = document.getElementsByClassName("total-input")[4];

let screenDivs = document.querySelectorAll("div[class*='screen'");
let servicesDivs = document.querySelectorAll("div[class*='other-items'");

const appData = {
    title: "",
    screens: [],
    rollback: 0,
    adaptive: true,
    services: {},
    allScreensPrice: 0,
    screensNumber: 0,
    allServicesPrice: 0,
    fullPrice: 0,
    servicePercentPrice: 0,

    addPrices: () => { 
        let SumOfScreens = 0;
        let fullScreensPrice = 0;
        let fullServicePrice = 0;

        appData.rollback = range.value;
        
        for(let i in appData.services){
            fullServicePrice += appData.services[i];
        }

        appData.screens.forEach(function(screen){
            SumOfScreens += screen.count;
            fullScreensPrice += screen.price;
        });

        appData.allScreensPrice = fullScreensPrice;
        appData.screensNumber = SumOfScreens;
        appData.allServicesPrice = fullServicePrice;
        appData.fullPrice = fullScreensPrice + fullServicePrice;
        
        let rollback = appData.fullPrice * (1 -appData.rollback/100);
        appData.servicePercentPrice = Math.round(rollback);
    },

    addServices: () => {
        appData.services = {};
        servicesDivs.forEach(div => {
            let checkbox = div.querySelector("input[type='checkbox'");
            let label = div.querySelector("label");
            let input = div.querySelector("input[type='text'");
             
            if(checkbox.checked){
                appData.services[label.textContent] = +input.value;
            }
        });       
    },

    addScreens: () => {    
        appData.screens = [];
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
    },

    getTitle: () => {
        appData.title = h1.textContent.trim();
        document.title = appData.title;
    },

    logger: () => {
        totalCost.value = appData.allScreensPrice;
        totalScreenNumber.value = appData.screensNumber;
        totalServicesCost.value = appData.allServicesPrice;
        totalFullCost.value = appData.fullPrice;
        totalRollbackCost.value = appData.servicePercentPrice;
    },

    init: () => {
        btns.addEventListener("click", appData.Start); 
        select.addEventListener("change",appData.handFunc);
        userNumOfScr.addEventListener("input", appData.handFunc);

        range.addEventListener("input", appData.changeRollback);
        plusBtn.addEventListener("click", appData.addScreenBlock);
    },

    disable: () => {
        btns.disabled = true;
        btns.style.opacity = 0.2;
    },

    enable: () => {
        btns.disabled = false;
        btns.style.opacity = 1;
    },

    handFunc: () => {
        let flag = true;
    
        screenDivs.forEach(function(screen, index){
            let select = screen.querySelector("select");
            let input = screen.querySelector("input");
        
            index = select.selectedIndex;
            let screenNumber = parseInt(input.value);

            if(flag){
                if((index < 1)||(isNaN(screenNumber))){
                    flag = false;
                    appData.disable();
                }    
            }
        });

        if(flag){
            appData.enable();        
        }
    },

    changeRollback: () => {
        let rollback = range.value;
        appData.rollback = rollback;
        span.innerHTML = rollback;
    },

    addScreenBlock: () => {
        appData.disable();
        let index = screenDivs.length - 1; 
        const cloneScreen = screenDivs[index].cloneNode(true);
    
        let select = cloneScreen.querySelector("select");
        let input = cloneScreen.querySelector("input");
        input.value = "";

        screenDivs[index].after(cloneScreen);
        screenDivs = document.querySelectorAll("div[class*='screen'");
    
        select.addEventListener("change", appData.handFunc);
        input.addEventListener("input", appData.handFunc);    
    },

       Start: () => {
        appData.addScreens();
        appData.addServices();
        appData.addPrices();
        appData.getTitle();
        appData.logger();
    },
};

window.onload = function() {
    appData.disable();
    appData.init();
};

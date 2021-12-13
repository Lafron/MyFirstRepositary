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
    rollback: 20,
    adaptive: true,
    services: {},
    allScreensPrice: 0,
    screensNumber: 0,
    allServicesPrice: 0,
    fullPrice: 0,
    servicePercentPrice: 0,

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
        servicesDivs.forEach(div =>{
            let checkbox = div.querySelector("input[type='checkbox'");
            let label = div.querySelector("label");
            let input = div.querySelector("input[type='text'");
             
            if(checkbox.checked){
                appData.services[label.textContent] = +input.value;
            }
            else{
                delete appData.services[label.textContent];
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

    getTitle: function() {
        let h1 = document.querySelector("h1");
        appData.title = h1.textContent.trim();

        let firstLetter;        
        firstLetter = appData.title.substring(0,1).toUpperCase();
        
        appData.title = appData.title.slice(1).toLowerCase();
        appData.title = firstLetter + appData.title;

        document.title = appData.title;
    },

    Start: function(){
        appData.addScreens();
        appData.addServices();
        appData.addPrices();
        appData.getTitle();
        appData.logger();
    },

    logger: function()
    {
        totalCost.value = appData.allScreensPrice;
        totalScreenNumber.value = appData.screensNumber;
        totalServicesCost.value = appData.allServicesPrice;
        totalFullCost.value = appData.fullPrice;
        totalRollbackCost.value = appData.servicePercentPrice;
    }
};


///1)
function startF() {
    btns.disabled = true;
    btns.style.opacity = 0.2;

    btns.addEventListener("click", appData.Start); 
    select.addEventListener("change", handFunction);
    userNumOfScr.addEventListener("input", handFunction);
}

function handFunc(){
    let flag = true;
    screenDivs.forEach(function(screen, index){
        let select = screen.querySelector("select");
        let input = screen.querySelector("input");
        
        index = select.selectedIndex;
        let screenNumber = parseInt(input.value);

        if(flag){
            if((index < 0)||(isNaN(screenNumber))){
                flag = false;
                startF();
            }    
        }
    });
    if(flag){
        btns.disabled = false;
        btns.style.opacity = 1;
    }
}

function handFunction(){
    let flag = true;
    var elements = Array.from(screenDivs);
        
    for(let i of elements){
        let select = i.childNodes[1].childNodes[1];
        let input = i.childNodes[3].childNodes[1];
        
        let index = select.selectedIndex;
        let screenNumber = parseInt(input.value);

        if((index < 1)||(isNaN(screenNumber))){
            startF();
            flag = false;
        }
        else{
            if(flag){
                btns.disabled = false;
                btns.style.opacity = 1;
            }
            
        }
    
    }
        
}

//2)

const changeRollback = () => {
    let rollback = range.value;
    appData.rollback = rollback;
    span.innerHTML = rollback;
};
range.addEventListener("input", changeRollback);

plusBtn.addEventListener("click", addScreenBlock);

function addScreenBlock(){
    startF();
    const cloneScreen = screenDivs[0].cloneNode(true);
    
    let select = cloneScreen.querySelector("select");
    let input = cloneScreen.querySelector("input");
    input.innerHTML = "";

    screenDivs[screenDivs.length - 1].after(cloneScreen);
    screenDivs = document.querySelectorAll("div[class*='screen'");
    screenDivs[screenDivs.length - 1].querySelector("input").value = "";
    
    select.addEventListener("change", handFunction);
    input.addEventListener("input", handFunction);
        
}

startF();
//"use strict";

const h1 = document.getElementsByTagName("h1")[0];
const btns = document.getElementById("start");
const plusBtn = document.querySelector(".screen-btn");
const otherPercent = document.querySelectorAll(".other-items", "percent");
const otherNumber = document.querySelectorAll(".other-items", "number");

const select = document.querySelector("select[name='views-select']");
const userNumOfScr = document.querySelector("input[placeholder*='Коли']");
const inputRange = document.querySelector(".rollback input[type='range']");
const range = document.querySelector("#range");
const spanRange = document.querySelector("#range +span");

let totalCost = document.getElementsByClassName("total-input")[0];
let totalScreenNumber = document.getElementsByClassName("total-input")[1];
let totalServicesCost = document.getElementsByClassName("total-input")[2];
let totalFullCost = document.getElementsByClassName("total-input")[3];
let totalRollbackCost = document.getElementsByClassName("total-input")[4];

let screenDivs = document.querySelectorAll("div[class*='screen'");
let servicesDivs = document.querySelectorAll("div[class*='other-items'");

const reset = document.querySelector("#reset");
const totalInput = document.querySelectorAll("input[class*='total-input'");
const check = document.querySelector("#cms-open");
const hiddenCmsVar = document.querySelector(".hidden-cms-variants");
const hiddenSelect = hiddenCmsVar.querySelector("select");


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

    addPrices: function () { 
        let SumOfScreens = 0;
        let fullScreensPrice = 0;
        let fullServicePrice = 0;

        this.rollback = range.value;
        
        for(let i in this.services){
            fullServicePrice += this.services[i];
        }

        this.screens.forEach( screen => {
            SumOfScreens += screen.count;
            fullScreensPrice += screen.price;
        });
 
        this.allScreensPrice = fullScreensPrice;
        this.screensNumber = SumOfScreens;
        this.allServicesPrice = fullServicePrice;
        this.fullPrice = fullScreensPrice + fullServicePrice;
        
        if(hiddenSelect.value === "50"){
            this.servicePercentPrice = Math.round(this.fullPrice * 1.5);    
        }
        else{
            let rollback = this.fullPrice * (1 - this.rollback/100);
            this.servicePercentPrice = Math.round(rollback);
        }
    },

    addServices: function () {
        this.services = {};
        servicesDivs.forEach( div => {
            let checkbox = div.querySelector("input[type='checkbox'");
            let label = div.querySelector("label");
            let input = div.querySelector("input[type='text'");
             
            if(checkbox.checked){
                this.services[label.textContent] = +input.value;
            }
        });       
    },

    addScreens: function () {    
        this.screens = [];
        screenDivs.forEach( (screen, index) => {
            let select = screen.querySelector("select");
            let input = screen.querySelector("input");

            index = select.selectedIndex;
            let screenName = select.options[index].text;

            this.screens.push({
                id: index,
                name: screenName,
                count: +input.value, 
                price: +select.value * +input.value
            });
        });
    },

    getTitle: function () {
        this.title = h1.textContent.trim();
        document.title = this.title;
    },

    logger: function () {
        //console.log("logger ",this);
        totalCost.value = this.allScreensPrice;
        totalScreenNumber.value = this.screensNumber;
        totalServicesCost.value = this.allServicesPrice;
        totalFullCost.value = this.fullPrice;
        totalRollbackCost.value = this.servicePercentPrice;
    },

    init: function () {
        btns.addEventListener("click", this.Start.bind(this)); 
        select.addEventListener("change",this.handFunc.bind(this));
        userNumOfScr.addEventListener("input", this.handFunc.bind(this));

        range.addEventListener("input", this.changeRollback.bind(this));
        plusBtn.addEventListener("click", this.addScreenBlock.bind(this));

        reset.addEventListener("click", this.resetMethod.bind(this));
        check.addEventListener("click", this.showCmsVariants);
        
        hiddenSelect.addEventListener("change", this.hiddenSelectChange.bind(this));
    },

    disable: () => {
        btns.disabled = true;
        btns.style.opacity = 0.2;
    },

    enable: () => {
        btns.disabled = false;
        btns.style.opacity = 1;
    },

    handFunc: function () {
        let flag = true;

        screenDivs.forEach( (screen, index) => {
            let select = screen.querySelector("select");
            let input = screen.querySelector("input");
        
            index = select.selectedIndex;
            let screenNumber = parseInt(input.value);

            if(flag){
                if((index < 1)||(isNaN(screenNumber))){
                    flag = false;
                    this.disable();
                }    
            }
        });

        if(flag){
            appData.enable();        
        }
    },

    changeRollback: function () {
        let rollback = range.value;
        this.rollback = rollback;
        spanRange.innerHTML = rollback + "%";
    },

    addScreenBlock: function () {
        this.disable();
        let index = screenDivs.length - 1; 
        const cloneScreen = screenDivs[index].cloneNode(true);
    
        let select = cloneScreen.querySelector("select");
        let input = cloneScreen.querySelector("input");
        input.value = "";

        screenDivs[index].after(cloneScreen);
        screenDivs = document.querySelectorAll("div[class*='screen'");
    
        select.addEventListener("change", this.handFunc.bind(this));
        input.addEventListener("input", this.handFunc.bind(this));    
    },

    controlDisable: function() {
        btns.style.display = "none";
        screenDivs.forEach( screen => {
            let select = screen.querySelector("select");
            let input = screen.querySelector("input");

            select.disabled = true;
            input.disabled = true;
        });

        reset.style.display = "block";
    },

    resetMethod: function () {
        this.resetEnable();
        this.resetInputValue();
        this.resetCheckBox();
        this.resetRange();
        this.removeBlock();
        this.disable();
    },

    resetEnable: function () {
        reset.style.display = "none";
        select.disabled = false;
        userNumOfScr.disabled = false;        
        btns.style.display = "block";

        check.checked = false;
        hiddenCmsVar.style.display = "none";
    },

    resetInputValue: function () {
        select.selectedIndex = 0;
        userNumOfScr.value = "";

        totalInput.forEach( control => {
            control.value = 0;
        });
    },

    resetCheckBox: function () {
        servicesDivs.forEach( div => {
            let checkbox = div.querySelector("input[type='checkbox'");
             
            if(checkbox.checked){
                checkbox.checked = false;
            }
        });
    },

    resetRange: function () {
        range.value = 0;
        spanRange.textContent = 0 + "%";
    },

    removeBlock: function(){
        let length = screenDivs.length;
        
        for(let i = 1; i < length; i++){
            screenDivs[i].remove();
        }
    },

    showCmsVariants: function () {
        if(this.checked === true) {
            hiddenCmsVar.style.display = "flex";
        }
        else{
            hiddenCmsVar.style.display = "none";
        }
    },

    hiddenSelectChange: function () {
        const mainContrIn = hiddenCmsVar.querySelector("div[class='main-controls__input']");
        if(hiddenSelect.value === "other"){
            mainContrIn.style.display="block";
        }
        else if(hiddenSelect.value === "50"){
            this.servicePercentPrice = appData.fullPrice * 1.5;
            this.logger();
        }
    },

    Start: function () { 
        this.addServices();
        this.controlDisable();   
        this.addScreens();
        this.addPrices();
        this.getTitle();
        this.logger();
    },
};

window.onload = () => {
    appData.disable();
    appData.init();
};

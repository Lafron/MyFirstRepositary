const Table = document.querySelector("#TimeTable");

function Start(){
    let d = new Date();

    let myDate = {
        weakDay: d.getDay(),
        monDay: d.getDate(),
        month: d.getMonth(),    
        year: d.getFullYear(),

        hour: d.getHours(),
        min: d.getMinutes(),
        second: d.getSeconds(),
    };

    printDate(myDate);
}

function getHourIndex(myDate) {
    const hourArr=["час", "часа", "часов"];
    let hourIndex="";

    if((myDate.hour==1)||myDate.hour==21){
        hourIndex = hourArr[0];
        }
     else if (((myDate.hour>1)&&(myDate.hour<5))||(myDate.hour>21)) {
        hourIndex = hourArr[1];
        }
    else{
        hourIndex = hourArr[2];
        }

    return hourIndex;
}


function setZero(myDate){
    for(let k in myDate){
        if(parseInt(myDate[k]) < 10){
            myDate[k] = "0" + (myDate[k]);
            }
        }
        return myDate;
    }


function printDate(myDate){
    const weak = ["воскресенье", "понедельник", "вторник", "среда", "четверг", 
    "пятница", "суббота"];

    const months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", 
    "сентября", "октября", "норября", "декабря"];

    const longMonth = months[myDate.month];
    const longWeakDay = weak[myDate.weakDay];

    let hourIndex = getHourIndex(myDate);
    
    myDate = setZero(myDate);
    
    Table.innerHTML = "";
    Table.innerHTML += "Сегодня " + longWeakDay + ", " + myDate.monDay + " " + 
        longMonth + " " + myDate.year + " года, " + myDate.hour + " " + 
        hourIndex + " " + myDate.min + " минут " + myDate.second + " секунд<br/>";

    Table.innerHTML += myDate.monDay + "." + myDate.month + "." + myDate.year + 
        " - " + myDate.hour + ":" + myDate.min + ":" + myDate.second + "<br/>";
    }

Start();
setInterval(Start, 1000);





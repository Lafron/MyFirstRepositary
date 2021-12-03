const weak = ["воскресенье", "понедельник", "вторник", "среда", "четверг", 
"пятница", "суббота"];

const Table = document.querySelector("#WeakTable");

const d = new Date();
let dayNow = d.getDay();

for(let k in weak) {
    k = parseInt(k);
    let classN = "";

    if((k == 0)||(k == 6)) {
        classN = 'class="hofesh"';
    }

    if(k == dayNow) {
        classN = 'class="today"';
    }
    
    Table.innerHTML += "<span "+ classN + ">" + weak[k] + "</span><br/>";
} 
let selectorA = "div[class='book']>h2>a";
const linkArr = document.querySelectorAll(selectorA);

let selectorD = "div[class='book']";
const divArr = document.querySelectorAll(selectorD);

let arrNum1 = getNumArr(linkArr);

arrNum1 = sortArr(arrNum1, divArr);



document.querySelector("body").style.backgroundImage = "url(./image/adv.jpg)";

divArr[4].querySelector("h2 > a").textContent = "Книга 3 this и Прототипы Объектов";

document.querySelector(".adv").remove();

let liArr = divArr[0].querySelectorAll("ul>li");

liArr[2].before(liArr[3]);
liArr[2].before(liArr[6]);
liArr[2].before(liArr[8]);
liArr[2].before(liArr[4]);
liArr[2].before(liArr[5]);
liArr[2].before(liArr[7]);
liArr[2].before(liArr[9]);


liArr = divArr[5].querySelectorAll("ul>li");

liArr[2].before(liArr[9]);
liArr[2].before(liArr[3]);
liArr[5].before(liArr[6]);
liArr[5].before(liArr[7]);


liArr = divArr[2].querySelectorAll("ul>li");

let li = document.createElement("li");
li.textContent = "Глава 8: За пределами ES6";
liArr[8].after(li);


function sortArr(arrNum, arrDiv){
    for(let i = 0; i < arrNum.length - 1; i++ ){
        let temp;
        if(arrNum[i] > arrNum[i+1]){
            temp = arrNum[i];
            arrNum[i] = arrNum[i+1];
            arrNum[i+1] = temp;

            //arrDiv[i].before(arrDiv[i+1]);
            arrDiv[i].insertAdjacentElement("beforebegin", arrDiv[i+1]);

            temp = arrDiv[i];
            arrDiv[i] = arrDiv[i+1];
            arrDiv[i+1] = temp;
        }
    }
    
    return arrNum;
}

function getNumArr(linkArr){
    let arrNum = [];

    for(let i = 0; i < linkArr.length; i++) {
        let arrLetter = linkArr[i].innerText.split(" ");

        for(let j = 0; j < arrLetter.length; j++){
            let num = parseInt(arrLetter[j]);
            if(!Number.isNaN(num)){
                arrNum.push(num);
            }
        }
    }
    return arrNum;
}

// function getRowArray(liArr){
//     let arrRow = [];
//     for(let i = 0; i < liArr.length; i++){
//         arrRow.push(liArr[i].textContent);
//     }
//     console.log(arrRow);
// }

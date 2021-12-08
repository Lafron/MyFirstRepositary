let selectorD = "div[class='book']";
const divArr = document.querySelectorAll(selectorD);

divArr[0].before(divArr[1]);
divArr[2].before(divArr[4]);
divArr[2].before(divArr[3]);
divArr[2].before(divArr[5]);

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

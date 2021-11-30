let lang=prompt("выберете язык:en или ru");

if(lang==="en"){
    console.log("sunday");
    console.log("monday");
    console.log("tuesday");
    console.log("wednesday");
    console.log("thursday");
    console.log("friday");
    console.log("saturday");
}
else if(lang==="ru"){
    console.log("воскресенье");
    console.log("понедельник");
    console.log("вторник");
    console.log("среда");
    console.log("четверг");
    console.log("пятница");
    console.log("суббота");
}
else {
    console.log("Error");
}

switch(lang){
    case "en":
    console.log("sunday");
    console.log("monday");
    console.log("tuesday");
    console.log("wednesday");
    console.log("thursday");
    console.log("friday");
    console.log("saturday");
    break;
    
    case "ru":
    console.log("воскресенье");
    console.log("понедельник");
    console.log("вторник");
    console.log("среда");
    console.log("четверг");
    console.log("пятница");
    console.log("суббота");       
    break;

    default:
        console.log("Error");
}

const DaysArr=[
    ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"],
    ["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"]
];

lang==="en"?(DaysArr[0].forEach(key=>console.log(key))):
    lang==="ru"?(DaysArr[1].forEach(key=>console.log(key))):console.log("Error");

let namePerson=prompt("Enter your name");

namePerson==="Артем" ? console.log("директор") :
    namePerson==="Александр" ? console.log("преподаватель") :
        console.log("студент");

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
    alert("Error!");
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
        alert("Error");
}
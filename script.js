function myFunc(arg){
    if(typeof arg !== "string")
    {
        console.log("аргумент переданный в функцию не является строкой!");
    }
    else{
        let str = arg.trim();
        console.log(str);

        if(str.length>30){
            let shotStr = str.substring(0,29) + "...";
            console.log(shotStr);
        }
        
    }
}

myFunc("        Создайте функцию, которая принимает 1 аргумент (название произвольное)");
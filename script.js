const arr = ["214","785","2095","474","1747","2112", "2907"];

function SelectNum(array)
{
     for (let index = 0; index < array.length; index++) {
         //let newArr = [];
        
         if (array[index].startsWith("2")) {
             //newArr.push(array[index]);
            console.log(array[index]);    
         }
         
     }
}

SelectNum(arr);

for(let i = 1; i < 100; i++)
{
    
    if(checkNum(i)){
        console.log(i + " Делители этого числа: " + i + " " + 1);
    }
}

function checkNum(num)
{
    let result = false;
    const arr = [2, 3, 5, 7];
    
    for (let i = 0; i < arr.length; i++) {
             
        if((num > arr[i]) && (num % arr[i] == 0))
        {
            result = false;
            break;
        }
        else
        {
            result = true;
        }
    }
    return result;
}
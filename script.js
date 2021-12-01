let answ = prompt("Enter a number: ");
let result = 0;

if(answ != null)
{
    answ = parseInt(answ.trim());
    if(!(isNaN(answ))) {
        result = answ;
    }
}

console.log(result);
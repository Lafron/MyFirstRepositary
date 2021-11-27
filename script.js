const num=266219;

let arr=num.toString().split("");

console.log(arr);
let Sum=arr[0];
for(let i=0;i<arr.length;i++)
{
    Sum*=parseInt(arr[i]);
}
console.log(Sum);

let r=Sum**3;
console.log(r);

let arr2=r.toString().split("");
console.log(arr2[0],arr2[1]);

const str=r.toString();
console.log(str.substring(0,2));
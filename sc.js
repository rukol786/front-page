// let cityToCheck=prompt("Enter city name");
// let firstChar=cityToCheck.slice(0,1)
// firstChar=firstChar.toUpperCase();
// let otherChar=cityToCheck.slice(1);
// otherChar=otherChar.toLowerCase();
// console.log(firstChar+otherChar);

let Str=prompt("write anything");
let Check=Str.length;
for(let i=0;i<CheckStr;i++){
    if(Str.slice(i,i+2)== "  "){
        console.log("double space are found")
    }
    else{
        console.log("double space are not found")
    }
}
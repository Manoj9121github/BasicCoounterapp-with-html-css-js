const INCbtn= document.querySelector("#inc");
const RESbtn = document.querySelector("#reset");
const DECbtn = document.querySelector("#dec");

const count = document.querySelector(".count-value");
let countValue = parseInt(count.innerHTML);
console.log((countValue))


INCbtn.addEventListener("click",inc);

function inc(){
    countValue= countValue+1;
    console.log((countValue))
    count.innerHTML = countValue;      
}

RESbtn.addEventListener("click",reset);

function reset(){
    countValue=0;
    count.innerHTML=countValue;
}

DECbtn.addEventListener("click",dec);

function dec(){
    countValue= countValue-1;
    count.innerHTML=countValue
    console.log((countValue))
}

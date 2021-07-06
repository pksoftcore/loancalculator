window.onload = function () {

const calculate = document.querySelector ("#calc");
    
    
const area = document.getElementById("area");
const tax = document.getElementById("tax");
const rate = document.getElementById("rate");


const fp = document.getElementById ("flat-price");
const ta = document.getElementById ("tax-amount");
const tc = document.getElementById ("total-cost");



calculate.addEventListener("click", ()=>{
    console.log("working");
    
    const flatprice = (area.value*rate.value)  
    const taxvalue = ((tax.value*flatprice)/100);
    
    
    fp.innerHTML = "&#8377;" + flatprice.toFixed(2);
    ta.innerHTML = "&#8377;" +taxvalue.toFixed(2);
    tc.innerHTML = "&#8377;" + (flatprice+taxvalue).toFixed(2);

})
}



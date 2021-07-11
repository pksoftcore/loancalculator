const amount = document.querySelector("#loanprice");
const rate = document.querySelector("#rateofinterast");
const tim = document.querySelector("#period");

const emi = document.querySelector("#emi");
const interest = document.querySelector("#interest");
const totle = document.querySelector("#totle");
const per = document.querySelector("#per")

const add = document.querySelector("#add")
const sub = document.querySelector("#sub")

add.addEventListener("click", ()=>{
    tim.value = parseInt(tim.value)+1;
    per.innerHTML=tim.value;
})

sub.addEventListener("click", ()=>{
    tim.value = parseInt(tim.value)-1;
    per.innerHTML=tim.value;
})




tim.addEventListener("input", ()=>{
    per.innerHTML=tim.value;
})

per.addEventListener("click", ()=>{
    tim.value = parseInt(tim.value)+1;
    per.innerHTML=tim.value;
})

const calcEmi = document.querySelector("#calcEmi");

calcEmi.addEventListener("click", () => {
    const amt = amount.value;
    const r = rate.value;
    const t = tim.value;

    if(amt!=0 && r!=0 && t!=0){
        const intr = parseFloat((amt/100)*r*t).toFixed(2);

        const payable = parseFloat(intr)+parseFloat(amt);

        const em = (payable/(t*12)).toFixed(2);

        interest.innerHTML = intr;
        emi.innerHTML = em;
        totle.innerHTML = payable;
        console.log(amt,r,t);
    }
})
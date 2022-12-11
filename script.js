/*
//1. Доступ к полю ввода зп пользователем


//2. Доступ к кнопке Рассчитать, прослушка на нее
//3. Рассчет налогов: если годовая меньше 12 570, налог не начисляют, если больше этого, но меньше 50К, то надо 20%.
// Если больше 50к, налог 40%
// 4. // Рассчет социальных отчислений (считают от общей суммы зарплаты)

const button = document.querySelector("#btn");
button.addEventListener("click", calculateNet) 



function calculateNet() {

function calculateTaxSpan (e) {
    e.preventDefault();
    const gross = document.querySelector("#gross").value;
    if (gross <= 12570) {
        coefficient = ""
}
    if else (gross > 12570 || gross <= 50000) {
        coefficient = 0.20
    }
    else coefficient = 0.40;
}



function calculateNiNspan(e) {
    e.preventDefault();
    const gross = document.querySelector("#gross").value;
    if (gross <= 9564) {
        NiN = ""
    }

    if else (gross > 9564 || gross < 50000) {
        NiN = 0.12
    }
    else NiN = 0.02
}
let taxSpan = coefficient;
let NinSpan = NiN;
let total = gross - (taxSpan + NiN) / 12;
let calculateTax = gross * taxSpan;
let calculateNiN = gross * NiNspan;
let grossPerMonth = gross / 12;

document.querySelector("#monthlyBeforeTax").textContent = grossPerMonth;
document.querySelector("#monthlyAfterTax").textContent = total;
*/
const button = document.querySelector("#btn");
button.addEventListener("click", calculateNet) 




function calculateNet(e) {
    e.preventDefault();
    

    const gross = document.querySelector("#gross").value;
    let taxSpan = 0;
    if (gross <= 12570) {
        taxSpan = 0;
}
    else if  (gross > 12570 && gross <= 50000) {
        taxSpan = 0.20;
    }
    else {taxSpan = 0.40;
    }

let NiNspan = 0;
if (gross <= 9564) {
    NiNspan = 0;
}
else if (gross > 9564 && gross < 50000) {
    NiNspan = 0.12;
    }
else {NiNspan = 0.02;
}
let monthlyGross = gross / 12;
monthlyGross = monthlyGross.toFixed(2);
let annualTax = gross * taxSpan;
let annualNiN = gross * NiNspan;
let annualTotalNet = gross - (annualTax + annualNiN);
let monthlyNet = annualTotalNet / 12;
monthlyNet = monthlyNet.toFixed(2);

document.querySelector("#beforeTax").textContent = monthlyGross;
document.querySelector("#afterTax").textContent = monthlyNet;
}


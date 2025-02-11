//add cart btns
let p1Add = document.querySelector(".p1Add");
let p2Add = document.querySelector(".p2Add");
let p3Add = document.querySelector(".p3Add");
let divider1 = document.querySelector(".divider1");

let cartDiv = document.querySelector(".cartDiv");

//productQuant
let product1 = document.querySelector(".product1");
let product2 = document.querySelector(".product2");
let product3 = document.querySelector(".product3");

let p1Total = document.querySelector(".p1Total");
let p2Total = document.querySelector(".p2Total");
let p3Total = document.querySelector(".p3Total");

let totalQuant = document.querySelector(".totalQuant");
let totalAmount = document.querySelector(".totalAmount");

let Checkout = document.querySelector(".Checkout");

let divider2 = document.querySelector(".divider2");
let emptyCart = document.querySelector(".emptyCart");

let totalP1 = 0;
let totalP2 = 0;
let totalP3 = 0;

let count1 = 0;
p1Add.addEventListener("click", () => {
    unhidden();
    count1++;
    product1.value = count1;
    Quantity()
    totalP1 = count1*23;
    p1Total.textContent = `$${totalP1}`;
    totalMoney();
});

let count2 = 0;
p2Add.addEventListener("click", () => {
    unhidden();
    count2++;
    product2.value = count2;
    Quantity()
    totalP2 = count2*56;
    p2Total.textContent = `$${totalP2}`;
    totalMoney();
});

let count3 = 0; 
p3Add.addEventListener("click", () => {
    unhidden();
    count3++;
    product3.value = count3;
    Quantity()
    totalP3 = count3*32;
    p3Total.textContent = `$${totalP3}`;
    totalMoney();
});

function unhidden(){
    divider1.classList.remove("hidden");
    cartDiv.classList.remove("hidden");
}

function Quantity() {
    let q1 = product1.value.trim(); 
    let q2 = product2.value.trim(); 
    let q3 = product3.value.trim();
    let totalqan = Number(q1) + Number(q2) + Number(q3);
    totalQuant.textContent = totalqan;
    return totalqan;
}

 
function totalMoney(){
    let sum = totalP1 + totalP2 + totalP3;
    totalAmount.textContent = `💰${sum}`;
    return sum;
}

Checkout.addEventListener("click", () => {
    alert(`You have selected ${Quantity()} items in your cart, then the paid amount is 💰${totalMoney()}`);
});
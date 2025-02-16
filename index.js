document.addEventListener("DOMContentLoaded", () => {
    let productsDiv = document.querySelector(".productsDiv");
    let totalQuant = document.querySelector(".totalQuant");
    let cartDiv = document.querySelector(".cartDiv");
    let emptyCart = document.querySelector(".emptyCart");
    let priceDesDiv = document.querySelector(".priceDes");
    let totalAmount = document.querySelector(".totalAmount");

    let products = [
        {id : 1, name : "Jeans" , price: 100},
        {id : 2, name : "Shirt" , price: 200},
        {id : 3, name : "Watch" , price: 300}
    ]

    let cart = JSON.parse(localStorage.getItem("cart")) || [];    
    let totalPrice = JSON.parse(localStorage.getItem("totalPrice")) || [];

    products.forEach(product => {
        let div = document.createElement("div");
        div.classList.add("flex", "justify-between", "items-center", "mx-6", "my-6");
        let p = document.createElement("p");
        p.innerText = `${product.name} - $${product.price.toFixed(0)}`;
        let button = document.createElement("button");
        button.classList.add("px-5", "py-1", "bg-pink-600", "text-white", "rounded-2xl");
        button.innerText = "Add cart";
        button.setAttribute("data-id", product.id);
        div.appendChild(p);
        div.appendChild(button);
        productsDiv.appendChild(div);
    });

    productsDiv.addEventListener("click", (e) => {
        if(e.target.tagName === "BUTTON"){
            const productId = parseInt(e.target.getAttribute("data-id"));
            let product = products.find(p => p.id === productId);
            addTocart(product);               
        }
    });

    function addTocart(product) {
        cart.push(product);       
        totalPrice.push(product.price);
        renderCart(product);
        save(); 
    }


    cart.forEach(product => renderCart(product));

    function renderCart(product) {
        totalQuant.textContent = "";
        totalAmount.textContent = "";
        if (cart.length > 0) {

            emptyCart.classList.add("hidden");
            priceDesDiv.classList.remove("hidden");
            totalQuant.textContent = cart.length;
            let div = document.createElement("div");
            div.classList.add("flex", "flex-row", "justify-start", "items-center", "gap-1");
            
            let p = document.createElement("p");
            p.textContent = `${product.name}`;
            
            let span = document.createElement("span");
            span.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48">
                <path fill="#F44336" d="M21.5 4.5H26.501V43.5H21.5z" transform="rotate(45.001 24 24)"></path>
                <path fill="#F44336" d="M21.5 4.5H26.5V43.501H21.5z" transform="rotate(135.008 24 24)"></path>
            </svg>`;
            div.appendChild(p);
            div.appendChild(span);
            cartDiv.appendChild(div);
            totalAmount.textContent = `💰${sum()}`;
            span.addEventListener("click", () => {
                let index = cart.findIndex(p => p.name == product.name);
                if(index > -1){
                    cart.splice(index,1);
                    totalPrice.splice(index,1);
                    div.remove();
                    totalQuant.textContent = cart.length;
                    totalAmount.textContent = `💰${sum()}`;
                    save();
                }
                if (cart.length === 0) {
                    emptyCart.classList.remove("hidden");
                    priceDesDiv.classList.add("hidden");
                }
            });
        } else {
            emptyCart.classList.remove("hidden");
            priceDesDiv.classList.add("hidden");
        }
    }


    function sum(){
        let sum = 0;
        for (let i = 0; i < totalPrice.length; i++) {
            sum += totalPrice[i];
        }
        return sum;
    }

    let Checkout = document.querySelector(".Checkout");
    Checkout.addEventListener("click", () => {
        if (cart.length > 1) {
            alert(`You have ${cart.length} items in your cart🛍️. The items was successfully checkout. `)
        }
        else{
            alert(`You have ${cart.length} item in your cart🛍️. The items was successfully checkout. `)
        }
    });

    function save(){
        localStorage.setItem("cart", JSON.stringify(cart));
        localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
    }


});
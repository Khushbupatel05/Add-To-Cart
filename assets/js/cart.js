let cartArr = JSON.parse(localStorage.getItem("cart")) || [];
let counter = document.getElementById("counter");
let showCart = document.getElementById("show-cart");
let cartItems = document.getElementById("cartItems");
let cartImage = document.getElementById("cartImage");
let cakeLabel = document.getElementById("cake-lable")
let emptyImg = document.getElementById("empty-img")


function updateCartCounter() {
    counter.innerText = cartArr.length;
}

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cartArr));
    updateCartCounter();
}

function deleteItem(index) {
    cartArr.splice(index, 1);
    saveCart();
    displayCart();
}

function updateQuantity(index, value) {
    let newQuantity = cartArr[index].quantity + value;
    if (newQuantity <= 0) {
        deleteItem(index);
    } else {
        cartArr[index].quantity = newQuantity;
        saveCart();
        displayCart();
    }
}
function removeAll(){
    cartArr = [];
    saveCart();
    displayCart();
}
function displayCart() {
    showCart.innerHTML = "";
    cartItems.innerHTML = "";
    let total = 0;

    if (cartArr.length == 0) {
       
        cartImage.classList.remove("d-none");
        cakeLabel.classList.add("d-none")
        emptyImg.classList.remove("d-none")
        return;
    }else{
        cartImage.classList.add("d-none");
        cakeLabel.classList.remove("d-none")
        emptyImg.classList.add("d-none")
    }

    

    cartArr.forEach((item, index) => {
        let subTotal = item.price * item.quantity;
        total += subTotal;

        
        showCart.innerHTML += `
            <div class="row align-items-center py-3 gy-3">
                <div class="product-image col-md-6 col-12 d-flex align-items-center   gap-3">
                    <img src="${item.img}" width="100" class="border rounded" alt="img-item">
                    <div>${item.name}</div>
                </div>
                <div class="col-md-2 col-4 text-center">$${item.price}</div>
                <div class="col-md-2 col-4 text-center">
                    <div class="d-flex  align-items-center gap-2">
                        <button class="btn btn-sm btn-light" onclick="updateQuantity(${index}, -1)">
                        <i class="bi bi-dash"></i>
                        </button>
                        <span>${item.quantity}</span>
                        <button class="btn btn-sm btn-light" onclick="updateQuantity(${index}, 1)">
                        <i class="bi bi-plus"></i>
                        </button>
                    </div>
                </div>
                <div class="col-md-2 col-4 d-flex justify-content-center align-items-center gap-3">
                    <span>$${subTotal}</span>
                    <button class="btn btn-sm " onclick="deleteItem(${index})">
                    Remove
                    </button>
                </div>
            </div>
        `;
    });

    
    cartItems.innerHTML = `
        <h5 class="fw-bold">Total Order</h5>
        <div class="d-flex justify-content-between py-2">
            <span>SubTotal</span>
            <span>$${total}</span>
        </div>
        <div class="d-flex justify-content-between py-2">
            <span>Shipping Charges</span>
            <span>$0</span>
        </div>
        <hr>
        <div class="d-flex justify-content-between py-2 fw-bold">
            <span>Total</span>
            <span>$${total}</span>
        </div>
        <button class="btn btn-dark w-100 mt-3">Proceed to Checkout</button>
    `;
}

updateCartCounter();
displayCart();

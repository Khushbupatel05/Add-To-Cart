let products = [
  {
    id: 1,
    name: "Black Forest",
    description: "",
    img: "https://cakeart.thimpress.com/wp-content/uploads/2015/11/black-forest3-270x240.jpg",
    price: 20,

  },
  {
    id: 2,
    name: "Dessert Cake",
    description: "",
    img: "https://cakeart.thimpress.com/wp-content/uploads/2015/11/Strawberry-Cupcake3-270x240.jpg",
    price: 30,

  },
  {
    id: 3,
    name: "Sachertorte",
    description: "",
    img: "https://cakeart.thimpress.com/wp-content/uploads/2015/11/Strawberry-Cupcake-270x240.jpg",
    price: 40,

  },
  {
    id: 4,
    name: "Buiscute Cake",
    description: "",
    img: "https://cakeart.thimpress.com/wp-content/uploads/2015/11/recipe1-1.jpg",
    price: 10,

  },
  {
    id: 5,
    name: "Celebration Cupcake",
    description: "",
    img: "https://cakeart.thimpress.com/wp-content/uploads/2015/11/recipe7-1.jpg",
    price: 50,

  },
  {
    id: 6,
    name: "Chocholate Ball",
    description: "",
    img: "https://cakeart.thimpress.com/wp-content/uploads/2015/11/recipe5-1.jpg",
    price: 20,
  },
  {
    id: 7,
    name: "Velentine CupCake",
    description: "",
    img: "https://cakeart.thimpress.com/wp-content/uploads/2015/11/Cupcakes-gourmet-270x240.jpg",
    price: 25,
  },
  {
    id: 8,
    name: "Bun Cake",
    description: "",
    img: "https://cakeart.thimpress.com/wp-content/uploads/2015/11/cake2-270x240.jpg",
    price: 15,
  },
  
]
const productsElement = document.getElementById("product");
let cartArr = JSON.parse(localStorage.getItem("cart")) || [];
let counter = document.getElementById("counter");
counter.innerHTML = cartArr.length;

function addToCart(productId) {
    let product = cartArr.find((obj) => obj.id === productId);

    if (product) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Already added!",
        });
    } else {
        let productToAdd = products.find((obj) => obj.id === productId);

        if (productToAdd) {
            productToAdd.quantity = 1;
            cartArr.push(productToAdd);
        }
        Swal.fire({
          icon: "success",
          text: "add to cart!",
          position: 'top',
          toast: 'true',
          showConfirmButton: false,
          timer: 1500,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cartArr));
    counter.innerHTML = cartArr.length;
}

products.forEach((product, idx) => {
  productsElement.innerHTML +=`
    <div class="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-6">
      <div class="p-2 ">
        <div class="card m-2 ">
          <div class="text-center align-items-center card-img ">
            <img src="${product.img}" alt="${product.name}">
          </div>
          <div class="m-2 text-center ps-4 pe-4 text">
            <h6>${product.name}</h6>
          </div>
          <div class="text-center">
            <span>$ ${product.price}</span>
          </div>
          <div class="text-center pt-3">
            <button class="p-2 btn-card rounded" onclick="addToCart(${product.id})">ADD TO CART</button>
          </div>
        </div>
      </div>
    </div>
  `;
});


var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
  
});

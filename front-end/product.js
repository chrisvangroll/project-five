// Get elements
let addToCartBtn = document.getElementById('addToCart');
let cartNumber = document.getElementById('cartNumber');


//Display Product 

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

fetch('http://localhost:3000/api/furniture/' + id)
   .then(response => response.json())
   .then(data => {
        let item = render(data);
        document.querySelector('main').appendChild(item);

        addToCartBtn.addEventListener("click", () =>{
            addToCart();
            storeItem(data);
        });
   });

  

function render(product){

    let producto = document.createElement('div');
    producto.innerHTML = 
        ` <div id='${product._id}' class= 'item'>
                <img class='pic' src="${product.imageUrl}" alt="furniture">
                <div>
                    <h3 class='itemHeader'>${product.name}</h3>
                    <p class='description'>${product.description}</p>
                <div class='price'>$${product.price} </div>
                </div>
            </div>`;

            return producto;
    }

    

    // addToCartBtn.addEventListener("click", () =>{
    //     addToCart();
    // });

    function addToCart(){
        let productNumbers = localStorage.getItem('cartNumbers');
        productNumbers = parseInt(productNumbers);


       if (productNumbers){
            localStorage.setItem('cartNumbers', productNumbers + 1);
            cartNumber.textContent = productNumbers + 1;
        }
        else{
            localStorage.setItem('cartNumbers', 1);
            cartNumber.textContent = 1;
        }
    }

    function storeItem (product){
        let key = localStorage.getItem(product.name);

    }

    function loadCartNumbers() {
        let productNumbers = localStorage.getItem('cartNumbers');
        if( productNumbers ) {
            cartNumber.textContent = productNumbers;
        }
    }

loadCartNumbers()
    
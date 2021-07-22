// Reference elements
let addToCartBtn = document.getElementById('addToCart');
let cartNumber = document.getElementById('cartNumber');

//fetch data and call functions
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

  
//Display Product 
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

    //add to cart total and display on page
    function addToCart(){
        let productNumbers = localStorage.getItem('totalItems');
        productNumbers = parseInt(productNumbers);


       if (productNumbers){
            localStorage.setItem('totalItems', productNumbers + 1);
            cartNumber.textContent = productNumbers + 1;
        }
        else{
            localStorage.setItem('totalItems', 1);
            cartNumber.textContent = 1;
        }
    }

    //Add products to local storage
    function storeItem (data){
        let value = localStorage.getItem(data.name);
        value = parseInt(value);
        value ? localStorage.setItem(data.name, value + 1) : localStorage.setItem(data.name, 1);
    }

    //Display cart number when browser refreshes
    function loadCartNumbers() {
        let productNumbers = localStorage.getItem('totalItems');
        if( productNumbers ) {
            cartNumber.textContent = productNumbers;
        }
    }

loadCartNumbers()
    
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
        document.querySelector('main').appendChild(item)
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


    

    addToCartBtn.addEventListener("click", () =>{
        addToCart();
    });

    function addToCart(){
        localStorage.setItem('cartNumbers', 1)
    }
    
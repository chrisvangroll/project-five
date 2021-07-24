// Reference elements
let addToCartBtn = document.getElementById('addToCart');
let cartNumber = document.getElementById('cartNumber');
let divForBtn = document.getElementById('btnDiv');

//fetch data and call functions
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

fetch('http://localhost:3000/api/furniture/' + id)
   .then(response => response.json())
   .then(data => {
        let item = render(data);
        document.querySelector('main').insertBefore(item, divForBtn);

        addToCartBtn.addEventListener("click", () =>{
            addToCart();
            storeItem(data);
        });
   });

  
//Display Product 
    function render(product){

    let producto = document.createElement('div');
    //producto.classList.add('mx-auto');
    producto.innerHTML = 
        ` <div id='${product._id}' class = 'd-flex flex-column'>
            <img class = 'w-50 mx-auto' src="${product.imageUrl}" alt="furniture">
            <h3 class='itemHeader w-50 mx-auto fw-bold fs-1'>${product.name}</h3>
            <p class='description w-50 mx-auto fs-4'>${product.description}</p>
            <div class = 'w-50 mx-auto'>
                <label class= 'fs-4 fw-bold' for='varnish'>Choose a Varnish:</label>
                ${dropDownMenu(product.varnish)}
            </div>
            <div class='price w-50 mx-auto fs-4 fw-bold'>$${product.price/100} </div>
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
        
            let storage = localStorage.getItem('cartKey');
            storage === null ? storage = [] : storage = JSON.parse(storage);
            const productInCart = {
                id : data._id ,
                name : data.name ,
                price : data.price ,
                varnish : data.varnish ,
            }
            storage.push(productInCart);
            localStorage.setItem('cartKey', JSON.stringify(storage));

    }

    //Display cart number when browser refreshes
    function loadCartNumbers() {
        let productNumbers = localStorage.getItem('totalItems');
        if( productNumbers ) {
            cartNumber.textContent = productNumbers;
        }
    }

    //Create dropdown menu
    function dropDownMenu (product) {
        let select = `<select class = 'w-25'>`; 
        let options = product; 

        for(let i = 0; i < options.length; i++) {
            select += `<option value = '${options[i]}' class ='fs-5'>${options[i]}</option>`;
        }
        select += `</select>`;
        return select;
    }

//let arr = ['one', 'two', 'three'];
//console.log(dropDownMenu(arr))
loadCartNumbers()

    
// Reference elements
const addToCartBtn = document.getElementById('addToCart');
const cartNumber = document.getElementById('cartNumber');
const divForBtn = document.getElementById('btnDiv');
const varnishDropdown = document.getElementById('selectOption');

 //Create dropdown menu
 function dropDownMenu (product) {
    let dropDownSelect = `<select id='selectOption' class = 'w-25'>`; 
    let options = product; 

    for(let i = 0; i < options.length; i++) {
        dropDownSelect += `<option value = '${options[i]}' class ='fs-5'>${options[i]}</option>`;
    }
    dropDownSelect += `</select>`;
    return dropDownSelect;
}

//fetch data and call functions
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

fetch('http://localhost:3000/api/furniture/' + id)
   .then(response => response.json())
   .then(data => {
        let item = render(data);
        document.querySelector('main').insertBefore(item, divForBtn);

        addToCartBtn.addEventListener("click", () =>{
            storeItem(data);
            loadCartNumbers();
            popUp();
        });
   });

   function loadCartNumbers() {
    let productNumbers = localStorage.getItem('product');
    if( productNumbers ) {
      productNumbers = JSON.parse(productNumbers);
      document.getElementById('cartNumber').textContent = productNumbers.length;
    }
}

//item added to cart confirmation
function popUp () {
    document.getElementById('popUp').classList.remove('popUp');
    document.getElementById('productDiv').style.display = 'none';
    addToCartBtn.style.display='none';
    document.getElementsByTagName('footer')[0].style.display = 'none';
}
  
//Display Product 
    function render(product){
    let producto = document.createElement('div');
    producto.setAttribute('id', 'productDiv');
    producto.innerHTML = 
        ` <div id='${product._id}' class = 'productCard d-flex flex-column'>
            <img class = 'mx-auto' src="${product.imageUrl}" alt="furniture">
            <h3 class='itemHeader  mx-auto fw-bold fs-1'>${product.name}</h3>
            <p class='description  mx-auto fs-4'>${product.description}</p>
            <div class = 'mx-auto'>
                <label class= 'fs-4 fw-bold' for='varnish'>Choose a Varnish:</label>
                ${dropDownMenu(product.varnish)}
            </div>
            <div class='price mb-3 mx-auto fs-4 fw-bold'>$${product.price/100} </div>
        </div>`;

            return producto;
    }

//Add products to local storage
function storeItem (data){
    let storage = localStorage.getItem('product');
    storage === null ? storage = [] : storage = JSON.parse(storage);
    const productInCart = {
        id : data._id ,
        name : data.name ,
        price : data.price/100,
        imageUrl: data.imageUrl ,
        varnish : document.getElementById('selectOption').value,
    }
    storage.push(productInCart);
    localStorage.setItem('product', JSON.stringify(storage));
}

  
   

   







    
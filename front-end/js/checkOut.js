const confirmItems = document.getElementById('confirmItems');

displayPurchase();
loadCartNumbers();

function displayPurchase(){
    //for(let i=0; i)
    let purchases = localStorage.getItem('cartKey');
    purchases = JSON.parse(purchases);
    for (let i=0; i < purchases.length; i++){
        let purchaseDiv = document.createElement('div');
        purchaseDiv.innerHTML = 
      `
        <div class='d-flex flex-row fs-5 mt-3'>
            <div class='w-25'>
                <div class='fw-bold'>${purchases[i].name}</div>
            </div>
            <div class='w-25 d-flex justify-content-center'>
                <img class='checkoutImage' src="${purchases[i].imageUrl}" alt="furniture">
            </div>
            <div class='w-25 d-flex justify-content-center fw-bold'>${purchases[i].varnish}</div>
            <div class='d-flex justify-content-center'>
                <div class='price fs-5 fw-bold me-2'>$${purchases[i].price} </div>
            </div>
            <i id='${purchases[i].id}' class="fas fa-trash-alt"></i>
        </div>
        `;
      confirmItems.insertBefore(purchaseDiv, confirmItems.childNodes[2]);
    } 
    return purchases
}

function addListenersToBins (){
    let bins = document.querySelectorAll('i');
    for(let bin of bins){
        bin.addEventListener('click', (e)=>{
            removeItem(e.target.id);
            subtractCartNumber();
        });
    }
}

addListenersToBins();

function removeItem(productId){
    let storage = localStorage.getItem('cartKey');
    storage = JSON.parse(storage);

    for(let i=0; i < storage.length; i++){
        let counter = 0;
        if(storage[i].id == productId){
            storage.splice([i], 1)
        }
    }
    localStorage.setItem('cartKey', JSON.stringify(storage));
    location.reload();
}

function subtractCartNumber(){
    let productNumbers = localStorage.getItem('totalItems');
    productNumbers = parseInt(productNumbers);
    localStorage.setItem('totalItems', productNumbers - 1);
    cartNumber.textContent = productNumbers - 1;

   
}

// document.getElementsByTagName('button')[1].addEventListener('click', () =>{
//     let contact = {}
// })

function loadCartNumbers() {
    let productNumbers = localStorage.getItem('totalItems');
    if( productNumbers ) {
        cartNumber.textContent = productNumbers;
    }
}

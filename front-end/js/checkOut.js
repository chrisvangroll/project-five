const confirmItems = document.getElementById('confirmItems');

displayPurchase();
loadCartNumbers();

function displayPurchase(){
    //for(let i=0; i)
    let purchases = localStorage.getItem('cartKey');
    purchases = JSON.parse(purchases);
    console.log(purchases);
    for (let i=0; i < purchases.length; i++){
        let purchaseDiv = document.createElement('div');
        purchaseDiv.innerHTML = 
      `
        <div class='d-flex flex-row fs-5 mt-3' id='${purchases[i].id}'>
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
            <i class="fas fa-trash-alt"></i>
        </div>
        `;
      confirmItems.insertBefore(purchaseDiv, confirmItems.childNodes[2]);
    } 
    return purchases
}


document.getElementsByTagName('button')[1].addEventListener('click', () =>{
    let contact = {}
})

function loadCartNumbers() {
    let productNumbers = localStorage.getItem('totalItems');
    if( productNumbers ) {
        cartNumber.textContent = productNumbers;
    }
}

const confirmItems = document.getElementById('confirmItems');

function displayPurchase(){
    //for(let i=0; i)
    let purchases = localStorage.getItem('cartKey');
    purchases = JSON.parse(purchases);
    console.log(purchases);
    for (let i=0; i < purchases.length; i++){
        let purchaseDiv = document.createElement('div');
        purchaseDiv.innerHTML = 
      `
        <div class='d-flex flex-row' id='${purchases[i].id}'>
            <div class='w-25'>
                <div class='fw-bold'>${purchases[i].name}</div>
            </div>
            <div 'w-25'>
                <img class='checkoutImage' src="${purchases[i].imageUrl}" alt="furniture">
            </div>
            <div class='w-25'></div>
            <div class='w-25>
                <div class='price fs-5 fw-bold'>$${purchases[i].price} </div>
            </div>
        </div>
        `;
      confirmItems.appendChild(purchaseDiv)
    } 
    return purchases
}
//console.log(displayPurchase())

function loadCartNumbers() {
    let productNumbers = localStorage.getItem('totalItems');
    if( productNumbers ) {
        cartNumber.textContent = productNumbers;
    }
}
loadCartNumbers();
displayPurchase();
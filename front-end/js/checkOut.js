const confirmItems = document.getElementById('confirmItems');

function displayPurchase(){
    //for(let i=0; i)
    let purchases = localStorage.getItem('cartKey');
    purchases = JSON.parse(purchases);
    for (let obj of purchases){
        let purchaseDiv = document.createElement('div');
        purchaseDiv.innerHTML = 
      `
      <div>
          <div id='${obj.id}'>
            <div>${obj.name}</div>
            <img class='card-img-top' src="${obj.imageUrl}" alt="furniture">
            <div class='price fs-5 fw-bold'>$${obj.price} </div>
          </div>
      </div>`;
      confirmItems.appendChild(purchaseDiv)
    } 
    return purchases
}
console.log(displayPurchase())

function loadCartNumbers() {
    let productNumbers = localStorage.getItem('totalItems');
    if( productNumbers ) {
        cartNumber.textContent = productNumbers;
    }
}
loadCartNumbers();
displayPurchase();
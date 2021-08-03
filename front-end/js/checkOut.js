
//call functions
displayPurchase();
addListenersToBins();
sumPrices();

//Event listener for submit button
document.getElementById('submitBtn').addEventListener('click', (e)=>{
    let post = {contact: getContactInfo(), products: getProductIds()}
    submitFormData(post);
});

function submitFormData(data) {
    fetch('http://localhost:3000/api/furniture/order', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then((response) => {
      return response.json();
    }).then((data) => {
      console.log(data);
      window.location = "confirmation.html?orderId=" + data.orderId;
    }).catch((err) => {
      console.log(err);
    })
  };
  
function addListenersToBins (){
    let bins = document.querySelectorAll('i');
    for(let bin of bins){
        bin.addEventListener('click', (e)=>{
            removeItem(e.target.id);
            subtractCartNumber();
            subtractFromTotal();
        });
    }
}

function displayPurchase(){
    const confirmItems = document.getElementById('confirmItems');
    for (let i=0; i < getStorage().length; i++){
        let purchaseDiv = document.createElement('div');
        purchaseDiv.innerHTML = 
      `
        <div class='d-flex flex-row justify-content-end fs-5 mt-3'>
            <div class='w-25'>
                <div class='fw-bold'>${getStorage()[i].name}</div>
            </div>
            <div class='w-25 d-flex justify-content-center'>
                <img class='checkoutImage' src="${getStorage()[i].imageUrl}" alt="furniture">
            </div>
            <div class='w-25 d-flex justify-content-center me-2 fst-italic'>${getStorage()[i].varnish}</div>
            <div class='price fs-5 fw-bold'>${money(getStorage()[i].price)} </div>
            <i id='${getStorage()[i].id}' class="fas fa-trash-alt"></i>
        </div>
        `;
      confirmItems.insertBefore(purchaseDiv, confirmItems.childNodes[2]);
    } 
}

function getContactInfo (){
    const inputs = document.querySelectorAll('input');
    let contact = {};
    for(let input of inputs){
       if(input.id == 'firstName'){
           contact[input.id] = input.value;
       }
       if(input.id == 'lastName'){
           contact[input.id] = input.value;
       }
       if(input.id == 'address'){
           contact[input.id] = input.value;
       }
       if(input.id == 'city'){
           contact[input.id] = input.value;
       }
       if(input.id == 'email'){
           contact[input.id] = input.value;
       }
   }
   return contact;
}

function getProductIds (){
    let products =[];
    for(let product of getStorage()){
        products.push(product.id);
    }
    return products;
}

function removeItem(productId){
    let storage = getStorage();
    let counter = 0;
    for(let i=0; i < storage.length; i++){
        if(storage[i].id == productId && counter === 0){
            counter += 1;
            storage.splice([i], 1);
        }
    }
    localStorage.setItem('product', JSON.stringify(storage));
    location.reload();
}

function sumPrices() {
    const total = document.getElementById('total');
    let sum = 0;
    if(getStorage()){
        for(let product of getStorage()){
            sum += parseInt(product.price);
        }
    }
    total.textContent = money(sum);
}




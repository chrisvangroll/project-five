displayPurchase();
addListenersToBins();
sumPrices();

document.getElementById('submitBtn').addEventListener('click', (e)=>{
    let post = {contact: getContactInfo(), products: getProductIds()}
    validateForm()
    if(validateForm() !== false){
        submitFormData(post);
    }
        
    
});

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
      `<div class='d-flex cartDiv row mb-3'>
            <div class ='col-11'>
                <div class='d-flex  fs-4 row'>
                    <div class="d-flex align-items-center  col-12 col-lg-6">
                        <div class='fw-bold '>${getStorage()[i].name} <span class='fst-italic fw-normal'>(${getStorage()[i].varnish})</span></div>
                    </div>
                    <img class='col-3' src="${getStorage()[i].imageUrl}" alt="furniture">
                    <div class="d-flex justify-content-center align-items-center col-3">
                        <div class='fs-4 fw-bold '>${money(getStorage()[i].price)} </div>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-center align-items-center col-1">
                <i id='${getStorage()[i].id}' class="fas fa-trash-alt"></i>
            </div>
        </div>
        
        
        `;
      confirmItems.insertBefore(purchaseDiv, confirmItems.childNodes[2]);
    } 
}

function errorMessage(input){
    input.nextElementSibling.style.display = 'block';
    input.style.border = '1px solid #f00';
    return false
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
    setStorage(storage);
    location.reload();
}

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

function validateForm(){
    let form = document.customForm;
    let firstName = document.customForm.firstName;
    let lastName = document.customForm.lastName;
    let address = document.customForm.address;
    let city = document.customForm.city;
    let state = document.customForm.state;
    let zipCode = document.customForm.zipCode;
    let email = document.customForm.email;
    let phone = document.customForm.phone;

    if(firstName.value == "") {
       return errorMessage(firstName) 
    } 

    if(lastName.value == "") {
        return errorMessage(lastName) 
     } 
    
    if(address.value == "") {
        return errorMessage(address) 
    } 
    if(city.value == "") {
    return errorMessage(city) 
    } 

    if(state.value == "Select State") {
    return errorMessage(lastName) 
    } 

    if(zipCode.value == "") {
        return errorMessage(zipCode) 
    } 

    if(email.value == "") {
        return errorMessage(email) 
    } 

    if(phone.value == "") {
        return errorMessage(phone) 
        } 
}





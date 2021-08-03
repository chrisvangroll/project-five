loadCartNumbers()

function loadCartNumbers() {
    if(getStorage()) {
      document.getElementById('cartNumber').textContent = getStorage().length;
    }
}

function getStorage (){
    let productNumbers = localStorage.getItem('product');
    productNumbers = JSON.parse(productNumbers);
    return productNumbers;
}

function money (price){
    let formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      });
     let total = formatter.format(price)
     return total;
}

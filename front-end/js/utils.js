loadCartNumbers()

function loadCartNumbers() {
    let productNumbers = localStorage.getItem('product');
    if( productNumbers ) {
      productNumbers = JSON.parse(productNumbers);
      document.getElementById('cartNumber').textContent = productNumbers.length;
    }
}

function money (price){
    let formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      });
     let total = formatter.format(price)
     return total;
}

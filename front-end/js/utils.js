loadCartNumbers()

function loadCartNumbers() {
    let productNumbers = localStorage.getItem('product');
    if( productNumbers ) {
      productNumbers = JSON.parse(productNumbers);
      document.getElementById('cartNumber').textContent = productNumbers.length;
    }
}

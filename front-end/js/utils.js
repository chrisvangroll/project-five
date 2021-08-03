loadCartNumbers()

function loadCartNumbers() {
    let productNumbers = localStorage.getItem('totalItems');
    if( productNumbers ) {
      document.getElementById('cartNumber').textContent = productNumbers;
    }
}

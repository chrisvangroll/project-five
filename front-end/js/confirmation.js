const urlParams = new URLSearchParams(window.location.search);
const orderId = urlParams.get('orderId');

displayOrderId ();

function displayOrderId () {
    document.getElementsByTagName('span')[0].textContent = orderId;
}
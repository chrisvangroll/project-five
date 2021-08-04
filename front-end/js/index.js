
  fetch('http://localhost:3000/api/furniture')
   .then(response => response.json())
   .then(data => {
    displayProducts(data);
   });

   
function displayProducts(data) {
  for (let i = 0; i < data.length; i++){
   let item = render(data[i]);
   document.getElementById('rowDiv').appendChild(item);
  }
} 

  function render(product){
    let producto = document.createElement('div');
    producto.classList.add('col-sm-12', 'col-md-6', 'mb-5', 'col-lg-4', 'cards');
    producto.innerHTML = 
      `
        <a class = 'text-decoration-none' href='product.html?id=${product._id}' id='${product._id}'>
          <div class= 'item card'>
            <img class='card-img-top' src="${product.imageUrl}" alt="furniture">
            <div class='card-body'>
              <h5 class='card-title fs-2 fw-bold'>${product.name}</h5>
              <p class='card-text fs-5'>${product.description}</p>
              <div class='fs-5 fw-bold'>$${product.price/100} </div>
            </div>
          </div>
        </a>`;
          return producto;
  }

  


 

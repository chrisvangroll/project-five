  fetch('http://localhost:3000/api/furniture')
   .then(response => response.json())
   .then(data => {
    displayProducts(data);
   });

   function displayProducts(data) {
     for (let i = 0; i < data.length; i++){
       
      let item = render(data[i]);
      document.querySelector('main').appendChild(item);
     }
   }

   function render(product){

    let producto = document.createElement('div');
    producto.innerHTML = 
      `<a href='product.html?id=${product._id}' id='${product._id}'>
            <div class= 'item'>
              <img class='pic' src="${product.imageUrl}" alt="furniture">
              <div>
                <h2 class='itemHeader'>${product.name}</h2>
                <p class='description'>${product.description}</p>
                <div class='price'>$${product.price/100} </div>
              </div>
            </div>
          </a>`;

          return producto;
   }

   function loadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if( productNumbers ) {
      document.getElementById('cartNumber').textContent = productNumbers;
    }
}

loadCartNumbers()
 
   // //First Way
// fetch('http://localhost:3000/api/furniture')
//   .then(response => response.json())
//   .then(data => {
//     for (let i =0; i < data.length; i++){
    
//     //create elements
//     let item = document.createElement('a');
//     let name = document.createElement('h2');
//     let pic = document.createElement('img');
//     let description = document.createElement('div');
//     let price = document.createElement('div');

//     //fill elements with text 
//     name.textContent = `Price: ${data[i].name}`;
//     description.textContent = data[i].description;
//     price.textContent = `Price: $${data[i].price}`;

//     //add classes/attributes
//     item.classList.add('item');
//     item.setAttribute('href', 'https://openclassrooms.com')
//     item.setAttribute('id', data[i]._id);
//     name.classList.add('name');
//     pic.setAttribute('src', data[i].imageUrl);
//     pic.classList.add('pic');
//     description.classList.add('description');
//     price.classList.add('price');

//     //append elements
//     item.appendChild(pic);
//     item.appendChild(name);
//     item.appendChild(description);
//     item.appendChild(price);
//     document.querySelector('body').appendChild(item);
//     }
//   });

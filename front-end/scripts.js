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

 //Second Way

 let productsContainer = document.getElementById('products');

fetch('http://localhost:3000/api/furniture')
  .then(response => response.json())
  .then(data => {
    
    data.forEach(element => {
      for (let i = 0; i < data.length; i++){

        let productId = data[i]._id;
        let name = data[i].name;
        let description = data[i].description;
        let price = data[i].price;
        let imageUrl = data[i].imageUrl;

        console.log(typeof(productId));
        console.log(productId);

        // let product = document.createElement('div');

        // product.innerHTML = `
				// <a href="product.html?id=${productId}">
				// 	<div class="product shadow">
				// 		<img src="${imageUrl}" alt="Product Image">
				// 		<button>
				// 			<img src="images/add-to-basket.svg" alt="add-to-cart">
				// 		</button>
				// 		<div class="content">
				// 			<h3>${name}</h3>
				// 			<p class="desc">${description}</p>
				// 			<span class="price">$ ${price}</span>
				// 		</div>
				// 	</div>
				// </a>`;
        // productsContainer.appendChild(product);
      }
    });
  });
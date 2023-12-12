window.onload = () => {
    loadProducts();
};

const productsWrapper = document.getElementById("products-wrapper");
const modalWrapper = document.getElementById("modal-wrapper");


const onSubmit = (e, id, mode) => {
  e.preventDefault();


  if(mode === 'update') {

      updateProduct(id, {
          name: e.target.elements.name.value,
          description: e.target.elements.description.value,
          brand: e.target.elements.brand.value,
          imageUrl: e.target.elements.image.value,
          price: e.target.elements.price.value
      });

  } else {

   createProduct({
      name: e.target.elements.name.value,
      description: e.target.elements.description.value,
      brand: e.target.elements.brand.value,
      imageUrl: e.target.elements.image.value,
      price: e.target.elements.price.value
  })

  }

  
}


let isEditable = true;
const onEdit = (id) => {
// add edit toggle


}

const onDelete = (id) => {
  // call delete service
  deleteProduct(id);
}


const mocks = [
  {
  id: 1,
  name: 'Espy',
  description: 'Espy description',
  brand: 'Perù',
  imageUrl: '/#',
  price: 100
},
{
  id: 2,
  name: 'Espy2',
  description: 'Espy description2',
  brand: 'Perù2',
  imageUrl: '/#2',
  price: 100
}
]



function displayProducts(products) {
  productsWrapper.innerHTML = "";

  console.log(products);

mocks.forEach((product) => {


  productsWrapper.innerHTML += `
  <div class="col">
      <div class="card shadow-sm h-100">
          <form onsubmit="onSubmit(event, ${product.id}, 'update')">

              <img src="${product.imageUrl}" class="img-fluid card-img-top ${isEditable ? "hidden" : ""}" alt="${product.name}">
              <input name="image" type="text" class="${isEditable ? "" : "hidden"}" value="${product.imageUrl}" required></input>

              <div class="card-body">

                  <h5 class="card-title ${isEditable ? "hidden" : ""}">${product.name}</h5>
                  <input name="name" type="text" class="${isEditable ? "" : "hidden"}" value="${product.name}" required></input>


                  <p class="card-text rounded-pill bg-dark mb-2 ${isEditable ? "hidden" : "badge"}">${product.brand}</p>
                  <input name="brand" type="text" class="${isEditable ? "" : "hidden"}" value="${product.brand}" required></input>
                  

                  <p class="fs-4 ${isEditable ? "hidden" : ""}">${product.price}€</p>
                  <input name="price" type="number" class="${isEditable ? "" : "hidden"}" value="${product.price}" required></input>

                  <p class="card-text rounded-pill bg-dark mb-2 ${isEditable ? "hidden" : "badge"}">${product.description}</p>
                  <textarea name="description" type="text" class="${isEditable ? "" : "hidden"}" required>${product.description}</textarea>

              </div>

              <div class="${isEditable ? "" : "hidden"}">
                  <button type="submit" class="btn btn-success">Update</button>

              </div>

          </form>

          <div class="${isEditable ? "hidden" : ""}">
              <button class="btn btn-success" onclick="onEdit(${product.id})">Edit</button>
              <button class="btn btn-success" onclick="onDelete(${product.id})">Delete</button>
              <button class="btn btn-success">
              <a href='../details/details.html?id=${product.id}'>Find out more!</a>
              </button>
          </div>

      </div>  
      
  </div>

`;
});
}


const onClose = () => {
  modalWrapper.classList.toggle('hidden');
};

function viewCreateCard() {

  modalWrapper.classList.toggle('hidden');

  modalWrapper.innerHTML = `
  <div class="col">
      <div class="card shadow-sm h-100">
          <form onsubmit="onSubmit(event, 'create')">

              <input name="image" type="text" value="" required></input>

              <div class="card-body">

                  <input name="name" type="text" value="" required></input>

                  <input name="brand" type="text" value="" required></input>
                  
                  <input name="price" type="number" value="" required></input>
 
                  <textarea name="description" type="text" required></textarea>

              </div>

              <div>
                  <button type="submit" class="btn btn-success">Create</button>
                  <button type="button" class="btn btn-success" onclick="onClose(event)">Close</button>
              </div>

          </form>

      </div>  
      
  </div>

`;

}
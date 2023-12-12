const searchParams = new URLSearchParams(window.location.search);

const id = searchParams.get("id");

const mode = searchParams.get("mode");

const isEdit = mode === "Edit";

document.getElementById("title-head").innerHTML = mode;
document.getElementById("title").innerHTML = mode;

const wrapperEditProducts = document.getElementById("edit-products");

window.onload = () => {
    isEdit ? loadProductById(id, mode) : editProducts();
};

const onSubmit = (event) => {
    event.preventDefault();

      if (mode === "Edit") {
        updateProduct(id, {
            name: event.target.elements.name.value,
            description: event.target.elements.description.value,
            brand: event.target.elements.brand.value,
            imageUrl: event.target.elements.image.value,
            price: parseInt(event.target.elements.price.value)
          });
      } else {
        createProduct({
            name: event.target.elements.name.value,
            description: event.target.elements.description.value,
            brand: event.target.elements.brand.value,
            imageUrl: event.target.elements.image.value,
            price: parseInt(event.target.elements.price.value)
        });
      }

    window.location.assign("../home/home.html");
}

const onReset = () => {
    document.getElementById("my-form").reset();
}
function editProducts(product) {

  wrapperEditProducts.innerHTML = "";

  wrapperEditProducts.innerHTML = `
      <div class="col">
          <div class="card shadow-sm h-100 justify-content-center">
              <form id="my-form" onsubmit="onSubmit(event)">              
                  <div class="card-body d-flex flex-column justify-content-center ">
                      <input name="image" type="text" value="${isEdit ? product.imageUrl : ''} " required></input>
                      <input name="name" type="text" class="" value="${isEdit ? product.name : ''}" required></input>
                      <input name="brand" type="text" class="" value="${isEdit ? product.brand : ''}" required></input>
                      <textarea name="description" type="text" placeholder="description" required>${isEdit ? product.description : ''}</textarea>
                      <input name="price" type="number" class="" value="${isEdit ? product.price : ''}" required></input>
                  </div>
  
                  <div class="d-flex justify-content-evenly">
                      <button type="submit" class="btn btn-success">${mode}</button>
                      <button type="button" class="btn btn-success" onclick="onReset()">Reset</button>
                      <button type="button" class="btn btn-success"><a class="text-decoration-none text-white" href="../home/home.html">Close</a>
                      </button>
                  </div>
  
              </form>
          </div>     
      </div>
    `;
}

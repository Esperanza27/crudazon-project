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
                      <label for="image" class="form-label fw-bold">Image</label>
                      <input name="image" type="text" placeholder="write the URL of your product photo" value="${isEdit ? product.imageUrl : ''} " required></input>
                      <br/>
                      <label for="name" class="form-label fw-bold">Name</label>
                      <input name="name" type="text" placeholder="write the name of your product" value="${isEdit ? product.name : ''}" required></input>
                      <br/>
                      <label for="brand" class="form-label fw-bold">Brand</label>
                      <input name="brand" type="text" placeholder="write the brand of your product" value="${isEdit ? product.brand : ''}" required></input>
                      <br/>
                      <label for="description" class="form-label fw-bold">Description</label>
                      <textarea name="description" type="text" placeholder="write the description of your product" required>${isEdit ? product.description : ''}</textarea>
                      <br/>
                      <label for="price" class="form-label fw-bold">Price</label>
                      <input name="price" type="number" placeholder="write the price of your product in number" value="${isEdit ? product.price : ''}" required></input>
                      </div>
  
                  <div class="d-flex justify-content-evenly mb-3 mt-1 ">
                      <button type="submit" class="btn btn-secondary " style="width:70px" >${mode}</button>
                      <button type="button" class="btn btn-secondary " onclick="onReset()" style="width:70px">Reset</button>
                      <button type="button" class="btn btn-secondary" style="width:70px"><a class="text-decoration-none text-white" href="../home/home.html">Close</a>
                      </button>
                  </div>
  
              </form>
          </div>     
      </div>
    `;
}

const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get("id");
console.log(id);
const wrapperEditProducts = document.getElementById("edit-products");
window.onload = () => {
  loadProductById(id);
};

function editProducts(product) {
  console.log(product);
  wrapperEditProducts.innerHTML = "";
  console.log(product);
  wrapperEditProducts.innerHTML = `
      <div class="col">
          <div class="card shadow-sm h-100 justify-content-center" >
              <form onsubmit="onSubmit(event, ${product._id}, )">                 
                  <div class="card-body d-flex flex-column justify-content-center ">
                      <input name="image" type="text" value="${product.imageUrl} " required></input>
                      <input name="name" type="text" class="" value="${product.name}" required></input>
                      <input name="brand" type="text" class="" value="${product.brand}" required></input>
                      <input name="price" type="number" class="" value="${product.price}" required></input>
                  </div>
  
                  <div class="d-flex justify-content-evenly">
                      <button type="submit" class="btn btn-success">Update</button>
                      <button type="button" class="btn btn-success"><a class="text-decoration-none text-white" href="../home/home.html">Close</a>
                      </button>
                  </div>
  
              </form>
          </div>     
      </div>
    `;
}

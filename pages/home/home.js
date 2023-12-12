window.onload = () => {
  loadProducts();
};


const productsWrapper = document.getElementById("products-wrapper");
const modalWrapper = document.getElementById("modal-wrapper");

const onEdit = (id) => {
  window.location.assign(`../modifies/modifies.html?id=${id}&mode=Edit`);
};
console.log();
function onCreate() {
  window.location.assign(`../modifies/modifies.html?mode=Create`);
}

const onDelete = (id) => {
  deleteProduct(id);
  location.reload();
};

const onDetails = (id) => {
  window.location.assign("../details/details.html?id=" + id);
};

function displayProducts(products) {
  productsWrapper.innerHTML = "";

  console.log(products);

products.forEach((product) => {
    productsWrapper.innerHTML += `
    <div class="col ">
        <div class="card shadow-sm h-100 justify-content-center p-4 " style="width: 18rem;">
            
                <img src="${product.imageUrl}" class="img-fluid card-img-top" style="height: 220px; object-fit: cover; alt="${product.name}">

                <div class="card-body d-flex flex-column justify-content-center ">
                    <h4 class="card-title d-flex justify-content-center"> ${product.name} </h4>
                    <p class="card-text  d-flex justify-content-center rounded-pill bg-info mb-2">${product.brand}</p>                  
                    <p class="fs-4 d-flex justify-content-center">${product.price}€</p>
                </div>

            <div class="d-flex justify-content-around">
                <button class="btn" onclick="onEdit('${product._id}')">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
</svg></i></button>
         
                <button class="btn" onclick="onDelete('${product._id}')"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-trash-fill text-danger" viewBox="0 0 16 16">
                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
              </svg></button>
                <button class="btn btn-info" onclick="onDetails('${product._id}')" > 
                <a href='../details/details.html?id=${product._id}' class="text-decoration-none text-black">View more!</a>
                </button>
            </div>
        </div>    
    </div>
  `;
  });
}

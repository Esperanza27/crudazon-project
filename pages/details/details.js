       const params = new URLSearchParams(window.location.search)
        const id = params.get("id");
        console.log(id);
        window.onload = () => {
          loadProductById(id, "details");
          };
            
        const wrapperDetailsProduct = document.getElementById("product-details-wrapper");
        function detailsProduct(product) {
            wrapperDetailsProduct.innerHTML= "";
            wrapperDetailsProduct.innerHTML = `
            <div class="card mb-3" style="min-width: 540px;">
            <div class="row g-0">
              <div class="col-12 col-md-7">
                <img src="${product.imageUrl}" class="img-fluid rounded-start" style="height: 400px width:100%; object-fit: cover; alt="${product.name}">
              </div>
              <div class="col-12 col-md-5">
                <div class="card-body h-100">
                  <h2 class="card-title">${product.name}</h2>
                  <br/>
                  <p class="card-text">${product.brand}</p>
                  <br/>
                  <p class="card-text">${product.description}</p>
                  <br/>
                  <p class="card-text display-4 d-flex justify-content-center">${product.price}€</p>
                  <br/>
                  <div class="d-flex justify-content-end align-content-end mb-0">
              <button type="button" class="btn btn-secondary style="width:70px""><a class="text-decoration-none text-white" href="./../home/home.html">Close</a>
              </button></div> 
                </div>
              </div>
              
            </div>
          </div>
`;

            
        }
            /* const imgContent = document.querySelector("#img-content")

            const img = document.createElement("img")
            img.src = picInfos.src.original
            img.classList.add("img-fluid", "rounded-lg", "shadow-lg")

            imgContent.appendChild(img)

            const h2 = document.createElement("h2")
            const photographerLink = document.createElement("a")
            photographerLink.classList.add("text-dark", "d-inline-block", "mt-4")
            photographerLink.href = picInfos.photograper_url
            photographerLink.innerText = picInfos.photographer
            h2.appendChild(photographerLink)
            imgContent.appendChild(h2)

            const backLink = document.createElement("a")
            backLink.href = "./index.html"
            backLink.innerText = "⬅️ Go back Home"
            backLink.className = "mb-5"
            imgContent.appendChild(backLink)
 */

       
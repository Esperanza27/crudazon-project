const token ="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc1Y2ExZDNkYWRhMDAwMThhNjllNzQiLCJpYXQiOjE3MDIyMTgyNjksImV4cCI6MTcwMzQyNzg2OX0.tSROMA9zIya85k0CXYLA0gQVb8cvRt31uMWya6cuvzA";
const url = "https://striveschool-api.herokuapp.com/api/product/";
const headers = {
  "Authorization": token,
  "Content-Type": "application/json",
};

/* add GET ALL */
const loadProducts = () => {
  fetch(url, {
    headers,
    method: "GET",
  })
    .then((resp) => resp.json())
    .then((resp) => displayProducts(resp))
    .catch((err) => console.error(err));
};

/* add GET BY ID (params: id)*/
const loadProductById = (id, mode) => {
  fetch("https://striveschool-api.herokuapp.com/api/product/"+ id, {
    headers,
    method: "GET",
  })
    .then((resp) => resp.json())
    .then((resp) => mode === 'Edit' ? editProducts(resp) : detailsProduct(resp))
    .catch((err) => console.error(err));
};

/* add PUT (params: id, data) */
const updateProduct = (id, payload) => {
  fetch(`https://striveschool-api.herokuapp.com/api/product/${id}`, {
    headers,
    method: "PUT",
    body: JSON.stringify(payload),
  })
    .then((resp) => resp.json())
    .catch((err) => console.error(err));
};

/* add POST (params: data) */
const createProduct = (payload) => {
  fetch(`https://striveschool-api.herokuapp.com/api/product`, {
    headers,
    method: "POST",
    body: JSON.stringify(payload),
  })
    .then((resp) => resp.json())
    .catch((err) => console.error(err));
};

/* add DELETE (params: id)*/
const deleteProduct = (id) => {
  fetch(`https://striveschool-api.herokuapp.com/api/product/${id}`, {
    headers,
    method: "DELETE",
  })
    .then((resp) => resp.json())
    .catch((err) => console.error(err));
};

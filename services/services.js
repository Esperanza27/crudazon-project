const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc1Y2ExZDNkYWRhMDAwMThhNjllNzQiLCJpYXQiOjE3MDIyMTgyNjksImV4cCI6MTcwMzQyNzg2OX0.tSROMA9zIya85k0CXYLA0gQVb8cvRt31uMWya6cuvzA";
const headers = {
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc1Y2ExZDNkYWRhMDAwMThhNjllNzQiLCJpYXQiOjE3MDIyMTgyNjksImV4cCI6MTcwMzQyNzg2OX0.tSROMA9zIya85k0CXYLA0gQVb8cvRt31uMWya6cuvzA",
};

/* add GET ALL */
const loadProducts = () => {
  fetch("https://striveschool-api.herokuapp.com/api/product", {
    headers,
    method: "GET",
  })
    .then((resp) => resp.json())
    .then((resp) => displayProducts(resp))
    .catch((err) => console.error(err.message));
};

/* add GET BY ID (params: id)*/
const loadProductById = (id) => {
  fetch(`https://striveschool-api.herokuapp.com/api/product/${id}`, {
    headers,
    method: "GET",
  })
    .then((resp) => resp.json())
    .catch((err) => console.error(err.message));
};

/* add PUT (params: id, data) */
const updateProduct = (id, payload) => {
  fetch(`https://striveschool-api.herokuapp.com/api/product/${id}`, {
    headers,
    method: "PUT",
    body: payload,
  })
    .then((resp) => resp.json())
    .catch((err) => console.error(err.message));
};

/* add POST (params: data) */
const createProduct = (payload) => {
  fetch(`https://striveschool-api.herokuapp.com/api/product`, {
    headers,
    method: "POST",
    body: payload,
  })
    .then((resp) => resp.json())
    .catch((err) => console.error(err.message));
};

/* add DELETE (params: id)*/
const deleteProduct = (id) => {
  fetch(`https://striveschool-api.herokuapp.com/api/product/${id}`, {
    headers,
    method: "DELETE",
  })
    .then((resp) => resp.json())
    .catch((err) => console.error(err.message));
};

const token =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc1Y2ExZDNkYWRhMDAwMThhNjllNzQiLCJpYXQiOjE3MDIyMTgyNjksImV4cCI6MTcwMzQyNzg2OX0.tSROMA9zIya85k0CXYLA0gQVb8cvRt31uMWya6cuvzA";
const url = "https://striveschool-api.herokuapp.com/api/product/";
const headers = {
  Authorization: token,
  "Content-Type": "application/json",
};

/* add GET ALL */
const loadProducts = async () => {
  const resp = await fetch(url, {
    headers,
    method: "GET",
  });
  if (resp.ok) {
    const data = await resp.json();
    displayProducts(data);
  } else {
    /* window.location.href = `../pages/error/error.html`; */
    window.alert("Products not found");
  }
};

/* add GET BY ID (params: id)*/
const loadProductById = async (id, mode) => {
  const resp = await fetch(
    "https://striveschool-api.herokuapp.com/api/product/" + id,
    {
      headers,
      method: "GET",
    }
  );

  if (resp.ok) {
    const data = await resp.json();
    mode === "Edit" ? editProducts(data) : detailsProduct(data);
  } else {
    /* window.location.href = `../pages/error/error.html`; */
    window.alert("Product not found");
  }
};

/* add PUT (params: id, data) */
const updateProduct = async (id, payload) => {
  const resp = await fetch(
    `https://striveschool-api.herokuapp.com/api/product/${id}`,
    {
      headers,
      method: "PUT",
      body: JSON.stringify(payload),
    }
  );

  if (!resp.ok) {
    /* window.location.href = `../pages/error/error.html`; */
    window.alert("Update with error");
  }
};

/* add POST (params: data) */
const createProduct = async (payload) => {
  const resp = await fetch(
    `https://striveschool-api.herokuapp.com/api/product`,
    {
      headers,
      method: "POST",
      body: JSON.stringify(payload),
    }
  );

  if (!resp.ok) {
    /* window.location.href = `../pages/error/error.html`; */
    window.alert("Create with error");
  }
};

/* add DELETE (params: id)*/
const deleteProduct = async (id) => {
  const resp = await fetch(
    `https://striveschool-api.herokuapp.com/api/product/${id}`,
    {
      headers,
      method: "DELETE",
    }
  );
  if (!resp.ok) {
    /* window.location.href = `../pages/error/error.html`; */
    window.alert("Delete with error");
  }
};

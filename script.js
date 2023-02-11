const productsContainer = document.querySelector(".products");

fetch("https://dummyjson.com/products")
.then((response)=> response.json())
.then((data) => {
    let items = data.products;
    items = items.map((item) => {
        return `
        <div class="product" data-id="${item.id}">
        <img class="product-thumbnail" src="${item.images[0]}" alt="${item.title}">
        <div class="product-details">
            <div>
                <div class="title">Title:<span>${item.title}</span></div>
                <div class="brand">Brand:<span>${item.brand}</span></div>
            </div>
            <div class="price">${item.price}</div>
            <div class="rating">${item.rating}</div>
            <div class="stock">${item.stock}</div>
        </div>
        
    </div>
        `
    });
    productsContainer.innerHTML = items.join(""); // join all the items as a single string and render in products
})
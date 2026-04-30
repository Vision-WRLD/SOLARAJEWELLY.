let page = 1;
const perPage = 6;

function getFilters(){
  return {
    category: document.getElementById("categoryFilter").value,
    colour: document.getElementById("colourFilter").value,
    price: document.getElementById("priceFilter").value,
    sort: document.getElementById("sortFilter").value
  };
}
function filteredProducts(){
  const f = getFilters();
  let list = [...PRODUCTS];

  if(f.category !== "all") list = list.filter(p => p.category === f.category);
  if(f.colour !== "all") list = list.filter(p => p.colours.includes(f.colour));
  if(f.price !== "all"){
    const parts = f.price.split("-").map(Number);
    list = list.filter(p => p.price >= parts[0] && p.price <= parts[1]);
  }
  if(f.sort === "low") list.sort((a,b)=>a.price-b.price);
  if(f.sort === "high") list.sort((a,b)=>b.price-a.price);
  if(f.sort === "name") list.sort((a,b)=>a.name.localeCompare(b.name));
  return list;
}
function renderCollection(){
  const grid = document.getElementById("productGrid");
  const count = document.getElementById("productCount");
  const pagination = document.getElementById("pagination");
  const list = filteredProducts();
  const totalPages = Math.max(1, Math.ceil(list.length / perPage));
  if(page > totalPages) page = totalPages;

  const visible = list.slice((page-1)*perPage, page*perPage);
  count.textContent = list.length;

  grid.innerHTML = visible.map(p => `
    <article class="product-card">
      <a href="product.html?id=${p.id}" class="product-img">
        <img src="${p.images[0]}" alt="${p.name}">
      </a>
      <div class="product-info">
        <h3>${p.name}</h3>
        <p class="price">${money(p.price)}</p>
        <p class="product-meta">${p.colours.join(" / ")} · ${p.sizes[0]}</p>
        <div class="card-actions">
          <a class="small-btn" href="product.html?id=${p.id}">View</a>
          <button class="small-btn gold" type="button" onclick='addToBag(PRODUCTS.find(item => item.id === "${p.id}"))'>Quick Buy</button>
        </div>
      </div>
    </article>
  `).join("");

  pagination.innerHTML = Array.from({length: totalPages}, (_, i) => `
    <button class="page-btn ${page === i+1 ? "active" : ""}" type="button" onclick="page=${i+1};renderCollection();window.scrollTo({top:0,behavior:'smooth'});">${i+1}</button>
  `).join("");
}

document.addEventListener("DOMContentLoaded", function(){
  ["categoryFilter","colourFilter","priceFilter","sortFilter"].forEach(id => {
    document.getElementById(id).addEventListener("change", function(){
      page = 1;
      renderCollection();
    });
  });
  document.getElementById("clearFilters").addEventListener("click", function(){
    document.getElementById("categoryFilter").value = "all";
    document.getElementById("colourFilter").value = "all";
    document.getElementById("priceFilter").value = "all";
    document.getElementById("sortFilter").value = "featured";
    page = 1;
    renderCollection();
  });
  renderCollection();
});
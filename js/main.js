function money(n){ return "$" + Number(n).toLocaleString(); }

function getBag(){
  try { return JSON.parse(localStorage.getItem("solaraBag")) || []; }
  catch(e){ return []; }
}
function saveBag(bag){
  localStorage.setItem("solaraBag", JSON.stringify(bag));
  renderBag();
}
function addToBag(product, options){
  const bag = getBag();
  bag.push({
    key: product.id + "-" + Date.now(),
    id: product.id,
    name: product.name,
    price: product.price,
    image: product.images[0],
    colour: options?.colour || product.colours[0],
    size: options?.size || product.sizes[0],
    qty: 1
  });
  saveBag(bag);
  openBag();
}
function removeFromBag(key){
  saveBag(getBag().filter(item => item.key !== key));
}
function openBag(){
  const drawer = document.getElementById("bagDrawer");
  const dim = document.getElementById("screenDim");
  if(drawer) drawer.classList.add("open");
  if(dim) dim.classList.add("show");
}
function closeBag(){
  const drawer = document.getElementById("bagDrawer");
  const dim = document.getElementById("screenDim");
  if(drawer) drawer.classList.remove("open");
  if(dim) dim.classList.remove("show");
}
function renderBag(){
  const bag = getBag();
  const count = document.getElementById("bagCount");
  const items = document.getElementById("bagItems");
  const total = document.getElementById("bagTotal");
  if(count) count.textContent = bag.length;
  if(items){
    if(!bag.length){
      items.innerHTML = '<p class="product-meta">Your bag is empty.</p>';
    } else {
      items.innerHTML = bag.map(item => `
        <div class="bag-item">
          <img src="${item.image}" alt="${item.name}">
          <div>
            <strong>${item.name}</strong>
            <p class="product-meta">${item.colour} · ${item.size}</p>
            <p>${money(item.price)}</p>
          </div>
          <button class="remove" type="button" onclick="removeFromBag('${item.key}')">Remove</button>
        </div>
      `).join("");
    }
  }
  if(total) total.textContent = money(bag.reduce((sum,item)=>sum + item.price,0));
}

document.addEventListener("DOMContentLoaded", function(){
  const rain = document.getElementById("diamondRain");
  if(rain){
    for(let i=0;i<44;i++){
      const d = document.createElement("span");
      d.style.left = Math.random()*100 + "vw";
      d.style.animationDuration = (9 + Math.random()*13) + "s";
      d.style.animationDelay = (-Math.random()*14) + "s";
      d.style.width = d.style.height = (4 + Math.random()*7) + "px";
      d.style.opacity = (0.12 + Math.random()*0.26).toFixed(2);
      rain.appendChild(d);
    }
  }

  const open = document.getElementById("openBag");
  const close = document.getElementById("closeBag");
  const dim = document.getElementById("screenDim");
  const menu = document.getElementById("mobileMenu");
  const nav = document.getElementById("navLinks");

  if(open) open.addEventListener("click", openBag);
  if(close) close.addEventListener("click", closeBag);
  if(dim) dim.addEventListener("click", closeBag);
  if(menu && nav) menu.addEventListener("click", () => nav.classList.toggle("open"));

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: .12 });
  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

  renderBag();
});
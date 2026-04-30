let product;
let selectedColour;
let selectedSize;

function getProduct(){
  const id = new URLSearchParams(window.location.search).get("id");
  return PRODUCTS.find(p => p.id === id) || PRODUCTS[0];
}
function setImage(index){
  const img = document.getElementById("mainProductImage");
  img.src = product.images[index];
  document.querySelectorAll(".thumbs button").forEach((button, i) => {
    button.classList.toggle("active", i === index);
  });
}
function renderProduct(){
  product = getProduct();
  selectedColour = product.colours[0];
  selectedSize = product.sizes[0];

  document.title = product.name + " | SolaraJewelly";
  document.getElementById("productCategory").textContent = product.category;
  document.getElementById("productName").textContent = product.name;
  document.getElementById("productPrice").textContent = money(product.price);
  document.getElementById("productDescription").textContent = product.description;

  document.getElementById("thumbs").innerHTML = product.images.map((src, i) => `
    <button type="button" onclick="setImage(${i})"><img src="${src}" alt="${product.name} image ${i+1}"></button>
  `).join("");

  document.getElementById("colourChoices").innerHTML = product.colours.map(c => `
    <button class="choice colour-choice ${c === selectedColour ? "active" : ""}" type="button" data-colour="${c}">${c}</button>
  `).join("");

  document.getElementById("sizeChoices").innerHTML = product.sizes.map(s => `
    <button class="choice size-choice ${s === selectedSize ? "active" : ""}" type="button" data-size="${s}">${s}</button>
  `).join("");

  setImage(0);

  document.querySelectorAll(".colour-choice").forEach(button => {
    button.addEventListener("click", function(){
      selectedColour = this.dataset.colour;
      document.querySelectorAll(".colour-choice").forEach(b => b.classList.remove("active"));
      this.classList.add("active");
      const imageIndex = Math.max(0, product.colours.indexOf(selectedColour)) % product.images.length;
      setImage(imageIndex);
    });
  });

  document.querySelectorAll(".size-choice").forEach(button => {
    button.addEventListener("click", function(){
      selectedSize = this.dataset.size;
      document.querySelectorAll(".size-choice").forEach(b => b.classList.remove("active"));
      this.classList.add("active");
    });
  });

  document.getElementById("addCurrentProduct").addEventListener("click", function(){
    addToBag(product, { colour: selectedColour, size: selectedSize });
  });

  const zoomBox = document.getElementById("zoomBox");
  const mainImg = document.getElementById("mainProductImage");
  zoomBox.addEventListener("mousemove", function(e){
    const rect = zoomBox.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    mainImg.style.transformOrigin = `${x}% ${y}%`;
    mainImg.style.transform = "scale(1.85)";
  });
  zoomBox.addEventListener("mouseleave", function(){
    mainImg.style.transformOrigin = "center";
    mainImg.style.transform = "scale(1)";
  });
}

document.addEventListener("DOMContentLoaded", renderProduct);
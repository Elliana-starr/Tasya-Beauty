let productContents = [
    {
        id: 1,
        name: "Body Soap",
        image: "asset/PrdBody-Soap-600x600.png",
        originalPrice: "$25.00",
        salePrice: "$20.00",
        isOnSale: true
    },
    {
        id: 2,
        name: "Toner",
        image: "asset/PrdToner-600x600.png",
        originalPrice: "$20.00",
        salePrice: "$12.00",
        isOnSale: true
    },
    {
        id: 3,
        name: "Night Cream",
        image: "asset/PrdNight-Cream-600x600.png",
        originalPrice: "$15.00",
        salePrice: "$10.00",
        isOnSale: true
    }
]


const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const productCard = document.getElementById("product_card");

document.querySelectorAll(".faq-toggle").forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const item = toggle.closest(".faq-item");
    const content = item.querySelector(".faq-content");
    const iconWrap = item.querySelector(".faq-icon-wrap");
    const icon = item.querySelector(".faq-icon");
    const label = item.querySelector(".faq-label");
    const isOpen = item.classList.contains("faq-open");

    // Reset every item first
    document.querySelectorAll(".faq-item").forEach((el) => {
      el.classList.remove("faq-open");
      el.querySelector(".faq-content").style.maxHeight = null;

      const w = el.querySelector(".faq-icon-wrap");
      w.classList.remove("bg-pink-400", "border-pink-400", "text-white");
      w.classList.add("border-pink-300", "text-pink-400");

      // reset icon back to chevron-up
      const ic = el.querySelector(".faq-icon");
      ic.classList.remove("bi-chevron-down");
      ic.classList.add("bi-chevron-up");

      const l = el.querySelector(".faq-label");
      l.classList.remove("text-pink-400");
      l.classList.add("text-gray-700");
    });

    // Open the clicked one if it wasn't already open
    if (!isOpen) {
      item.classList.add("faq-open");
      content.style.maxHeight = content.scrollHeight + "px";

      iconWrap.classList.remove("border-pink-300", "text-pink-400");
      iconWrap.classList.add("bg-pink-400", "border-pink-400", "text-white");

      // swap to chevron-down when open
      icon.classList.remove("bi-chevron-up");
      icon.classList.add("bi-chevron-down");

      label.classList.remove("text-gray-700");
      label.classList.add("text-pink-400");
    }
  });
});

mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

document.querySelectorAll(".mobile-dropdown-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const panel = btn.nextElementSibling;
    panel.classList.toggle("hidden");
    const icon = btn.querySelector("svg");
    icon.classList.toggle("rotate-180");
  });
});

// Example: cart count hook (increment on cart button click, for demo purposes)
let count = 0;
document
  .querySelectorAll("#cartCount, .lg\\:hidden .absolute")
  .forEach(() => {});



//   Render product cards dynamically

productContents.forEach((product) => {
    productCard.innerHTML += `
    <div  data-aos="fade-up" class="reveal-item card relative text-center bg-white rounded-3xl shadow-lg p-6 pb-8">
        <span class="absolute top-4 right-4 bg-pink-400 text-white text-xs font-semibold uppercase rounded-full w-12 h-12 flex items-center justify-center">Sale!</span>
        <img src="${product.image}" class="card-img-top mx-auto mb-4" alt="Night Cream">
        <div class="card-body">
          <h5 class="card-title text-lg font-semibold text-gray-800 mb-2">${product.name}</h5>
          <p class="card-text text-sm mb-4">
            <del class="text-gray-400 font-medium">${product.originalPrice}</del>
            <span class="text-gray-800 font-semibold underline">${product.salePrice}</span>
          </p>
        </div>
        <div class="card-footer">
          <button class="bg-pink-300 hover:bg-pink-400 transition text-white font-semibold uppercase text-sm tracking-wide px-8 py-3 rounded-full">add to cart</button>
        </div>
      </div>
    `
})
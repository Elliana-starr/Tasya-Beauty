let productContents = [
    {
        id : 1,
        name : "Sunscreen",
        image : "asset/images/PrdSunscreen-600x600.png",
        price : "$15.00"
    },
    {
        id : 2,
        name : "Body Scrub",
        image : "asset/images/PrdBody-Scrub-cropped.png",
        price : "$20.00"
    },
    {
        id : 3,
        name : "Face Oil",
        image : "asset/images/PrdFace-Oil-600x600.png",
        price : "$15.00"
    },
    {
        id : 4,
        name : "Milk Cleanser",
        image : "asset/images/PrdMilk-Cleanser.png",
        price : "$25.00"
    },
    {
        id : 5,
        name : "Facial Wash",
        image : "asset/images/PrdFacial-Wash-600x600.png", 
        price : "$20.00"
    },
    {
        id : 6,
        name : "Shampoo",
        image : "asset/images/PrdShampoo-600x600.png",
        price : "$15.00",
        originalPrice : "$25.00",
        salePrice : "$20.00",
        isOnSale : true
    },
    {
        id : 7,
        name : "Body Soap",
        image : "asset/images/PrdBody-Soap-600x600.png",
        originalPrice : "$25.00",
        salePrice : "$20.00",
        isOnSale : true
    },
   {
    id: 8,
      name : "Toner",
        image : "asset/images/PrdToner-600x600.png",
        originalPrice : "$15.00",
        salePrice : "$10.00",
        isOnSale : true
   },
   {
    id: 9,
     name : "Night Cream",
        image : "asset/images/PrdNight-Cream-600x600.png",
        originalPrice : "$15.00",
        salePrice : "$10.00",
        isOnSale : true
   }
]



// navbar toggle
 const mobileMenuBtn = document.getElementById("mobileMenuBtn");
      const mobileMenu = document.getElementById("mobileMenu");
      const productCard = document.getElementById("products_card");
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

        // Render product cards dynamically
        productContents.forEach((product) => {
  const priceBlock = product.isOnSale
    ? `<p class="text-sm mb-4">
         <del class="text-gray-400 font-medium">${product.originalPrice}</del>
         <span class="text-gray-800 font-semibold underline">${product.salePrice}</span>
       </p>`
    : `<p class="text-sm text-gray-700 mb-4">${product.price}</p>`;

  const saleBadge = product.isOnSale
    ? `<span class="absolute top-4 right-4 bg-pink-400 text-white text-xs font-semibold uppercase rounded-full w-12 h-12 flex items-center justify-center">Sale!</span>`
    : "";

  productCard.innerHTML += `
    <div data-aos="fade-up" class="reveal-item card relative text-center bg-white border border-gray-100 rounded-3xl shadow-lg p-6 pb-8">
      ${saleBadge}
      <img src="${product.image}" class="mx-auto mb-4 w-40 h-40 object-contain" alt="${product.name}">
      <h5 class="text-lg font-semibold text-gray-800 mb-2">${product.name}</h5>
      ${priceBlock}
      <button class="bg-pink-300 hover:bg-pink-400 transition text-white font-semibold uppercase text-sm tracking-wide px-8 py-3 rounded-full">add to cart</button>
    </div>
  `;
})
  
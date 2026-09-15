let relatedProductsContents = [
    {
        id: 1,
        name: "Body Scrub",
        image:"asset/images/PrdBody-Scrub-600x600.png",
        price: "$20.00"
    },
    {
        id: 2,
        name: "Face Oil",
        image:"asset/images/PrdFace-Oil-600x600.png",
        price: "$12.00"
    },
    {
        id: 3,
        name: "Facial Wash",
        image:"asset/images/PrdFacial-Wash-600x600.png",
        price: "$20.00"
    },
    {
         id: 4,
        name: "Toner",
        image:"asset/images/PrdToner-600x600.png",
        price: "$25.00"
    }
]




//  navbar mbile script 
    
      const mobileMenuBtn = document.getElementById("mobileMenuBtn");
      const mobileMenu = document.getElementById("mobileMenu");
      const relatedProductsCards = document.getElementById("relatedProducts_cards")

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

        //  Product tabs script 
    
      document.querySelectorAll(".tab-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
          document.querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("active", "text-pink-400"));
          document.querySelectorAll(".tab-panel").forEach((p) => p.classList.add("hidden"));

          btn.classList.add("active", "text-pink-400");
          const target = document.getElementById("tab-" + btn.dataset.tab);
          if (target) target.classList.remove("hidden");
        });
      });
   

    //  Quantity stepper script
  
      const qtyInput = document.getElementById("qtyInput");
      document.getElementById("qtyMinus").addEventListener("click", () => {
        const val = Math.max(1, (parseInt(qtyInput.value, 10) || 1) - 1);
        qtyInput.value = val;
      });
      document.getElementById("qtyPlus").addEventListener("click", () => {
        const val = (parseInt(qtyInput.value, 10) || 1) + 1;
        qtyInput.value = val;
      });
   

    // Product image hover-zoom script 
    
      (function () {
        const frame = document.getElementById("zoomFrame");
        const img = document.getElementById("zoomImg");
        if (!frame || !img) return;

        frame.addEventListener("mouseenter", () => {
          frame.classList.add("is-zoomed");
        });

        frame.addEventListener("mousemove", (e) => {
          const rect = frame.getBoundingClientRect();
          const x = ((e.clientX - rect.left) / rect.width) * 100;
          const y = ((e.clientY - rect.top) / rect.height) * 100;
          img.style.transformOrigin = `${x}% ${y}%`;
        });

        frame.addEventListener("mouseleave", () => {
          frame.classList.remove("is-zoomed");
          img.style.transformOrigin = "center center";
        });
      })();
  
//Rendering cards dynamically
      relatedProductsContents.forEach((product) => {
        relatedProductsCards.innerHTML += 
        `
        <div data-aos="fade-up" class="reveal-item card relative text-center bg-white rounded-3xl shadow-lg p-6 pb-8">
        <span class="absolute top-4 right-4 bg-pink-400 text-white text-xs font-semibold uppercase rounded-full w-12 h-12 flex items-center justify-center">Sale!</span>
        <img src="${product.image}" class="card-img-top mx-auto mb-4" alt="${product.name}">
        <div class="card-body">
          <h5 class="card-title text-lg font-semibold text-gray-800 mb-2">${product.name}</h5>
          <p class="card-text text-sm mb-4 text-gray-800 font-semibold">${product.price}</p>
        </div>
        <div class="card-footer">
          <button class="bg-pink-300 hover:bg-pink-400 transition text-white font-semibold uppercase text-sm tracking-wide px-8 py-3 rounded-full">add to cart</button>
        </div>
      </div>

        `
        
      })
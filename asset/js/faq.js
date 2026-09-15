let faqContents = [
    {
    id: 1,
    title: "Enjoy The Stay, Love The Shine",
    date: "October 23, 2025",
    comments: "No Comments",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec erat turpis. Suspendisse at maximus sapien. Sed aliquet nisi quam.",
    image: "asset/images/young-beautiful-woman-with-a-bottle-of-perfume-2022-05-13-01-04-39-utc.jpg"
    },
    {
    id: 2,
    title: "Sparkle On The Inside And Out",
    date: "November 5, 2025",
    comments: "No Comments",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec erat turpis. Suspendisse at maximus sapien. Sed aliquet nisi quam.",
    image: "asset/images/young-girl-with-care-beautiful-healthy-clean-skin-2022-01-28-12-31-23-utc.jpg"
  },
  {
    id: 3,
    title: "Inner Beauty Is The Best Beauty",
    date: "December 12, 2025",
    comments: "No Comments",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec erat turpis. Suspendisse at maximus sapien. Sed aliquet nisi quam.",
    image: "asset/images/beautiful-african-woman-black-t-shirt-portrait-afr-2022-01-29-07-01-03-utc.jpg"
  }
]



const faqCards = document.getElementById("faqCards");
//  FAQ script 
    
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
            iconWrap.classList.add(
              "bg-pink-400",
              "border-pink-400",
              "text-white",
            );

            // swap to chevron-down when open
            icon.classList.remove("bi-chevron-up");
            icon.classList.add("bi-chevron-down");

            label.classList.remove("text-gray-700");
            label.classList.add("text-pink-400");
          }
        });
      });

    // navbar mobile script 
    
      const mobileMenuBtn = document.getElementById("mobileMenuBtn");
      const mobileMenu = document.getElementById("mobileMenu");
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
    

        faqContents.forEach((product) => {
            faqCards.innerHTML += `
            
             <div class="flex flex-col sm:flex-row bg-white rounded-xl shadow-md overflow-hidden">
            <div class="w-full sm:w-1/3 shrink-0">
              <img src="${product.image}" class="w-full h-52 sm:h-full object-cover" alt="">
            </div>
            <div class="w-full sm:w-2/3 p-6">
              <h5 class="text-xl font-semibold text-gray-800 mb-3">${product.title}</h5>
              <small class="text-sm text-gray-500 mb-4 block">${product.date} / ${product.comments}</small>
              <p class="text-base text-gray-500 mb-3">p${product.excerpt}</p>
              <a href="single_post.html">
                <p class="text-pink-500 font-semibold text-base">Read More +</p>
              </a>
            </div>
          </div>

            `
        })
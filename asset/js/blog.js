let blogContents = [
    {
        id: 1,
        title: "Kiss Your Thin Lips Goodbye!",
        image: "asset/images/beautiful-young-woman-with-a-pink-larkspur-flower-2022-08-14-01-29-05-utc.jpg",
        excerpt: "  Nam vel viverra libero, eget lobortis est. Proin blandit enim augue, non lobortis purus ultricies in. Donec ut venenatis justo. Vestibulum tellus lectus, feugiat nec, pretium quis, sem.",
        date: "October 23, 2025",
        comments: "No Comments"
    },
    {
        id: 2,
        title: "Enjoy The Stay, Love The Shine",
        image: "asset/images/young-beautiful-woman-with-a-bottle-of-perfume-2022-05-13-01-04-39-utc.jpg",
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec erat turpis. Suspendisse at maximus sapien. Sed aliquet nisi quam,",
        date: "October 30, 2025",
        comments: "No Comments"
    },
    {
        id: 3,
        title: "Sparkle On The Inside And Out",
        image: "asset/images/young-girl-with-care-beautiful-healthy-clean-skin-2022-01-28-12-31-23-utc.jpg",
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec erat turpis. Suspendisse at maximus sapien. Sed aliquet nisi quam.",
        date: "November 15, 2025",
        comments: "No Comments"
    },
    {
        id: 4,
        title: "Inner Beauty Is The Best Beaut",
        image: "asset/images/beautiful-african-woman-black-t-shirt-portrait-afr-2022-01-29-07-01-03-utc.jpg",
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec erat turpis. Suspendisse at maximus sapien. Sed aliquet nisi quam.",
        date: "December 20, 2025",
        comments: "No Comments"
    }
]





const blogCards = document.getElementById("blogCards");
//   navbar mobile script
    
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

        // Rendering Cards dynamically
        blogContents.forEach((product) => {
            blogCards.innerHTML += `
            
             <div data-aos="fade-up-right" class="flex flex-col w-full bg-white rounded-2xl shadow-md hover:shadow-lg hover:shadow-pink-300 transition-shadow duration-300 overflow-hidden">
        <img src="${product.image}" class="w-full h-56 sm:h-64 lg:h-72 object-cover" alt="Card image">
        <div class="flex flex-col flex-1 justify-between p-6">
          <div>
            <h5 class="text-xl font-semibold text-gray-800 mb-3">${product.title}</h5>
            <p class="text-base text-gray-500 mb-3">
           ${product.excerpt}
          </div>
          <a href="single_post.html">
            <span class="text-pink-500 font-semibold text-base">Read More +</span>
          </a>
        </div>
        <div class="border-t border-gray-100 px-6 py-4">
          <small class="text-gray-400 text-sm">October 25, 2025 <span><i class="bi bi-dot"></i></span> No Comments</small>
        </div>
      </div>

            `
        })
   
// let singlePostContents = [
//     {
//     id: 1,
//     title: "Enjoy The Stay, Love The Shine",
//     date: "October 23, 2025",
//     image: "asset/young-beautiful-woman-with-a-bottle-of-perfume-2022-05-13-01-04-39-utc.jpg"
//     },
//     {
//     id: 2,
//     title: "Sparkle On The Inside And Out",
//     date: "October 25, 2025",
//     image: "asset/young-girl-with-care-beautiful-healthy-clean-skin-2022-01-28-12-31-23-utc.jpg"
//     },
//     {
//     id: 3,
//     title: "Inner Beauty Is The Best Beauty",
//     date: "November 20, 2025",
//     image: "asset/beautiful-african-woman-black-t-shirt-portrait-afr-2022-01-29-07-01-03-utc.jpg"
//     }
// ]



    //  const singlePostCards = document.getElementById("singlePostCards");
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

        // Rendering cards dynamically
    //     singlePostContents.forEach((product) => {
    //         singlePostCards.innerHTML += `
            
    //  <div class="flex items-center gap-4 py-4 first:pt-0 last:pb-0">
    //   <img src="${product.image}" alt="Card Image">
    //   <div class="min-w-0">
    //     <h5 class="text-base font-semibold text-gray-800 mb-1">${product.title}</h5>
    //     <small class="text-xs text-gray-400 block mb-2">${product.date}</small>
    //     <a href="#" class="text-pink-500 font-semibold text-xs">Read More +</a>
    //   </div>
    // </div>

    //         `
    //     })
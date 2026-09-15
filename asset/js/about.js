

// Count-up animation script
   
      (function () {
        const counters = document.querySelectorAll(".count-up");
        if (counters.length === 0) return;

        function animateCounter(el) {
          const target = parseFloat(el.dataset.target);
          const decimals = parseInt(el.dataset.decimals || "0", 10);
          const suffix = el.dataset.suffix || "";
          const duration = 1500;
          const startTime = performance.now();

          function tick(now) {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const value = target * eased;
            el.textContent = value.toFixed(decimals) + suffix;

            if (progress < 1) {
              requestAnimationFrame(tick);
            } else {
              el.textContent = target.toFixed(decimals) + suffix;
            }
          }
          requestAnimationFrame(tick);
        }

        if (!("IntersectionObserver" in window)) {
          counters.forEach(animateCounter);
          return;
        }

        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.4 },
        );

        counters.forEach((el) => observer.observe(el));
      })();
    

     
      (function () {
        const counters = document.querySelectorAll(".count-up");
        if (counters.length === 0) return;

        function animateCounter(el) {
          const target = parseFloat(el.dataset.target);
          const decimals = parseInt(el.dataset.decimals || "0", 10);
          const suffix = el.dataset.suffix || "";
          const duration = 1500;
          const startTime = performance.now();

          function tick(now) {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const value = target * eased;
            el.textContent = value.toFixed(decimals) + suffix;

            if (progress < 1) {
              requestAnimationFrame(tick);
            } else {
              el.textContent = target.toFixed(decimals) + suffix;
            }
          }
          requestAnimationFrame(tick);
        }

        if (!("IntersectionObserver" in window)) {
          counters.forEach(animateCounter);
          return;
        }

        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.4 },
        );

        counters.forEach((el) => observer.observe(el));
      })();
   

//  navbar mobile script 
    
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
  


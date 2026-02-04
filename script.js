// Dynamic Menu
const menu = {
    snacks: ["Samosa", "Aloo Patties", "Paneer Patties"],
    sandwiches: ["Veg Sandwich", "Veg Cheese Sandwich"],
    frankies: ["Veg Frankie", "Veg Cheese Frankie"],
    beverages: ["Tea", "Coffee", "Cold Drinks"]
  };
  
  const menuDiv = document.getElementById("menu-items");
  const search = document.getElementById("search");
  
  function renderMenu(filter = "") {
    menuDiv.innerHTML = "";
    for (let category in menu) {
      let items = menu[category].filter(item =>
        item.toLowerCase().includes(filter.toLowerCase())
      );
      if (items.length > 0) {
        let html = `<h3>${category}</h3><ul>`;
        items.forEach(i => html += `<li>${i}</li>`);
        html += "</ul>";
        menuDiv.innerHTML += html;
      }
    }
  }
  search.addEventListener("input", e => renderMenu(e.target.value));
  renderMenu();
  
  // Contact Form Validation
  document.getElementById("contactForm").addEventListener("submit", e => {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let msg = document.getElementById("msg").value;
  
    if (!name || !email || !msg) {
      document.getElementById("formMsg").textContent = "Please fill all fields!";
      return;
    }
  
    document.getElementById("formMsg").textContent = "Message sent successfully!";
    e.target.reset();
  });
  
  // Scroll Animation
  const elements = document.querySelectorAll(".fade");
  window.addEventListener("scroll", () => {
    elements.forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight - 50) {
        el.classList.add("show");
      }
    });
  });

  window.addEventListener("load", () => {
    if (window.location.hash === "#menu") {
      document.querySelectorAll(".fade").forEach(el => {
        el.classList.add("show");
      });
    }
  });
  
  
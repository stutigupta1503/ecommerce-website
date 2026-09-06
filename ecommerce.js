
const closeBtn = document.querySelector(".close");
const openBtn = document.querySelector(".ham");
const menu = document.querySelector(".menu");
const searchInput = document.getElementById("input");
const searchIcon = document.querySelector(".search .s");
const productCards = document.querySelectorAll(".section2 .container .items");
const container = document.querySelector(".section2 .container");


if (closeBtn && openBtn && menu) {
  closeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    menu.style.visibility = "hidden";
  });

  openBtn.addEventListener("click", () => {
    menu.style.visibility = "visible";
  });
}


const noResults = document.createElement("div");
noResults.id = "no-results";
noResults.textContent = "No products found matching your search.";
noResults.style.display = "none";
noResults.style.width = "100%";
noResults.style.textAlign = "center";
noResults.style.padding = "40px 20px";
noResults.style.fontSize = "18px";
noResults.style.fontWeight = "600";
noResults.style.color = "#888";
container.appendChild(noResults);

// --- Live Search Functionality ---
function filterProducts() {
  const query = searchInput.value.toLowerCase().trim();
  let visibleCount = 0;

  productCards.forEach((card) => {
    const title = card.querySelector(".name")?.textContent.toLowerCase() || "";
    const description = card.querySelector(".info")?.textContent.toLowerCase() || "";

    
    if (title.includes(query) || description.includes(query)) {
      card.style.display = "flex";
      visibleCount++;
    } else {
      card.style.display = "none";
    }
  });


  noResults.style.display = visibleCount === 0 ? "block" : "none";
}


if (searchInput) {
  searchInput.addEventListener("input", filterProducts);
  
 
  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      searchInput.value = "";
      filterProducts();
    }
  });
}


if (searchIcon) {
  searchIcon.addEventListener("click", (e) => {
    e.preventDefault();
    filterProducts();
  });
}


// Get references to the HTML elements
const searchContainer = document.querySelector(".search");
const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("searchInput");

// Toggle the "active" class on the search container
searchButton.addEventListener("click", function () {
    searchContainer.classList.toggle("active");
    if (searchContainer.classList.contains("active")) {
        // Focus on the input element after making it active
        searchInput.focus();
    }
});
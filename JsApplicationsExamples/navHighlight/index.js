// Get the navbar items
var navbarItems = document.querySelectorAll("li a");

// Add click event listener to each item
navbarItems.forEach(function (item) {
  item.addEventListener("click", function () {
    // Remove 'active' class from all items
    navbarItems.forEach(function (item) {
      item.classList.remove("active");
    });

    // Add 'active' class to the clicked item
    this.classList.add("active");
  });
});

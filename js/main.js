const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

// Declaring SelectItems function

function selectItem(e) {
  // remove border
  removeBorder();
  removeShow();
  // Add border to current tab
  this.classList.add("tab-border");
  // Grab Content items from the DOM
  console.log(this.id);

  const tabContentItem = document.querySelector(`#${this.id}-content`);
  // Add show class
  tabContentItem.classList.add("show");
}

// Declaring Remove Border Function
function removeBorder() {
  tabItems.forEach((item) => item.classList.remove("tab-border"));
}

// Declaring Show Function
function removeShow() {
  tabContentItems.forEach((item) => item.classList.remove("show"));
}

// Listen for click events
tabItems.forEach((item) => item.addEventListener("click", selectItem));

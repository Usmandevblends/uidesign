document.addEventListener("DOMContentLoaded", function () {
  // Get the current URL
  const currentURL = window.location.href;

  // Define the mapping of URLs to li elements' IDs
  const pageMap = {
    "index.html": "dashboard",
    "categories.html": "categories",
    "collections.html": "collections",
    "blog-posts.html": "blog-posts",
    "design-blog.html": "design-blog",
    "components.html": "components",
  };

  // Loop through the mapping and add the active class to the matching li
  for (const [page, id] of Object.entries(pageMap)) {
    if (currentURL.includes(page)) {
      document.getElementById(id).classList.add("active");
    } else {
      document.getElementById(id).classList.remove("active");
    }
  }
});

function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const mainContent = document.getElementById("mainContent");
  if (window.innerWidth <= 576) {
    sidebar.classList.toggle("show");
    sidebar.classList.toggle("hidden");
  } else {
    sidebar.classList.toggle("sidebar-collapsed");
    mainContent.classList.toggle("main-collapsed");
    sidebar.classList.toggle("hidden");
    mainContent.classList.toggle("hidden");
  }
}

let table = new DataTable("#example");

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("addCredit").addEventListener("click", function () {
    var creditRow = document.createElement("div");
    creditRow.className = "credit-row form-row";

    var nameCol = document.createElement("div");
    nameCol.className = "col";
    var nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.className = "form-control";
    nameInput.placeholder = "Name + Role";
    nameCol.appendChild(nameInput);

    var linkCol = document.createElement("div");
    linkCol.className = "col";
    var linkInput = document.createElement("input");
    linkInput.type = "text";
    linkInput.className = "form-control";
    linkInput.placeholder = "Url Link";
    linkCol.appendChild(linkInput);

    var buttonCol = document.createElement("div");
    buttonCol.className = "col-auto";
    var removeButton = document.createElement("button");
    removeButton.className = "btn btn-danger remove-credit";
    removeButton.type = "button";
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", function () {
      creditRow.remove();
    });
    buttonCol.appendChild(removeButton);

    creditRow.appendChild(nameCol);
    creditRow.appendChild(linkCol);
    creditRow.appendChild(buttonCol);

    document.getElementById("moreCredits").appendChild(creditRow);
  });

  document.querySelectorAll(".remove-credit").forEach(function (button) {
    button.addEventListener("click", function () {
      button.closest(".credit-row").remove();
    });
  });
});

// Initialize Emoji Picker
const picker = new EmojiButton();
const button = document.querySelector("#emojiButton");
const input = document.querySelector("#messageInput");

button.addEventListener("click", () => {
  picker.togglePicker(button);
});

picker.on("emoji", (emoji) => {
  input.value += emoji;
});

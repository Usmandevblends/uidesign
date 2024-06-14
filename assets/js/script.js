document.addEventListener("DOMContentLoaded", function () {
  var items = document.querySelectorAll(".nav li");

  items.forEach(function (item) {
    item.addEventListener("click", function () {
      // Remove the active class from all items
      items.forEach(function (el) {
        el.classList.remove("active");
      });

      // Add the active class to the clicked item
      this.classList.add("active");
    });
  });
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

  // 

  let creditCounter = 1;

  document.getElementById('addCreditBtn').addEventListener('click', function () {
      creditCounter++;
      const creditDiv = document.createElement('div');
      creditDiv.classList.add('form-group');
      creditDiv.innerHTML = `
          <div class="form-row">
              <div class="col">
                  <input type="text" class="form-control" id="credit${creditCounter}" placeholder="Name + Role">
              </div>
              <div class="col">
                  <input type="text" class="form-control" id="url${creditCounter}" placeholder="Url Link">
              </div>
          </div>
      `;
      document.getElementById('moreCredits').appendChild(creditDiv);
  });
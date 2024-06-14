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

  let table = new DataTable('#example');
 
  table.on('click', 'tbody tr', function () {
      let data = table.row(this).data();
   
      alert('You clicked on ' + data[0] + "'s row");
  });
document.addEventListener("DOMContentLoaded", function() {
    var items = document.querySelectorAll('.nav li');

    items.forEach(function(item) {
        item.addEventListener('click', function() {
            // Remove the active class from all items
            items.forEach(function(el) {
                el.classList.remove('active');
            });

            // Add the active class to the clicked item
            this.classList.add('active');
        });
    });
});

function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    var mainContent = document.getElementById('mainContent');
    sidebar.classList.toggle('sidebar-collapsed');
    mainContent.classList.toggle('main-collapsed');
}
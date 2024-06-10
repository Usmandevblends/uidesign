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
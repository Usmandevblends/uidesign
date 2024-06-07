document.addEventListener("DOMContentLoaded", function() {
    const headerToggle = document.getElementById('header-toggle');
    const navBar = document.getElementById('nav-bar');
    const mainContent = document.getElementById('main-content');
    const navLinks = document.querySelectorAll('.nav_link');

    headerToggle.addEventListener('click', () => {
        navBar.classList.toggle('collapsed');
        mainContent.classList.toggle('collapsed');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
        });
    });
});

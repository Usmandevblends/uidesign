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
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('mainContent');
    if (window.innerWidth <= 576) {
        sidebar.classList.toggle('show');
    } else {
        sidebar.classList.toggle('sidebar-collapsed');
        mainContent.classList.toggle('main-collapsed');
    }
}

        // Sample data
        const data = {
            labels: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00'],
            datasets: [
                {
                    label: 'Sales',
                    data: [10, 20, 30, 40, 50, 60, 70],
                    borderColor: 'blue',
                    backgroundColor: 'rgba(0, 0, 255, 0.1)',
                    fill: true,
                    hidden: false
                },
                {
                    label: 'Revenue',
                    data: [15, 25, 35, 45, 55, 65, 75],
                    borderColor: 'green',
                    backgroundColor: 'rgba(0, 255, 0, 0.1)',
                    fill: true,
                    hidden: false,
                },
                {
                    label: 'Customers',
                    data: [5, 15, 25, 35, 45, 55, 65],
                    borderColor: 'orange',
                    backgroundColor: 'rgba(255, 165, 0, 0.1)',
                    fill: true,
                    hidden: false
                }
            ]
        };

        // Chart configuration
        const config = {
            type: 'line',
            data: data,
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        };

        // Render chart
        const myChart = new Chart(
            document.getElementById('myChart'),
            config
        );

        // Checkbox event listeners
        document.getElementById('salesCheckbox').addEventListener('change', function() {
            myChart.data.datasets[0].hidden = !this.checked;
            myChart.update();
        });

        document.getElementById('revenueCheckbox').addEventListener('change', function() {
            myChart.data.datasets[1].hidden = !this.checked;
            myChart.update();
        });

        document.getElementById('customersCheckbox').addEventListener('change', function() {
            myChart.data.datasets[2].hidden = !this.checked;
            myChart.update();
        });
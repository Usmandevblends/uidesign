new Chart(document.getElementById("chartjs-doughnut"), {
    type: "doughnut",
    data: {
      labels: ["Social", "Search Engines", "Direct", "Other"],
      datasets: [{
        data: [260, 125, 54, 146],
        backgroundColor: [
          window.theme.primary,
          window.theme.success,
          window.theme.warning,
          "#dee2e6"
        ],
        borderColor: "transparent"
      }]
    },
    options: {
      maintainAspectRatio: false,
      cutoutPercentage: 65,
    }
  });


  new Chart(document.getElementById("chartjs-line"), {
    type: "line",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [{
        label: "Sales ($)",
        fill: true,
        backgroundColor: "transparent",
        borderColor: window.theme.primary,
        data: [2115, 1562, 1584, 1892, 1487, 2223, 2966, 2448, 2905, 3838, 2917, 3327]
      }, {
        label: "Orders",
        fill: true,
        backgroundColor: "transparent",
        borderColor: "#adb5bd",
        borderDash: [4, 4],
        data: [958, 724, 629, 883, 915, 1214, 1476, 1212, 1554, 2128, 1466, 1827]
      }]
    },
    options: {
      scales: {
        xAxes: [{
          reverse: true,
          gridLines: {
            color: "rgba(0,0,0,0.05)"
          }
        }],
        yAxes: [{
          borderDash: [5, 5],
          gridLines: {
            color: "rgba(0,0,0,0)",
            fontColor: "#fff"
          }
        }]
      }
    }
  });

  
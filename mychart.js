// mychart
const ctx = document.getElementById("myChart");

new Chart(ctx, {
  type: "line",
  data: {
    labels: ["A", "B", "C", "D"],
    datasets: [
      {
        label: "# of Votes",
        data: [6, 1, 5, 1],
        backgroundColor: "#ffffff",
        borderColor: "rgb(75, 192, 192)",
        pointHoverBackgroundColor: "red",
        borderWidth: 0.5,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});


// my chart 1

const ctx1 = document.getElementById("myChart-1");

new Chart(ctx1, {
  type: "line",
  data: {
    labels: ["A", "B", "C", "D"],
    datasets: [
      {
        label: "# of Votes",
        data: [2, 4, 6, 3],
        backgroundColor: "#ffffff",
        borderColor: "rgb(75, 192, 192)",
        pointHoverBackgroundColor: "red",
        borderWidth: 0.5,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});


// my chart 2
const ctx2 = document.getElementById("myChart-2");

new Chart(ctx2, {
  type: "line",
  data: {
    labels: ["A", "B", "C", "D"],
    datasets: [
      {
        label: "# of Votes",
        data: [6, 2, 5, 4],
        backgroundColor: "#ffffff",
        borderColor: "rgb(255, 0, 0)",
        pointHoverBackgroundColor: "red",
        borderWidth: 0.5,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

// my chart 3
const ctx3 = document.getElementById("myChart-3");

new Chart(ctx3, {
  type: "line",
  data: {
    labels: ["A", "B", "C", "D"],
    datasets: [
      {
        label: "# of Votes",
        data: [6, 2, 5, 1],
        backgroundColor: "#ffffff",
        borderColor: "rgb(255, 255, 255)",
        pointHoverBackgroundColor: "red",
        borderWidth: 0.5,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});


// Barchart
const barchart = document.getElementById('Barchart');

  new Chart(barchart, {
    type: 'bar',
    data: {
      labels: ['1-2 Month', '2-4 Month', '5-6 Month', '7-8 Month', '9-10 Month', '11-12 Month'],
      datasets: [{
        label: 'Search',
        data: [12, 14, 3, 5, 2, 3],
        borderWidth: 1
      },{
        label: 'Paid Ads',
        data: [9, 11, 1, 8, 5, 3],
        borderWidth: 1
      },{
        label: 'Organic Search',
        data: [12, 15, 3, 1, 2, 4],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
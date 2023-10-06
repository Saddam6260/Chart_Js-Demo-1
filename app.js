// First Chart Type Bar
const firstChart = document.getElementById("firstChart");

new Chart(firstChart, {
  type: "bar",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
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

const country = ["Bangladesh", "Pakistan", "Egypt", "India", "Insonesia"];
const bgColor = ["#2a9d8f", "#780000", "#023e8a", "#ff8fab", "#5a189a"];
const value = [250000, 120000, 108000, 300000, 800000];

// Secound Chart Type Bar Color Change
const secountChart = document.getElementById("secoundChart");

new Chart(secountChart, {
  type: "bar",
  data: {
    labels: country,
    datasets: [
      {
        backgroundColor: bgColor,
        data: value,
      },
    ],
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: "Top 5 Country",
    },
  },
});

// Third Chart Type Pie
const thirdChart = document.getElementById("thirdChart");

new Chart("thirdChart", {
  type: "pie",
  data: {
    labels: country,
    datasets: [
      {
        backgroundColor: bgColor,
        data: value,
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "Top 5 Countryies Mosque",
    },
  },
});

// Four Chart Type Doughnut
const fourChart = document.getElementById("fourChart");

new Chart("fourChart", {
  type: "doughnut",
  data: {
    labels: country,
    datasets: [
      {
        backgroundColor: bgColor,
        data: value,
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "Top 5 Countryes Mosque",
    },
  },
});

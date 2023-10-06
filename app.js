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
const piebgColor = ["#ffcad4", "#0d1321", "#7b2cbf", "#ffd500", "#aaa1c8"];

new Chart("thirdChart", {
  type: "pie",
  data: {
    labels: country,
    datasets: [
      {
        backgroundColor: piebgColor,
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
const doughnutbgColor = ["#c1121f", "#ffd60a", "#3a5a40", "#ffddd2", "#f72585"];

new Chart("fourChart", {
  type: "doughnut",
  data: {
    labels: country,
    datasets: [
      {
        backgroundColor: doughnutbgColor,
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

// Five Chart Type scatter
const fiveChart = document.getElementById("fiveChart");
const xyValue = [
  { x: 50, y: 7 },
  { x: 60, y: 8 },
  { x: 70, y: 8 },
  { x: 80, y: 9 },
  { x: 90, y: 9 },
  { x: 100, y: 9 },
  { x: 110, y: 10 },
  { x: 120, y: 11 },
  { x: 130, y: 14 },
  { x: 140, y: 14 },
  { x: 150, y: 15 },
];

new Chart("fiveChart", {
  type: "scatter",
  data: {
    datasets: [
      {
        pointRedius: 4,
        pointBackgroundColor: "#a2d2ff",
        data: xyValue,
      },
    ],
  },
});

// Six Chart Type Line
const yValue = [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];
const xValue = [7, 8, 12, 10, 9, 12, 13, 14, 10, 16, 17];

const sixChart = document.getElementById("sixChart");

new Chart("sixChart", {
  type: "line",
  data: {
    labels: yValue,
    datasets: [
      {
        fill: false,
        lineTension: 0,
        backgroundColor: "#ffd60a",
        borderColor: "#8338ec",
        data: xValue,
      },
    ],
  },
  options: {
    legend: { display: false },
    scales: {
      yAxes: [{ ticks: { min: 6, max: 16 } }],
    },
  },
});

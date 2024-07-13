import Chart from 'chart.js/auto';

(async function() {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  // Function to organize data by year and month
  const organizeDataByMonth = (data) => {
    const organizedData = {};
    data.forEach(item => {
      const year = item.Year;
      const month = item.Month;
      const label = `${month} ${year}`; // Create a label in the format "Jan 2013"
      if (!organizedData[label]) {
        organizedData[label] = item.logan_intl_flights;
      } else {
        organizedData[label] += item.logan_intl_flights; // Sum flights if the label already exists (this might be optional based on your data structure)
      }
    });
    return organizedData;
  };


  const loganFlightsData = [
    { Year: 2013, Month: 'Jan', logan_intl_flights: 2986 },
    { Year: 2013, Month: 'Feb', logan_intl_flights: 2587 },
    { Year: 2013, Month: 'Mar', logan_intl_flights: 3250 },
    { Year: 2013, Month: 'Apr', logan_intl_flights: 3150 },
    { Year: 2013, Month: 'May', logan_intl_flights: 3050 },
    { Year: 2013, Month: 'Jun', logan_intl_flights: 3450 },
    { Year: 2013, Month: 'Jul', logan_intl_flights: 3550 },
    { Year: 2013, Month: 'Aug', logan_intl_flights: 3650 },
    { Year: 2013, Month: 'Sep', logan_intl_flights: 3750 },
    { Year: 2013, Month: 'Oct', logan_intl_flights: 3850 },
    { Year: 2013, Month: 'Nov', logan_intl_flights: 3950 },
    { Year: 2013, Month: 'Dec', logan_intl_flights: 4050 },
    { Year: 2014, Month: 'Jan', logan_intl_flights: 2786 },
    { Year: 2014, Month: 'Feb', logan_intl_flights: 2387 },
    { Year: 2014, Month: 'Mar', logan_intl_flights: 3050 },
    { Year: 2014, Month: 'Apr', logan_intl_flights: 2950 },
    { Year: 2014, Month: 'May', logan_intl_flights: 2850 },
    { Year: 2014, Month: 'Jun', logan_intl_flights: 3250 },
    { Year: 2014, Month: 'Jul', logan_intl_flights: 3350 },
    { Year: 2014, Month: 'Aug', logan_intl_flights: 3450 },
    { Year: 2014, Month: 'Sep', logan_intl_flights: 3550 },
    { Year: 2014, Month: 'Oct', logan_intl_flights: 3650 },
    { Year: 2014, Month: 'Nov', logan_intl_flights: 3750 },
    { Year: 2014, Month: 'Dec', logan_intl_flights: 3850 },
    { Year: 2015, Month: 'Jan', logan_intl_flights: 2886 },
    { Year: 2015, Month: 'Feb', logan_intl_flights: 2487 },
    { Year: 2015, Month: 'Mar', logan_intl_flights: 3150 },
    { Year: 2015, Month: 'Apr', logan_intl_flights: 3050 },
    { Year: 2015, Month: 'May', logan_intl_flights: 2950 },
    { Year: 2015, Month: 'Jun', logan_intl_flights: 3350 },
    { Year: 2015, Month: 'Jul', logan_intl_flights: 3450 },
    { Year: 2015, Month: 'Aug', logan_intl_flights: 3550 },
    { Year: 2015, Month: 'Sep', logan_intl_flights: 3650 },
    { Year: 2015, Month: 'Oct', logan_intl_flights: 3750 },
    { Year: 2015, Month: 'Nov', logan_intl_flights: 3850 },
    { Year: 2015, Month: 'Dec', logan_intl_flights: 3950 },
    { Year: 2016, Month: 'Jan', logan_intl_flights: 3086 },
    { Year: 2016, Month: 'Feb', logan_intl_flights: 2687 },
    { Year: 2016, Month: 'Mar', logan_intl_flights: 3350 },
    { Year: 2016, Month: 'Apr', logan_intl_flights: 3250 },
    { Year: 2016, Month: 'May', logan_intl_flights: 3150 },
    { Year: 2016, Month: 'Jun', logan_intl_flights: 3550 },
    { Year: 2016, Month: 'Jul', logan_intl_flights: 3650 },
    { Year: 2016, Month: 'Aug', logan_intl_flights: 3750 },
    { Year: 2016, Month: 'Sep', logan_intl_flights: 3850 },
    { Year: 2016, Month: 'Oct', logan_intl_flights: 3950 },
    { Year: 2016, Month: 'Nov', logan_intl_flights: 4050 },
    { Year: 2016, Month: 'Dec', logan_intl_flights: 4150 },
  ];

   // Organize data by month and year for Logan International Flights
  const loganFlightsByMonth = organizeDataByMonth(loganFlightsData);

  // Create a bar chart for Logan International Flights
  const loganFlightsBarChartElement = document.getElementById('logan_flights_bar_chart');

  new Chart(loganFlightsBarChartElement, {
    type: 'bar',
    data: {
      labels: Object.keys(loganFlightsByMonth), // Use the labels directly from organized data
      datasets: [{
        label: 'Logan International Flights',
        data: Object.values(loganFlightsByMonth), // Use the data values directly from organized data
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      }]
    },
    options: {
      maintainAspectRatio: false,
      responsive: true,
      plugins: {},
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Number of Flights',
            color: 'black',
            family: 'Arial',
          },
          ticks: {
            color: 'black'
          }
        },
        x: {
          title: {
            display: true,
            text: 'Month',
            color: 'black',
            family: 'Arial',
          },
          ticks: {
            color: 'black'
          }
        }
      }
    }
  });

  // Create a line chart for Logan International Flights
  const loganFlightsLineChartElement = document.getElementById('logan_flights_line_chart');

  new Chart(loganFlightsLineChartElement, {
    type: 'line',
    data: {
      labels: Object.keys(loganFlightsByMonth), // Use the labels directly from organized data
      datasets: [{
        label: 'Logan International Flights',
        data: Object.values(loganFlightsByMonth), // Use the data values directly from organized data
        fill: false,
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        pointBackgroundColor: 'rgba(54, 162, 235, 1)',
        pointBorderColor: 'rgba(75, 192, 192, 1)',
        pointRadius: 4,
        pointHoverRadius: 6,
        pointHitRadius: 10,
        pointHoverBackgroundColor: 'rgba(75, 192, 192, 1)',
        pointHoverBorderColor: 'rgba(220, 220, 220, 1)',
      }]
    },
    options: {
      maintainAspectRatio: false,
      responsive: true,
      plugins: {},
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Number of Flights',
            color: 'black',
            family: 'Arial',
          },
          ticks: {
            color: 'black'
          }
        },
        x: {
          title: {
            display: true,
            text: 'Month',
            color: 'black',
            family: 'Arial',
          },
          ticks: {
            color: 'black'
          }
        }
      }
    }
  });

})();

import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Bar } from 'react-chartjs-2';
import './BarChart.css';
import Chart from 'chart.js/auto';

const BarChart = () => {
  useEffect(() => {
    let chartInstance = null;

    const data = {
      labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4'],
      datasets: [
        {
          label: 'Sample Bar Chart',
          data: [10, 20, 30, 40],
        },
      ],
    };

    const options = {
      // Configure your options
    };

    const renderChart = () => {
      if (chartInstance) {
        chartInstance.destroy(); // Destroy existing chart instance
      }

      // Render new chart
      const ctx = document.getElementById('myChart');
      chartInstance = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: options,
      });
    };

    renderChart();

    return () => {
      if (chartInstance) {
        chartInstance.destroy(); // Clean up chart instance on component unmount
      }
    };
  }, []);

  return (
    <div>
      <canvas id="myChart" />
    </div>
  );
};

export default BarChart;

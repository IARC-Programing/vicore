import React from "react";
import Chart from "react-apexcharts";
import { ChartData } from "../../Data";

const LineChart = ({ chartType }) => {
  const data = {
    series: [
      {
        name: "sales",
        data: ChartData.map((data) => data.ProductAmount)
      }
    ],
    options: {
      chart: {
        height: 350,
        type: { chartType },
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      },
      xaxis: {
        categories: ChartData.map((data) => data.ProductName)
      }
    }
  };

  return (
    <div>
      <Chart
        options={data.options}
        series={data.series}
        type={chartType}
        height={500}
        width={1000}
      />
    </div>
  );
};

export default LineChart;

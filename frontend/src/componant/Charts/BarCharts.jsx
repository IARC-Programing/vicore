import React from "react";
import Chart from "react-apexcharts";
import { ChartData } from "../../Data";


const BarChart = ({chartType}) => {
  console.log(ChartData);
  const data = {
    series: [
      {
        name: "sales",
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
      }
    ],
    options: {
      chart: {
        height: 350,
        type: {chartType},
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
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep"
        ]
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

export default BarChart;

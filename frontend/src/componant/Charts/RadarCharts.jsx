import React from "react";
import Chart from "react-apexcharts";

const RadarCharts = ({ data }) => {
  const chatsData = {
    series: [
      {
        name: "Series 1",
        data: [80, 50, 30, 40, 100, 20]
      }
    ],
    options: {
      chart: {
        height: 500,
        type: "radar",
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
        categories: ["January", "February", "March", "April", "May", "June"]
      }
    }
  };

  return (
    <div style={{width: "100%"}}>
      <Chart
        options={chatsData.options}
        series={chatsData.series}
        type="radar"
      />
    </div>
  );
};

export default RadarCharts;

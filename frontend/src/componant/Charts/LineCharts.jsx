import React from "react";
import Chart from "react-apexcharts";
import _ from 'lodash'


const LineChart = ({ chartType, data }) => {
  const price = _.compact(data?.rows?.map((d) => d?.sub_type?.price || ""));
  const chartsData = {
    series: [
      {
        name: "sales",
        data: price
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
        categories: data?.rows?.map((d) => d?.name || '')
      }
    }
  };

  return (
    <div>
      <Chart
        options={chartsData.options}
        series={chartsData.series}
        type={chartType}
        height={500}
        width={1000}
      />
    </div>
  );
};

export default LineChart;

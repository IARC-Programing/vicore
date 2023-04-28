import React from "react";
import Chart from "react-apexcharts";
import _ from 'lodash';

export const PieChart1 = ({ data }) => {
  console.log(
    "pie cahrt 1 ",
    data?.rows?.map((d) => d?.customer?.firstname || "")
  );
  const top10 = _.orderBy(data?.rows?.map((d) => d?.payment?.paid_amount || 0) || [], ['desc']).slice(0, 10);


  const chartOptionsPie = {
    labels: data?.rows?.map((d) => d?.customer?.firstname || "")
  };
  return (
    <div style={{ width: "35%" }}>
      <Chart
        options={chartOptionsPie}
        series={top10}
        type="pie"
      />
    </div>
  );
};

export const PieChart2 = ({ data }) => {
  console.log("pie cahrt 2 ", data);
  
  const top10 = _.orderBy(data?.rows?.map((d) => d?.price || 0) || [], ['desc']).slice(0, 10);

  const chartOptionsPie = {
    labels: data?.rows?.map((d) => d?.name || "")
  };
  return (
    <div style={{ width: "35%" }}>
      <Chart
        options={chartOptionsPie}
        series={top10}
        type="pie"
      />
    </div>
  );
  
};

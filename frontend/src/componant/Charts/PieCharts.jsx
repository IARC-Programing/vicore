import React from "react";
import Chart from "react-apexcharts";

export const PieChart1 = ({ data }) => {
  console.log(
    "pie cahrt 1 ",
    data?.rows?.map((d) => d?.customer?.firstname || "")
  );

  const chartOptionsPie = {
    labels: data?.rows?.map((d) => d?.customer?.firstname || "")
  };
  return (
    <div style={{ width: "35%" }}>
      <Chart
        options={chartOptionsPie}
        series={data?.rows?.map((d) => d?.payment?.paid_amount || 0) || []}
        type="pie"
      />
    </div>
  );
};

export const PieChart2 = ({ data }) => {
  console.log("pie cahrt 2 ", data);
  const chartOptionsPie = {
    labels: data?.rows?.map((d) => d?.name || "")
  };
  return (
    <div style={{ width: "35%" }}>
      <Chart
        options={chartOptionsPie}
        series={data?.rows?.map((d) => d?.price || 0) || []}
        type="pie"
      />
    </div>
  );
  
};

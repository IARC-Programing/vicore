import React from "react";
import Chart from "react-apexcharts";

const PieCharts = () => {
  const chartOptionsPie = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]
  };
  return (
    <div>
      <Chart
        options={chartOptionsPie}
        series={[30, 40, 35, 50, 49, 60, 70, 91, 125]}
        type="pie"
      />
    </div>
  );
};

export default PieCharts;

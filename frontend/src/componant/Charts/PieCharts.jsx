import React from "react";
import Chart from "react-apexcharts";
import { ChartData } from "../../Data";

const PieCharts = () => {
  const chartOptionsPie = {
    labels: ChartData.map((data)=>data.ProductName)
  };
  return (
    
       <div style={{width: "175%"}}>
      <Chart
        options={chartOptionsPie}
        series={ChartData.map((data)=>data.ProductAmount)}
        type="pie"
      />
    </div>
  );
};

export default PieCharts;

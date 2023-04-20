import React, { useState } from "react";
import BarCharts from "../../componant/Charts/BarCharts";
import LineCharts from "../../componant/Charts/LineCharts";
import PieChart from "../../componant/Charts/PieCharts";
import MiniCalendar from "../../componant/MiniCalender/MiniCalender";

const Maindash = () => {
  const [selectType, setSelectType] = useState("bar");
  console.log("selectType", selectType);

  return (
    <div className="flex justify-center">
      <div className="w-8/10">
        <h1>หัวข้อเรื่อง</h1>

        <select
          className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
          onChange={(e) => setSelectType(e?.target?.value)}
          defaultValue={selectType}
        >
          <option value="bar">bar</option>
          <option value="line">line</option>
        </select>

        <div className="w-full h-full overflow-hidden">
          {selectType === "bar" ? (
            <BarCharts chartType="bar" />
          ) : (
            <LineCharts chartType="line" />
          )}
        </div>

        
      </div>
      <div className="w-2/10 my-auto mx-auto">
        <PieChart />
        {/* <MiniCalendar /> */}
      </div>
    </div>
  );
};

export default Maindash;

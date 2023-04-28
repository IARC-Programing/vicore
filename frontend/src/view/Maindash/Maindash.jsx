import React, { useState, useEffect } from "react";
import BarCharts from "../../componant/Charts/BarCharts";
import LineCharts from "../../componant/Charts/LineCharts";
import AreaCharts from "../../componant/Charts/AreaCharts";
import PieChart from "../../componant/Charts/PieCharts";
import MyCalendar from "../../componant/MiniCalender/MiniCalender";
import axios from "axios";
import image from "../../componant/img/pyou.gif";

const Maindash = () => {
  return (
    <div className="font-mono mx-auto font-bold text-2xl ">
      <br />
      <span className="text-pink-500">WELCOME TO VI-CORE</span>
      <br />
      <img src={image} className="mx-auto" />
      <div>"Atthaphon Kaw-sang"</div>
    </div>
  );
};

export default Maindash;

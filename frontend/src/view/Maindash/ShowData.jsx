import React, { useState, useEffect } from "react";
import BarCharts from "../../componant/Charts/BarCharts";
import LineCharts from "../../componant/Charts/LineCharts";
import AreaCharts from "../../componant/Charts/AreaCharts";
import { PieChart1, PieChart2 } from "../../componant/Charts/PieCharts";
import BarChart2 from "../../componant/Charts/BarCharts2";
import { useParams } from "react-router";
import axios from "axios";
import RadarCharts from "../../componant/Charts/RadarCharts";

const ShowData = () => {
  const params = useParams([]);
  const [selectType, setSelectType] = useState("bar");
  console.log("selectType", selectType);
  const [Data, setData] = useState([]);
  const [Project, setProjects] = useState([]);
  const [Project1, setProjects1] = useState([]);
  const [Project2, setProjects2] = useState([]);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:5000/project/${params.id}`, {})
      .then(function (response) {
        console.log("res", response);
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    return () => {};
  }, [selectType]);

  useEffect(() => {
    axios
      .get(`${Data?.project_url}/room`)
      .then(function (response1) {
        console.log("res1", response1);
        setProjects(response1.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .get(`${Data?.project_url}/log`, {
        headers: { Authorization: `Bearer ${Data?.project_key}` }
      })
      .then(function (response2) {
        console.log("res2", response2);
        setProjects1(response2.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .get(`${Data?.project_url}/room-sub-type`, {
        headers: { Authorization: `Bearer ${Data?.project_key}` }
      })
      .then(function (response3) {
        console.log("res3", response3);
        setProjects2(response3.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [Data?.project_url, Data?.project_key]);

  return (
    <div className="flex mx-auto">
      <div className="container mt-12 bg-slate-100 rounded w-full">
        <h1 className="font-bold text-lg font-mono">room eaccoms</h1>
        <div className="w-8/10">
          <select
            className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600 "
            onChange={(e) => setSelectType(e?.target?.value)}
            defaultValue={selectType}
          >
            <option value="bar">Bar</option>
            <option value="line">Line</option>
            <option value="area">Area</option>
          </select>

          <div className="container w-4/6 mt-12 ">
            {selectType === "bar" ? (
              <BarCharts chartType="bar" data={Project} />
            ) : selectType === "line" ? (
              <LineCharts chartType="line" data={Project} />
            ) : (
              <AreaCharts chartType="area" data={Project} />
            )}
            <div className="w-12/24 mx-auto flex">
              <PieChart1 data={Project1} />

              <PieChart2 data={Project2} />

              {/*<BarChart2 data={Project} chartType="bar" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowData;

import React, { useState } from "react";

import { formdropdown } from "../../Data";
import axios from "axios";

function Forms() {
  const [inputForms, setinputForms] = useState({
    PROJECT_NAME: "",
    API_URL: "",
    API_KEY: "",
  });
  console.log(inputForms);
  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    setinputForms({
      ...inputForms,
      [name]: value,
    });
  };

  const [selectedValue, setSelectedValue] = useState("");
  const handleDropdownChange = (e) => {
    setSelectedValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit payload", inputForms, selectedValue);
    axios
      .post("http://172.30.88.85:5000/api/projects", {
        PROJECT_NAME: inputForms.PROJECT_NAME,
        API_URL: inputForms.API_URL,
        API_KEY: inputForms.API_KEY,
        PROJECT_SECTION: selectedValue,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="flex flex-col h-full justify-end w-3/4">
      <div className="flex-1 mt-8 p-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="projectName"
              >
                Project Name
              </label>
              <input
                name="PROJECT_NAME"
                id="projectName"
                type="text"
                placeholder="Enter Project Name"
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="apiUrl"
              >
                API URL
              </label>
              <input
                name="API_URL"
                id="apiUrl"
                type="url"
                placeholder="Enter API URL"
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="apiKey"
              >
                API Key
              </label>
              <input
                name="API_KEY"
                id="apiKey"
                type="text"
                placeholder="Enter API Key"
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            {/* --------------------Dropdown------------------- */}
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="frameDropdown"
              >
                Frame
              </label>
              <select
                name="FRAME"
                id="frameDropdown"
                onChange={handleDropdownChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option>Frame...</option>
                <option value={formdropdown[0]}>{formdropdown[0]}</option>
                <option value={formdropdown[1]}>{formdropdown[1]}</option>
                <option value={formdropdown[2]}>{formdropdown[2]}</option>
                <option value={formdropdown[3]}>{formdropdown[3]}</option>
              </select>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Forms;

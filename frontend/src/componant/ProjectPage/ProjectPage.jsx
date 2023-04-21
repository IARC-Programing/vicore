import React, { useState, useEffect } from "react";
import axios from "axios";
import SweetAlert from "sweetalert-react";

const ProjectPage = () => {
  const [projects, setProjects] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/projects")
      .then((response) => {
        console.log("response",response)
        setProjects(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(projects);
  return (
    <div className="flex flex-col h-full justify-end w-5/6">
      <table className="table-auto border-collapse border border-gray-500">
        <thead>
          <tr>
            <th className="border border-gray-500 p-2">No.</th>
            <th className="border border-gray-500 p-2">Project Name</th>
            <th className="border border-gray-500 p-2">Frame</th>
            <th className="border border-gray-500 p-2">API Link</th>
            <th className="border border-gray-500 p-2">Carry out</th>
          </tr>
        </thead>
        <tbody>
          {projects?.map((projects, index) => (
            <tr key={index}>
              <td className="border border-gray-500 p-2">{projects.project_id}</td>
              <td className="border border-gray-500 p-2">{projects.project_name}</td>
              <td className="border border-gray-500 p-2">{projects.project_section}</td>
              <td className="border border-gray-500 p-2">{projects.project_url}</td>
              <td className="border border-gray-500 p-2">
                <button class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-md text-sm px-3 py-1.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Details
                </button>
                <a href="/Dashboard">
                  <button class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-md text-sm px-3 py-1.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                    Show
                  </button>
                </a>
                <button class="text-white bg-yellow-700 hover:bg-yellow-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-md text-sm px-3 py-1.5 text-center mr-2 mb-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800">
                  Edit
                </button>
                <br />
                <button class="text-white bg-cyan-700 hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 font-medium rounded-md text-sm px-3 py-1.5 text-center mr-2 mb-2 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">
                  Copy URL
                </button>
                <button class="text-white bg-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-md text-sm px-3 py-1.5 text-center mr-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                  Embeded
                </button>
                <button
                  class="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-md text-sm px-3 py-1.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                  onClick={() => window.confirm()}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <SweetAlert
        show={showAlert}
        title="Demo"
        text="SweetAlert in React"
        onConfirm={() => setShowAlert(false)}
      />
    </div>
  );
};

export default ProjectPage;

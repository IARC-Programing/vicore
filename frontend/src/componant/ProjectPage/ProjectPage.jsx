import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@material-ui/core";
import handleDeleteClick from '../ProjectPage/DeleteProject'

const ProjectPage = () => {
  const [projects, setProjects] = useState([]);
 


  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/api/projects")
      .then((response) => {
        console.log("response", response);
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
            <th className="border text-slate-50 bg-gray-700 p-2 font-mono">No.</th>
            <th className="border text-slate-50 bg-gray-700 p-2 font-mono">Name</th>
            <th className="border text-slate-50 bg-gray-700 p-2 font-mono">Type</th>
            <th className="border text-slate-50 bg-gray-700 p-2 font-mono">Uniform Resource Locator</th>
            <th className="border text-slate-50 bg-gray-700 p-2 font-mono">Manage</th>
          </tr>
        </thead>
        <tbody>
          {projects?.map((projects, index) => (
            <tr key={index}>
              <td className="border border-gray-500 p-2 font-bold font-mono">
                {projects.project_id}
              </td>
              <td className="border border-gray-500 p-2 font-bold font-mono">
                {projects.project_name}
              </td>
              <td className="border border-gray-500 p-2 font-bold font-mono">
                {projects.project_section}
              </td>
              <td className="border border-gray-500 p-2 font-bold font-mono">
                {projects.project_url}
              </td>
              <td className="border border-gray-500 p-2 font-bold">
                <Button variant="outlined" color="error" className="bg-green-500" href={`/ShowData/${projects.project_id}`}>
                <span className="font-bold text-green-500">Show</span>
                </Button>
                &nbsp;
                <Button variant="outlined" color="error" className="bg-orange-500" href={`/EditForms/${projects.project_id}`}>
                <span className="font-bold text-orange-500">Edit</span>
                </Button>
                &nbsp;
                <Button variant="outlined" color="error" className="bg-red-500"  onClick={() => handleDeleteClick(projects.project_id)}>
                <span className="font-bold text-red-500">Delete</span>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
};

export default ProjectPage;

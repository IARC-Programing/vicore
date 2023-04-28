import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import image from "../img/Ellipse.png";
import { SidebarData } from "../../Data";

export default function Sidebar() {
  const location = useLocation();

  console.log("Location", location);
  const [selected, setSelected] = useState();
  return (
    <div className="flex flex-col p-3 bg-gray-950 shadow w-1/6 h-screen">
      
      <div className="content-start text-white bg-pink-500 rounded-md">
        {/* <h1 className="flex text-2xl">  
          <span className="flex mx-auto content-center rounded-md">
            <img src={image} className="h-13 w-13"/>
            <span className="mx-8 text-xl">Admin</span>
          </span>
        </h1> */}
        <div className="flex">
          <div className="flex mx-auto">
            <img src={image} className="flex-col h-15 w-15" />
          </div>
        </div>
        <div className="content-start text-white bg-pink-300 rounded-md">
          <span className="font-bold flex-col content-center text-sm font-mono">
            IARC PSU
          </span>
        </div>
      </div>
      <br />
      {SidebarData?.map((item, index) => {
        return (
          <Link
            to={item.link}
            className={
              item.link === location.pathname
                ? "text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-md font-bold disabled-link no-underline font-mono"
                : "text-gray-300 font-bold disabled-link no-underline font-mono"
            }
            key={index}
            onClick={() => setSelected(index)}
          >
            <button className="flex items-center gap-2 py-2 px-4 rounded-md text-sm">
              {item.heading && (
                <span className="hidden md:block">{item.icon}</span>
              )}
              <span>{item.heading}</span>
            </button>
          </Link>
        );
      })}
    </div>
  );
}

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { SidebarData } from "../../Data";

export default function Sidebar() {
  const location = useLocation();

  console.log("Location", location);
  const [selected, setSelected] = useState();
  return (
    <div className="flex flex-col h-screen p-3 bg-gray-800 shadow w-1/6">
      {SidebarData?.map((item, index) => {
        return (
          <Link
            to={item.link}
            className={
              item.link === location.pathname
                ? "text-white bg-gray-900"
                : "text-gray-300"
            }
            key={index}
            onClick={() => setSelected(index)}
          >
            <button className="flex items-center gap-2 py-2 px-4 rounded-md">
              <span>{item.icon}</span>
              <span>{item.heading}</span>
            </button>
          </Link>
        );
      })}
    </div>
  );
}

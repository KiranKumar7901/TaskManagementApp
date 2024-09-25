import React from "react";
import { CgNotes } from "react-icons/cg";
import { MdLabelImportant } from "react-icons/md";
import { FaCheckDouble } from "react-icons/fa";
import { TbNotebookOff } from "react-icons/tb";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const data = [
    {
      title: "All Tasks",
      icon: <CgNotes />,
      link: "/"
    },
    {
      title: "Important Tasks",
      icon: <MdLabelImportant />,
      link: "/importantTasks"
    },
    {
      title: "Completed Tasks",
      icon: <FaCheckDouble />,
      link: "/completedTasks"
    },
    {
      title: "Incomplete Tasks",
      icon: <TbNotebookOff />,
      link: "/incompleteTasks"
    },
  ];
  return (
    <>
      <div>
        <h2 className="text-xl font-semibold">Task Manager</h2>
        <h4 className="mb-1 text-gray-400">abc@gmail.com</h4>
        <hr />
      </div>
      <div>
        {data.map((items, i) => (
          <Link to={items.link} key={i} className="my-2 flex items-center gap-2 hover:bg-gray-600 p-2 rounded transition:all duration-300">{items.icon}{items.title}</Link>
        ))}
      </div>
      <div>
        <button className="bg-gray-600 w-full p-2 rounded">Log Out</button>
      </div>
    </>
  );
};

export default Sidebar;

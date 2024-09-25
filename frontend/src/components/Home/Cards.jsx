import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";

const Cards = ({home}) => {
  const data = [
    {
      title: "Best Coding Channel",
      desc: "I have to create my channel the best ever coding channel in hindi for those who do not understand english",
      status: "Incomplete",
    },
    {
      title: "Best Coding Channel",
      desc: "I have to create my channel",
      status: "Complete",
    },
    {
      title: "Best Coding Channel",
      desc: "I have to create my channel the best ever coding channel in hindi for those who do not understand english",
      status: "Incomplete",
    },
    {
      title: "Best Coding Channel",
      desc: "I have to create my channel the best ever coding channel in hindi for those who do not understand english",
      status: "Incomplete",
    },
  ];
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {data &&
        data.map((items, i) => (
          <div className="flex flex-col justify-between bg-gray-800 rounded-sm p-4">
            <div>
              <h3 className="text-xl font-semibold">{items.title}</h3>
              <p className="text-gray-300 my-2">{items.desc}</p>
            </div>
            <div className="mt-4 w-full flex items-center">
              <button
                className={`${
                  items.status === "Incomplete" ? "bg-red-400" : "bg-green-400"
                } text-black px-2 py-1 rounded w-3/6`}
              >
                {items.status}
              </button>
              <div className="p-2 w-3/6 text-2xl flex justify-around">
                <button>
                  <CiHeart />
                </button>
                <button>
                  <FaEdit />
                </button>
                <button>
                  <MdDelete />
                </button>
              </div>
            </div>
          </div>
        ))}
      { home === 'true' && (
        <div className="flex flex-col justify-center items-center bg-gray-800 rounded-sm p-4 text-gray-300 hover:scale-105 hover:cursor-pointer transition-all-duration-300">
          <IoIosAddCircle className="text-5xl" />
          <h2 className="text-2xl mt-4">Add Task</h2>
        </div>
      )}
    </div>
  );
};

export default Cards;

import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
import axios from "axios";

const Cards = ({ home, setInputDiv, data }) => {
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };
  const handleCompleteTask = async (id) => {
    try {
      await axios.put(
        `http://localhost:1000/api/v2/update-comp-task/${id}`,
        {},
        { headers }
      );
    } catch (error) {
      console.log(error);
    }
  };
  const handleImpTask = async (id) => {
    try {
      const response = await axios.put(
        `http://localhost:1000/api/v2//update-imp-task/${id}`,
        {},
        { headers }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const handledeleteTask = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:1000/api/v2/delete-task/${id}`,
        { headers }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
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
                  items.complete === false ? "bg-red-400" : "bg-green-400"
                } text-black px-2 py-1 rounded w-3/6`}
                onClick={() => handleCompleteTask(items._id)}
              >
                {items.complete === true ? "Completed" : "Incomplete"}
              </button>
              <div className="p-2 w-3/6 text-2xl flex justify-around">
                <button onClick={() => handleImpTask(items._id)}>
                  {items.important === false ? <CiHeart /> : <FaHeart className="text-red-500"/>}
                </button>
                <button>
                  <FaEdit />
                </button>
                <button onClick={()=>handledeleteTask(items._id)}>
                  <MdDelete />
                </button>
              </div>
            </div>
          </div>
        ))}
      {home === "true" && (
        <button
          onClick={() => setInputDiv("fixed")}
          className="flex flex-col justify-center items-center bg-gray-800 rounded-sm p-4 text-gray-300 hover:scale-105 hover:cursor-pointer transition-all-duration-300"
        >
          <IoIosAddCircle className="text-5xl" />
          <h2 className="text-2xl mt-4">Add Task</h2>
        </button>
      )}
    </div>
  );
};

export default Cards;

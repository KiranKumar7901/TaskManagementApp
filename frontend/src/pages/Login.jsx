import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { authActions } from "../store/auth";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const [Data, setData] = useState({ username: "", password: "" });
  const history = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state)=>state.auth.isLoggedIn);
  if(isLoggedIn===true){
    history("/");
  }
  const change = (e) => {
    const { name, value } = e.target;
    setData({ ...Data, [name]: value });
  };
  const submit = async () => {
    try {
      if (Data.username === "" || Data.password === "")
        alert("All Fields are Required");
      else {
        const response = await axios.post(
          "http://localhost:1000/api/v1/log-in",
          Data
        );
        setData({ username: "", password: "" });
        localStorage.setItem("id",response.data.id);
        localStorage.setItem("token",response.data.token);
        dispatch(authActions.login());
        history("/")
      }
    } catch (error) {
        console.log(error);
    }
  };
  return (
    <>
      <div className="h-[98vh] flex items-center justify-center">
        <div className="p-4 w-2/6 rounded bg-gray-800">
          <div className="text-3xl font-semibold">Login</div>
          <input
            type="username"
            placeholder="Username"
            className="bg-gray-700 px-3 py-2 my-3 w-full rounded"
            name="username"
            value={Data.username}
            onChange={change}
          />
          <input
            type="password"
            placeholder="Password"
            className="bg-gray-700 px-3 py-2 my-3 w-full rounded"
            name="password"
            value={Data.password}
            onChange={change}
          />
          <div className="w-full flex items-center justify-between">
            <button onClick={submit} className="bg-blue-400 text-xl font-semibold text-black px-4 py-1 rounded">
              Login
            </button>
            <Link to="/signup" className="text-gray-400 hover:text-gray-200">
              Create Account
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

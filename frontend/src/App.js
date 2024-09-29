import React, { useEffect } from "react";
import Home from "./pages/Home";
import { Route, Routes, useNavigate } from "react-router-dom";
import AllTasks from "./pages/AllTasks";
import ImportantTasks from "./pages/ImportantTask";
import CompletedTask from "./pages/CompletedTask";
import InCompleteTask from "./pages/InCompleteTask";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./store/auth";
const App = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state)=>state.auth.isLoggedIn);
  const dispatch = useDispatch();
  useEffect(()=>{
    if(localStorage.getItem("id") && localStorage.getItem("token")){
      dispatch(authActions.login());
    }
    else if(isLoggedIn===false){
      navigate("/signup");
    }
    // eslint-disable-next-line
  },[]);
  return (
    <div className="bg-gray-900 text-white h-screen p-2 relative">
        <Routes>
          <Route exact path="/" element={<Home />}>
            <Route index element={<AllTasks />}></Route>
            <Route path="/importantTasks" element={<ImportantTasks />}></Route>
            <Route path="/completedTasks" element={<CompletedTask />}></Route>
            <Route path="/incompleteTasks" element={<InCompleteTask />}></Route>
          </Route>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
    </div>
  );
};

export default App;

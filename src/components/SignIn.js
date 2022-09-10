import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "./Header";
import { useSelector } from "react-redux";

const SignIn = () => {
  const theme = useSelector(state=>state.todos.theme)
  let history = useHistory();
  const [title, setTitle] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.length < 3) {
      return;
    }
    localStorage.setItem("oturum", title);
    history.push("/main");
  };

  
  
  return (
    <>
      <Header />
      <div className="w-full  flex flex-col h-[600px] justify-center items-center   ">
        <div className={`h-1/3 w-1/4 flex flex-col justify-between  items-center shadow-sm border-2 p-10 rounded-md ${theme ===false ? "bg-green-400  border-green-400  shadow-green-400 " : "bg-white  shadow-white  border-white"} `}>
          <h1 className={`font-bold  md:text-lg xl:text-2xl ${theme ===false ? "text-white" : "text-gray-800"}  `}>Lütfen Adınızı Giriniz </h1>
          <form onSubmit={handleSubmit}>
            <input
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              className={`rounded-md p-2 w-full border font-bold  ${theme ===false ? "bg-white text-slate-600" :"bg-slate-600 text-white"} `}
            />
            <button   className={`font-semibold mt-4 p-2 rounded-lg  ${theme ===false ? "bg-white text-green-400" : "bg-slate-600 text-white"}`}  >Sign In</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;

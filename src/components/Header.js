import React, { useEffect, useState } from "react";
import { Switch } from "antd";
import { MdDarkMode } from "react-icons/md";
import { BsSunFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { changeMode } from "../redux/todosSlice";
import { useSelector } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.todos.theme);

  const [mode, setMode] = useState(true);

  const handleMode = async () => {
    setMode(!mode);

    await dispatch(changeMode(mode));
  };

  return (
    <div
      className={` flex  justify-between  pt-4 p-2 font-semibold italic  ${
        theme === false ? "bg-green-400" : "bg-white"
      }    `}
    >
      <div>
        <p
          className={`  text-3xl    ${
            theme === false ? "text-white" : "text-gray-800"
          }  `}
        >
          {`   ${localStorage.getItem("oturum")=== null ?"": "Merhaba  "+  localStorage.getItem("oturum")} `}
        </p>
      </div>
      <div className="flex items-center">
        <Switch
          checkedChildren={<MdDarkMode />}
          unCheckedChildren={<BsSunFill />}
          checked={theme === true ? true : false}
          onClick={handleMode}
        />
        <br />
      </div>
    </div>
  );
};

export default Header;

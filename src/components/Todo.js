import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { putTodo, deleteTodo, updateCompletedTodo } from "../redux/todosSlice";
import "../App.css";
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { BsCheck } from "react-icons/bs";
import { BsCheckAll } from "react-icons/bs";
import Checkbox from "@mui/material/Checkbox";
import Open from "./Open";

const Todo = ({ item }) => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.todos.theme);

  const [active, setActive] = useState(true);
  const [content, setContent] = useState("");

  const handleChecbox = async (id, isCompleted) => {
    await dispatch(updateCompletedTodo({ id, data: { isCompleted } }));
  };

  const deleteItem = async (id) => {
    await dispatch(deleteTodo(id));
  };

  const handleSubmit = async (e, id) => {
    if (content.length < 3) {
      return;
    }
    e.preventDefault();

    await dispatch(putTodo({ id, data: { content } }));
  };
  const handleOut = (e) => {
    if (e.key === "Enter") {
      setActive(!active);
    }
  };

  //${theme ===false ? "bg-green-400" : "bg-white"}
  //text-3xl text-black
  return (
    <div
      className={` flex  justify-between items-center  h-full border-b-2  w-full    mt-2 bg-white  ${
        theme === false ? "border-green-400" : "border-t-slate-700"
      }`}
    >
      <div className=" flex w-1/3 h-full items-center   space-x-4">
        <Checkbox
          onClick={() => handleChecbox(item.id, !item.isCompleted)}
          icon={
            item.isCompleted === true ? (
              <BsCheckAll
                className={`  text-3xl ${
                  theme === false ? "text-black" : "text-slate-700"
                } `}
              />
            ) : (
              <BsCheck
                className={`  text-3xl ${
                  theme === false ? "text-black" : "text-slate-700"
                } `}
              />
            )
          }
          checkedIcon={
            item.isCompleted === false ? (
              <BsCheck
                className={`  text-3xl ${
                  theme === false ? "text-black" : "text-slate-700"
                } `}
              />
            ) : (
              <BsCheckAll
                className={`  text-3xl ${
                  theme === false ? "text-black" : "text-slate-700"
                } `}
              />
            )
          }
        />
        <div>
          <form onSubmit={(e) => handleSubmit(e, item.id)} className="flex">
            <input
              className={`text-xl  font-semibold p-3    ${
                item.isCompleted === true ? "line-through" : ""
              }  `}
              defaultValue={
                item.content[0].toUpperCase() +
                item.content.slice(1).toLowerCase()
              }
              onChange={(e) => setContent(e.target.value)}
              disabled={active}
              onKeyPress={handleOut}
              type="text"
            />
          </form>
        </div>
        <div className="flex w-full relative">
          <Open item={item} />
        </div>
      </div>
      <div className="flex   w-1/7 space-x-4">
        <button onClick={() => setActive(!active)}>
          <AiFillEdit
            className={` text-2xl ${
              theme === false ? "text-black" : "text-slate-700"
            } `}
          />
        </button>

        <button
          onClick={() => deleteItem(item.id)}
          className={` text-xl ${
            theme === false ? "text-black" : "text-slate-700"
          } `}
        >
          <AiFillDelete />
        </button>
      </div>
    </div>
  );
};

export default Todo;

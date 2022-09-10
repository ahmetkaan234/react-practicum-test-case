import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postTodo } from "../redux/todosSlice";

const Form = () => {
  const isLoading = useSelector((state) => state.todos.postNewTodo.isLoading);
  const error = useSelector((state) => state.todos.postNewTodo.error);
  const theme = useSelector((state) => state.todos.theme);
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (content.length < 3) return;

    await dispatch(postTodo({ content }));
    setContent("");
  };

  if (error) {
    return <div className="font-semibold"> {error.message} </div>;
  }

  return (
    <form onSubmit={handleSubmit} className="flex">
      <input
        type="text"
        value={content}
        placeholder="Ne Yapmak İstersin ?"
        onChange={(e) => setContent(e.target.value)}
        className={`w-full rounded-sm border-2 text-xl font-semibold p-2  ${
          theme === false ? "border-green-400" : "bg-white"
        } `}
      />
      {isLoading && <div className="font-semibold  bg-white">Loading...</div>}
    </form>
  );
};

export default Form;

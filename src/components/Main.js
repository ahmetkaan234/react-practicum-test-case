import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTodo } from "../redux/todosSlice";
import TodoList from "./TodoList";
import Form from "./Form";
import Header from "./Header";

const Main = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodo());
  }, [dispatch]);

  return (
    <>
      <Header />
      <div className="w-full  mt-20   flex justify-center items-center">
        <div className=" h-2/3 w-2/5   border-black">
          <Form />
         
            <TodoList />
       
        </div>
      </div>
    </>
  );
};

export default Main;

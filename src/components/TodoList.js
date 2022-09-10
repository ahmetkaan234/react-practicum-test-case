import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Loading from "./Loading";
import Error from "./Error";



import Todo from "./Todo";

const TodoList = () => {


  const items = useSelector((state) => state.todos.items);
  const isLoading = useSelector((state) => state.todos.isLoading);
  const error = useSelector((state) => state.todos.error);



 

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} />;
  }
  return (
    <div  className="bg-white" >
      {items.map((item) => (
        <div  key={item.id}>
       <Todo item={item} />
       </div>
      ))}
    </div>
  );
};

export default TodoList;

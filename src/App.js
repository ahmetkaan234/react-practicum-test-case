import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Main from "./components/Main";
import SignIn from "./components/SignIn";






const App = () => {
  const theme =useSelector(state=>state.todos.theme);
  console.log(theme);


  return (
    <div className={`min-h-screen  w-full  ${theme=== false ? "bg-white" : "bg-gray-800"}   `}>
      <Router>
        <Switch>
          <Route exact path="/">
            <SignIn />
          </Route>
          <Route path="/main">
            <Main />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;

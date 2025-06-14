import { Header } from "./components/Header";
import { Tabs } from "./components/Tabs";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";

import { useState, useEffect } from "react";

function App() {
  // const is fixed variable, so to add/delete we need to duplicate the variable and overwrite the change
  const [todos, setTodos] = useState([
    { input: "Hello! Add your first todo!", complete: true },
  ]);

  // array destructure variable, set function
  const [selectedTab, setSelectedTab] = useState("Open");

  function handleAddTodo(newTodo) {
    const newTodoList = [...todos, { input: newTodo, complete: false }];
    setTodos(newTodoList); // change the todos list
    handleSaveData(newTodoList); // save the todos list
  }

  function handleCompleteTodo(index) {
    // update/modify list
    // duplicate array
    let newTodoList = [...todos];
    // access the value
    let completedTodo = todos[index];
    // modify the status
    completedTodo["complete"] = true;
    // add the new todo in completed todo
    newTodoList[index] = completedTodo;
    // overwrite the state to meet the current change
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  }

  function handleDeleteTodo(index) {
    // if given index not equal to index keep the value
    let newTodoList = todos.filter((val, valIndex) => {
      return valIndex !== index;
    });
    //change Todos List to the new List
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  }

  // Save the todos list to later retrive it
  // add to other add, modify, edit & delete fuctions
  function handleSaveData(currTodos) {
    // Here 'better-todo-app' is the key to {todos} and {todos} is the key assigned to the current todos being saved
    localStorage.setItem(
      "better-todo-app",
      JSON.stringify({ todos: currTodos })
    );
  }

  // Retrive the same todos list on refresh
  useEffect(() => {
    // guard clause - checks if it is localStorage & in localStorage there is better-todo-app
    // .getItem used to get the data
    if (!localStorage || !localStorage.getItem("better-todo-app")) {
      return;
    }
    // data exists give db that value by parsing it
    let db = JSON.parse(localStorage.getItem("better-todo-app"));
    setTodos(db.todos); // use setTodos to change todos List
  }, []);

  return (
    <>
      {/* these properties destructed in children components */}
      <Header todos={todos} />
      {/* setSelectedTab - to change tabs*/}
      <Tabs
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        todos={todos}
      />
      <TodoList
        handleCompleteTodo={handleCompleteTodo}
        handleDeleteTodo={handleDeleteTodo}
        selectedTab={selectedTab}
        todos={todos}
      />
      <TodoInput handleAddTodo={handleAddTodo} />
    </>
  );
}

export default App;

import "./styles.css";
import { useState } from "react";
import TodoItem from "./TodoItem";

export default function App() {
  const [todoList, setTodoList] = useState([
    { title: "Read SpringBoot", completed: false },
    { title: "Complete assignments", completed: true },
    { title: "Sleep for 2 hours", completed: false },
    { title: "Take a shower", completed: true }
  ]);

  function handleClick(indexClicked) {
    let updatedList = [...todoList];
    updatedList[indexClicked].completed = !updatedList[indexClicked].completed;
    setTodoList(updatedList);
    console.log(todoList);
  }

  function clearCompleted() {
    let updatedList = todoList.filter((item) => !item.completed);
    setTodoList(updatedList);
  }

  return (
    <div className="Application">
      <h1>Todo App</h1>
      {todoList.length !== 0 ? (
        todoList.map((item, index) => (
          <TodoItem key={index} index={index} item={item} handleClick={handleClick} />
        ))
      ) : (
        "Nothing to do buddy. Sleep!"
      )}
      {todoList.length !== 0 && (
        <button onClick={clearCompleted}>
          Clear Completed!
        </button>
      )}
    </div>
  );
}

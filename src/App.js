import "./styles.css";

export default function App() {
  let todo_list = ["Read SpringBoot", "Complete assignments", "Prepare breakfast", "Sleep for 2 hours", "Take a shower"]
  return (
    <div className="Application">
      <h1>Todo App</h1>
      {todo_list.map((item,index)=><h2 key={index}>{item}</h2>)}
    </div>
  );
}

import { useState } from "react";
import "./styles.css";

export default function App() {
  const [inputValue, setInputvalue] = useState("");
  const [todoList, setTodoList] = useState([]);

  const inputUpdate = (e) => {
    setInputvalue(e.target.value);
  };

  const handleAddTodo = () => {
    const item = {
      id: 0,
      title: inputValue,
      completed: true,
    };
    setTodoList([...todoList, item]);
    setInputvalue("");
  };

  return (
    <div className="App">
      <h1>ToDo list</h1>
      <div>
        <input
          placeholder="Enter your text"
          value={inputValue}
          onChange={(e) => {
            inputUpdate(e);
          }}
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <div>
        <ul>
          {todoList.map((todo) => (
            <li className="todo-item">
              <input type="checkbox" checked={todo.completed} />
              <span>{todo.title}</span>
              <button>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

import { useState } from "react";
import "./styles.css";

export default function App() {
  const [inputValue, setInputvalue] = useState("");
  const [todoList, setTodoList] = useState([]);

  const inputUpdate = (e) => {
    setInputvalue(e.target?.value);
  };

  const handleAddTodo = () => {
    if (!inputValue.trim()) return;

    const item = {
      id: Date.now(),
      title: inputValue,
      completed: false,
    };
    setTodoList([...todoList, item]);
    setInputvalue("");
  };

  const toggleCheckbox = (id) => {
    const copyList = [...todoList];
    copyList.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
    });
    setTodoList([...copyList]);
  };

  const handleDelete = (id) => {
    setTodoList((prev) => prev.filter((todo) => todo.id !== id));
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
      <div className="list-container">
        <ul className="list-ul-container">
          {todoList.map((todo) => (
            <li className="todo-item" key={todo.id}>
              <div>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleCheckbox(todo.id)}
                />
                <span className={todo.completed ? "strike" : ""}>
                  {todo.title}
                </span>
              </div>
              <button
                onClick={() => {
                  handleDelete(todo.id);
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

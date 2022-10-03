import React, { useState } from "react";
import List from "./components/List";
import "./App.css";
import Form from "./components/Form";

export default function App() {
  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState("");

  // const getStyle = () => {
  //   return {
  //     padding: "10px",
  //     borderBottom: "1px dotted #ccc",
  //     textDecoration: "line-through",
  //   };
  // };

  /**엔터(전송)시 todoData에 추가 */
  const handleSubmit = (e) => {
    e.preventDefault(); // form안에 input 을 전송시 페이지 리로드 되는걸 막아줌.

    /**새로운 할일데이터만들기 */
    let now = new Date();
    let newTodo = {
      id: now,
      title: value,
      completed: false,
    };

    /**원래있던 데이터에 더해주기  */
    setTodoData((prev) => [...prev, newTodo]);
    setValue("");
  };

  return (
    <div className="container">
      <div className="todoBlock">
        <div className="title">
          <h1>할일 목록</h1>
        </div>
        <List todoData={todoData} setTodoData={setTodoData} />
        <Form value={value} setValue={setValue} handleSubmit={handleSubmit} />
      </div>
    </div>
  );
}

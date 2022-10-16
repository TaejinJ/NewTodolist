import React, { useState, useCallback } from "react";
import Lists from "./components/Lists";
import "./App.css";
import Form from "./components/Form";

const initialTodoData = localStorage.getItem("todoData")
  ? JSON.parse(localStorage.getItem("todoData"))
  : [];

function App() {
  const [todoData, setTodoData] = useState(initialTodoData);
  const [value, setValue] = useState("");

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
    localStorage.setItem("todoData", JSON.stringify([...todoData, newTodo]));

    //입력란에 있던 글씨 지워주기
    setValue("");
  };
  /** 리스트목록에서 할일삭제하는 함수 */
  const handleClick = useCallback(
    (id) => {
      console.log("핸들클릭");
      let newTodoData = todoData.filter((data) => {
        return data.id !== id;
      });
      setTodoData(newTodoData);
      localStorage.setItem("todoData", JSON.stringify(newTodoData));
    },
    [todoData] // todoData 가 변경될때만 생성
  );
  /**모두삭제기능 (배열 다지우기) */
  const DeleteAll = () => {
    setTodoData([]);
    localStorage.setItem("todoData", JSON.stringify([]));
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
      <div className="w-full p-6 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-lg">
        {/*반응형*/}
        <div className="flex justify-between mb-3 font-bold">
          <h1>할일 목록</h1>
          <button className="px-4 py-2 float-right" onClick={DeleteAll}>
            Delete All
          </button>
        </div>
        <Lists
          todoData={todoData}
          setTodoData={setTodoData}
          handleClick={handleClick}
        />
        <Form value={value} setValue={setValue} handleSubmit={handleSubmit} />
      </div>
    </div>
  );
}
export default App;

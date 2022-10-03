import React from "react";

export default function List({ todoData, setTodoData }) {
  const btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
  };

  /**체크했을때 completed면 textDeco가 그어지는 함수 */
  const getStyle = (completed) => {
    return {
      padding: "10px",
      borderBottom: "1px dotted #ccc",
      textDecoration: completed ? "line-through" : "none",
    };
  };
  /** 리스트목록에서 할일삭제하는 함수 */
  const handleClick = (id) => {
    let newTodoData = todoData.filter((data) => {
      return data.id !== id;
    });
    setTodoData(newTodoData);
  };

  /** 체크박스 클릭시 실행되는 함수 */
  const handleCompleChange = (id) => {
    let newTodoData = todoData.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    });
    setTodoData(newTodoData);
  };

  return (
    <div>
      {todoData.map((data) => (
        <div style={getStyle(data.completed)} key={data.id}>
          <input
            type="checkbox"
            onChange={() => handleCompleChange(data.id)}
            defaultChecked={false}
          />
          {data.title}
          <button
            style={btnStyle}
            onClick={() => {
              handleClick(data.id);
            }}
          >
            x
          </button>
        </div>
      ))}
    </div>
  );
}

import React from "react";
import { useState } from "react";
const List = React.memo(
  ({
    id,
    completed,
    title,
    todoData,
    setTodoData,
    provided,
    snapshot,
    handleClick,
  }) => {
    console.log("list Component"); //랜더링체크
    /**수정에 필요한 state */
    const [isEditing, setisEditing] = useState(false);
    const [editedTitle, seteditedTitle] = useState(title);
    /** 체크박스 클릭시 실행되는 함수 */
    const handleCompleChange = (id) => {
      let newTodoData = todoData.map((data) => {
        if (data.id === id) {
          data.completed = !data.completed;
        }
        return data;
      });
      setTodoData(newTodoData);
      localStorage.setItem("todoData", JSON.stringify(newTodoData));
    };
    /**인풋값을 수정하게 해주는 함수 */
    const handleEditChange = (event) => {
      seteditedTitle(event.target.value);
    };

    /**수정창에서 enter시 바뀌는 값으로 재저장하기*/
    const handleSubmit = (e) => {
      e.preventDefault();
      let newTodoData = todoData.map((data) => {
        if (data.id === id) {
          data.title = editedTitle;
        }
        return data;
      });
      setTodoData(newTodoData);
      localStorage.setItem("todoData", JSON.stringify(newTodoData));
      setisEditing(false);
    };

    /**isEditing이 참이면 editing page가 나오게끔 만들기.  */
    if (isEditing) {
      return (
        <div
          className={` flex items-center justify-between w-full bg-gray-100 px-4 py-1 my-2 text-gray-600  border roduned`}
        >
          <div className="items-center">
            <form onSubmit={handleSubmit}>
              <input
                value={editedTitle}
                className="w-full px-3 py-2 mr-4 text-gray-500 rounded"
                onChange={handleEditChange}
              />
            </form>
          </div>
          <div className="items-center">
            <button
              className="px-4 py-2 float-right"
              onClick={() => {
                setisEditing(false);
              }}
            >
              x
            </button>
            <button
              className="px-4 py-2 float-right"
              type="submit"
              onClick={handleSubmit}
            >
              save
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div
          key={id}
          {...provided.draggableProps}
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          className={`${
            snapshot.isDragging ? "bg-gray-400" : "bg-gray-100"
          } flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600  border roduned`}
        >
          <div className="items-center">
            <input
              type="checkbox"
              onChange={() => handleCompleChange(id)}
              defaultChecked={false}
            />{" "}
            <span className={completed ? "line-through" : undefined}>
              {/**"none"으로안하고 undifined으로 두는이유? */}
              {title}
            </span>
          </div>
          <div className="items-center">
            <button
              className="px-4 py-2 float-right"
              onClick={() => {
                handleClick(id);
              }}
            >
              x
            </button>
            <button
              className="px-4 py-2 float-right"
              onClick={() => {
                setisEditing(true);
              }}
            >
              edit
            </button>
          </div>
        </div>
      );
    }
  }
);

export default List;

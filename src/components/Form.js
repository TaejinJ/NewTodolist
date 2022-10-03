import React from "react";

export default function Form({ value, setValue, handleSubmit }) {
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <form style={{ display: "flex" }} onSubmit={handleSubmit}>
      <input
        type="text"
        name="value"
        style={{ flex: "10", ppading: "5px" }}
        placeholder="할일을 입력하세요!"
        onChange={handleChange}
        value={value}
      />
      <input type="submit" value="입력" className="btn" style={{ flex: "1" }} />
    </form>
  );
}

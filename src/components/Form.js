import React from "react";

export default function Form({ value, setValue, handleSubmit }) {
  console.log("Form Component"); // 랜더링체크

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="flex pt-3">
      <input
        type="text"
        name="value"
        placeholder="할일을 입력하세요!"
        className="w-full px-3 py-2 mr-4 text-gray-500 border rounded shadow"
        onChange={handleChange}
        value={value}
      />
      <input
        className="p-2 text-blue-400 border-2 border-blue rounded hover:text-white hover:bg-blue-300"
        type="submit"
        value="입력"
      />
    </form>
  );
}

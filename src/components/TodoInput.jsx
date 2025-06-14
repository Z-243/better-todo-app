import { useState } from "react";

export function TodoInput(props) {
  const { handleAddTodo } = props;
  // manages the value inside todo; initial value is an empty string
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="input-container">
      <input
        // e - event; setInputValue function sets (e.target.value) as the new key of the stateful variable
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            // if no value return/exit
            if (!inputValue.trim()) {
              return; // exit early if input is empty or just spaces
            }
            handleAddTodo(inputValue);
            setInputValue("");
          }
        }}
        placeholder="Add task"
      />
      <button
        onClick={() => {
          // if no value return/exit
          if (!inputValue) {
            return;
          }
          handleAddTodo(inputValue);
          // after adding the value remove it from the add-bar
          setInputValue("");
        }}
      >
        {/* change class to className */}
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
}

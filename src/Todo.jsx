import React, { useState } from "react";
import List from "./List";
import Input from "./Input.jsx";

function Todo() {
  const [item, setItem] = useState([]);

  function handleClick(inputText) {
    setItem((prevValue) => {
      return [...prevValue, inputText];
    });
  }

  function deleteItem(id) {
    setItem((prevItem) => {
      return prevItem.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Input onAdd={handleClick} />
      <ul>
        {item.map((toDoItem, index) => (
          <List key={index} id={index} text={toDoItem} onChecked={deleteItem} />
        ))}
      </ul>
    </div>
  );
}

export default Todo;

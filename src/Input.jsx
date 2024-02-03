import React, { useState } from "react";

function Input(props) {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  return (
    <div>
      <input type="text" onChange={handleChange} value={inputText} />
      <button
        onClick={() => {
          props.onAdd(inputText);
          setInputText("");
        }}
      >
        Add
      </button>
    </div>
  );
}

export default Input;
// import React from "react";

// function Input(props) {
//   return <input type={props.type} placeholder={props.placeholder} />;
// }
// export default Input;

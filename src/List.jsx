import React from "react";

function List(props) {
  return (
    <div
      className="sub-container"
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.text}</li>
    </div>
  );
}

export default List;

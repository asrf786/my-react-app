import React from "react";
import Heading from "./Heading";
import Todo from "./Todo";

function App() {
  return (
    <div className="main-container">
      <Heading />
      <Todo />
    </div>
  );
}

export default App;

// import React, { useState } from "react";

// function App() {
//   const [fullName, setFullName] = useState({ fName: "", lName: "" });

//   function handleChange(event) {
//     // const newValue = event.target.value;
//     // const inputName = event.target.name;
//     const { value, name } = event.target;
//     setFullName((prevValue) => {
//       // if (name === "fName") {
//       //   return { fName: value, lName: prevValue.lName };
//       // } else if (name === "lName") {
//       //   return { fName: prevValue.fName, lName: value };
//       // }
//       return {
//         ...prevValue,
//         [name]: value,
//       };
//     });
//   }
//   return (
//     <div>
//       <h1>
//         Hello {fullName.fName} {fullName.lName}
//       </h1>
//       <input
//         type="text"
//         placeholder="Enter Your First Name"
//         value={fullName.fName}
//         name="fName"
//         onChange={handleChange}
//       ></input>
//       <input
//         type="text"
//         placeholder="Enter Your Last Name"
//         value={fullName.lName}
//         name="lName"
//         onChange={handleChange}
//       ></input>
//       <button>Submit</button>
//     </div>
//   );
// }

// export default App;
// // import React, { useState } from "react";

// // function App() {
// //   const [mouse, setMouse] = useState(false);
// //   const [fullName, setFullName] = useState("");
// //   // const [nameTwo, setNameTwo] = useState("");

// //   const [newName, setNewName] = useState("");

// //   function setMouseOver() {
// //     setMouse(true);
// //   }
// //   function setMouseOut() {
// //     setMouse(false);
// //   }

// //   function handleChange(event) {
// //     setName(event.target.value);
// //   }

// //   // function handleChangeTwo(event) {
// //   //   setNameTwo(event.target.value);
// //   // }

// //   function handleClick(event) {
// //     event.preventDefault();
// //     setNewName(`${name} ${nameTwo}`);
// //   }
// //   return (
// //     <div className="main-container">
// //       <form>
// //         <h1>
// //           Hello {name}
// //           {nameTwo}
// //           {newName}
// //         </h1>
// //         <input
// //           onChange={handleChange}
// //           value={name}
// //           type="text"
// //           placeholder="Enter your Name"
// //         ></input>
// //         <input
// //           onChange={handleChangeTwo}
// //           value={nameTwo}
// //           type="text"
// //           placeholder="Enter your Name"
// //         ></input>
// //         <button
// //           style={{ backgroundColor: mouse ? "pink" : "green" }}
// //           onMouseOut={setMouseOut}
// //           onMouseOver={setMouseOver}
// //           onClick={handleClick}
// //         >
// //           Submit
// //         </button>
// //       </form>
// //     </div>
// //   );
// // }
// // export default App;

// // // import React, { useState } from "react";
// // // function App() {
// // //   const now = new Date().toLocaleTimeString();
// // //   const [time, setTime] = useState(now);

// // //   function updateTime() {
// // //     const newTime = new Date().toLocaleTimeString();
// // //     setTime(newTime);
// // //   }

// // //   const start = function startInterval() {
// // //     setInterval(updateTime, 1000);
// // //   };

// // //   return (
// // //     <div className="main-container">
// // //       <h1>{time}</h1>
// // //       <button onClick={start}>Time Now</button>
// // //     </div>
// // //   );
// // // }
// // // export default App;
// // // // import React, { useState } from "react";

// // // // function App() {
// // // //   const [count, setCount] = useState(0);

// // // //   function increase() {
// // // //     setCount(count + 1);
// // // //   }

// // // //   function decrese() {
// // // //     setCount(count - 1);
// // // //   }

// // // //   return (
// // // //     <div className="main-container">
// // // //       <h1>{count}</h1>
// // // //       <button onClick={increase}>+</button>
// // // //       <button onClick={decrese}>-</button>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default App;

// // // // // import React from "react";
// // // // // import Login from "./Login";

// // // // // // // let isLoggedIn = true;
// // // // // // let isLoggedIn = false;

// // // // // function App() {
// // // // //   return (
// // // // //     <div>
// // // // //       <Login isLoggedIn={isLoggedIn} />
// // // // //     </div>
// // // // //   );
// // // // // }
// // // // // export default App;

// // // // // // import React from "react";
// // // // // // import apple from "./Array.js";
// // // // // // import Model from "./Model.jsx";

// // // // // // function App() {
// // // // // //   return (
// // // // // //     <div>
// // // // // //       {apple.map((model) => (
// // // // // //         <Model
// // // // // //           key={model.key}
// // // // // //           name={model.name}
// // // // // //           image={model.image}
// // // // // //           desc={model.desc}
// // // // // //         />
// // // // // //       ))}
// // // // // //     </div>
// // // // // //   );
// // // // // // }
// // // // // // export default App;

// // // // // // // import React from "react";
// // // // // // // import Card from "./Card.jsx";
// // // // // // // import player from "./player.jsx";

// // // // // // // function CreateCard(contact) {
// // // // // // //   return (
// // // // // // //     <Card
// // // // // // //       key={contact.key}
// // // // // // //       id={contact.key}
// // // // // // //       name={contact.name}
// // // // // // //       img_src={contact.img_src}
// // // // // // //       Mobile={contact.Mobile}
// // // // // // //       Email={contact.Email}
// // // // // // //     />
// // // // // // //   );
// // // // // // // }

// // // // // // // function App() {
// // // // // // //   console.log(player);
// // // // // // //   return (
// // // // // // //     <div className="main-container">
// // // // // // //       <h1>My Contacts</h1>
// // // // // // //       <div>{player.map(CreateCard)}</div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }
// // // // // // // export default App;

// // // // // // /* <Card
// // // // // //           name={player[0].name}
// // // // // //           img_src={player[0].img_src}
// // // // // //           Mobile={player[0].Mobile}
// // // // // //           Email={player[0].Email}
// // // // // //         />
// // // // // //         <Card
// // // // // //           name={player[1].name}
// // // // // //           img_src={player[1].img_src}
// // // // // //           Mobile={player[1].Mobile}
// // // // // //           Email={player[1].Email}
// // // // // //         />
// // // // // //         <Card
// // // // // //           name={player[2].name}
// // // // // //           img_src={player[2].img_src}
// // // // // //           Mobile={player[2].Mobile}
// // // // // //           Email={player[2].Email}
// // // // // //         /> */

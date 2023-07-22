//  when we clicl on button it will acrement some numeric number
// import { useState } from "react";
// import React  from "react";
// import "./App.css"


// const App = () => {
//   const state = useState();

//   let [count, setCount] = useState(50);

//   const IncNum = () => {
  
//     setCount(count + 1);
//   // console.log('clicked' + count++)
// };

//   return (
//     <>
//       <h1> {count} </h1>
//       <button onClick={IncNum}>Click Me</button>
//     </>
//   )
// };

// export default App;


// this is for how to show time on screen when we click the button

// import React, { useState } from "react";
// import "./App.css"
// const App = () => {
//   let newTime = new Date().toLocaleTimeString();
//   const [ctime, setCtime] = useState(newTime);

//   const updateTime = () => {
//     newTime = new Date().toLocaleTimeString();
//     setCtime(newTime)
//   };
//   return (
//     <>
//       <h1> {ctime} </h1>
//       <button onClick={updateTime}></button>
//     </>
//   )
// }
//     export default App;
  
// how to set time without clicking the button


// import React, { useState } from "react";
// import "./App.css"
// const App = () => {
//   let Time = new Date().toLocaleTimeString();
//   const [ctime, setCtime] = useState(Time);

//   const updateTime = () => {
//     Time = new Date().toLocaleTimeString();
//     setCtime(Time)
    
//   };
//   setInterval(updateTime, 1000);
//   return (
//     <>
//       <h1> {ctime} </h1>
//       {/* <button onClick={updateTime}></button> */}
//     </>
//   )
// }
//     export default App;

// when we click on button and it change the background and also the emoji
import React, { useState } from "react";
import "./App.css";



const App = () => {
  
  let purple = "#FFFF00";
  const [bg, setBg] = useState(purple);
  const[name, setName] = useState('CLICK ME')

  const bgChnage = () => {
    let newBg = "#FF0000";
    setBg(newBg)
    setName("Ohuu!!! 🥇")
    
  };

  return (
    <>
      <h1>  </h1>
      <button onClick={bgChnage}> {name}</button>
    </>
  )
}
    export default App;
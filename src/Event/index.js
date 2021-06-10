import React, { useState } from "react";
import "./Event.css";

const Event = () => {
  const [value, setValue] = useState("Satyabrat kr.");
  const changeValue = () => {
    setValue("Shibu mishra");
  };
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={changeValue}>Click Me</button>
    </div>
  );
};
export default Event;

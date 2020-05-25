import React, { useState } from "react";

import { ReactDatez } from "react-datez";
import "./styles/main.scss";

export default function App() {
  const [dateInput, setDateInput] = useState("");

  return (
    <div className="form">
      <label htmlFor="exampleDate2">Check-in Date</label>
      <ReactDatez
        name="dateInput"
        handleChange={value => {
          setDateInput(value);
        }}
        value={dateInput}
      />
    </div>
  );
}

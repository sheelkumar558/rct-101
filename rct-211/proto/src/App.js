import React, { useState } from "react";
import "./App.css";
import Pin from "./Components/Pin";

function App() {
  const [otp, setOtp] = useState("");
  return (
    <div className="App">
      <Pin
        length={4}
        setOtpHandler={(value) => {
          setOtp(value);
        }}
      />
      <h4>The value of otp is {otp}</h4>
    </div>
  );
}

export default App;

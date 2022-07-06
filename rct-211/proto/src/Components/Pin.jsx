import React, { useRef, useState } from "react";
import propTypes from "prop-types";
import PinItem from "./PinItem";

const Pin = ({ length, setOtpHandler }) => {
  let [inputBoxLen] = useState(new Array(length).fill(1));
  let inputRef = useRef([]);
  const [inputBoxValue, setInputBoxValue] = useState(
    new Array(length).fill("")
  );
  const handleChenge = (e, index) => {
    inputBoxValue[index] = e.target.value;
    setInputBoxValue(inputBoxValue);
    if (e.target.value.length > 0 && index < length - 1) {
      inputRef.current[index + 1].focus();
    }
    console.log(inputBoxValue);
    setOtpHandler(inputBoxValue.join(""));
  };

  const handleBackSpace = (e, index) => {
    if (index > 0) {
      inputRef.current[index - 1].focus();
    }
    inputBoxValue[index] = e.target.value;
    setInputBoxValue(inputBoxValue);
    setOtpHandler(inputBoxValue.join(""));
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const data = e.clipboardData
      .getData("text")
      .split("")
      .filter((item, index) => index < length);
     data.forEach((value,index )=> {
        inputBoxValue[index] = value;
        inputRef.current[index].value = value;
        if(index < length-1){
            inputRef.current[index+1].focus();
        }
     });
  };

  return (
    <div
      onPaste={handlePaste}
      style={{ display: "flex", justifyContent: "center" }}
    >
      {inputBoxLen.map((_, index) => {
        return (
          <PinItem
            key={index}
            onChengeHandler={(e) => handleChenge(e, index)}
            ref={(element) => {
              inputRef.current[index] = element;
            }}
            onBackSpaceHandler={(e) => handleBackSpace(e, index)}
          />
        );
      })}
    </div>
  );
};

Pin.propTypes = {
  length: propTypes.number,
  onChenge: propTypes.func,
};

export default Pin;

import React from "react";

const Fillters = ({ fillter, fillterBy, updateFillter }) => {
  return (
    <div className="container restaurants">
      <h1>50 restaurants</h1>
      <div className="restaurant-options">
        {Object.entries(fillter).map(([key,value]) => (
          <div key={key} className="restaurant-option" onClick={()=> updateFillter(key)}>
            {value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fillters;

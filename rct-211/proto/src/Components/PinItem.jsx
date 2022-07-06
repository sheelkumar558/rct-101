import React, { forwardRef } from "react";

const PinItem = forwardRef(({ onChengeHandler,value,onBackSpaceHandler }, ref) => {
   const handlerKeyUp=(e)=>{
     if(e.keyCode === 8 && !e.target.value){
        onBackSpaceHandler(e);
     }else{
        onChengeHandler(e);
     }
   }
  
    return (
    <div>
      <input
      type={'text'}
       ref={ref}
        maxLength={1} 
        value={value}
      // onChange={onChengeHandler} 
           onKeyUp={handlerKeyUp}
       />
    </div>
  );
});

export default PinItem;

import { COUNT_DEC, COUNT_DIVI, COUNT_INC, COUNT_MULT } from "./action.type";

export const reducer = (state,{type,payload}) => {
  switch(type){
      case COUNT_INC: {
          state.count=state.count+payload;
          return {...state};
      }
      case COUNT_DEC : {
        state.count=state.count-payload;
        return {...state};
    }
    case COUNT_MULT: {
        state.count=state.count*payload;
        return {...state};
    }
    case COUNT_DIVI : {
        state.count=state.count/payload;
      return {...state};
  }
    default : {
      return state;
    }
  }
};

import { COUNT_DEC, COUNT_DIVI, COUNT_INC, COUNT_MULT } from "./action.type";


export const add= (value)=>({type : COUNT_INC,payload : value});
export const sub= (value)=>({type : COUNT_DEC,payload : value});
export const mul= (value)=>({type : COUNT_MULT,payload : value});
export const div= (value)=>({type : COUNT_DIVI,payload : value});
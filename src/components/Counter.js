
import {useRef, useState} from "react"
// import { useCounter ,useWindowSize } from "../hoooks/use-counter";

export default function Counter(){
   
    const[number,setNumber]=useState(0);
//    const[num,inc,dec]= useCounter(1)
//  const[width,height]=useWindowSize();
//  console.log(width);
//  console.log(height);

    console.log("render counter");
    let numb=useRef(0);
    const handleClick=(e)=>{
        e.stopPropagation()
        setTimeout(()=>{
            setNumber(number=>number+1);
        },2000)

setNumber(number=>number+1);
setNumber(number=>number+1);
setNumber( number=>number+1);
numb.current++;
// console.log(number);
console.log(numb.current);

    }

    return(
        <>
        <h1 style={{color:"black"}}>{number}</h1>
        <button onClick={handleClick}>Increment</button>
        {/* <h1 style={{color:"black"}}>Counter Hooks:{num}</h1>
        <button style={{color:"black"}} onClick={inc}>Increment</button>
        <button style={{color:"black"}} onClick={dec}>Decrement</button> */}
        </>
    )
}
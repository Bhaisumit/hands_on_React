// import {useState } from "react";


// export default  function Events(){
//     const[change,setChange]=useState(false);
// const handleMouseOut=()=>{
//     // e.stopPropagation();
//     setChange(false);

// }
//     const handleMouseOver=()=>{
//         // e.stopPropagation();
//         setChange(true);
// console.log("hogya");
//     }
//     const focus=()=>{
//         // e.stopPropagation();
//         console.log("focus hogya bhai")

//     }
//     const blur=()=>{
//         // e.stopPropagation();
//         console.log("out of textbox");

//     }
//     const cut=(e)=>{
//         // e.stopPropagation();
//         console.log(e.target.value);

//     }
//     const paste=(e)=>{
//         // e.stopPropagation();
//         console.log(e.target.value);

//     }
//     const keyDown=(e)=>{
//         // e.stopPropagation();
//         if(e.keyCode==13){
//             console.log("enter");
//         }
//         // console.log(e.target.value);

//     }
//     return(
//         <div>
//         <img  onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}style={change ?{transform:"scale(1.4)"}:{}} src="https://picsum.photos/id/1/150/90"/>
//        <button>Submit</button>
//        <input onKeyDown={keyDown} onCut={cut} onPaste={paste} onFocus={focus} onBlur={blur} type="text" name="" id="" />
    
//         </div>
//     );
// }
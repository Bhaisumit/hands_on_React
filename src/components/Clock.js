// import {useState,useEffect} from "react"

// const startDate=new Date()
// export default function Clock(){
//     // let date=new Date(); 
//     const[date,setDate]=useState(new Date())
//    const [startDate,setStartDate]=useState(new Date())

//     // setInterval(()=>{
//     //     setDate(new Date())
//     // },1000)
//     useEffect(()=>{
//       const id=  setInterval(()=>{
//                 setDate(new Date())
//             },1000)
//             console.log(id);
            
//     },[])
//     return(
//         <>
//         {/* <h2>time is {date.toString()}</h2> */}
//         <button onClick={()=>setStartDate(new Date())}>Reset</button>
//         <h2 style={{color:"green"}}>time is {Math.floor((date-startDate)/(1000*3600))%24+":"+Math.floor((date-startDate)/(1000*60))%60+":" +Math.floor((date-startDate)/1000)%60}</h2>
//        {/* <button onClick={()=>setTime()}>Set time</button> */}
//        </>
//     );
// }
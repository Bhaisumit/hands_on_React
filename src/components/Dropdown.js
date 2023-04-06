// import { useState } from "react";

// const Dropdown = () => {
//     const [option,setOption]=useState([]);
//     const[nation,setNation]=useState({name:"",value:""})
//   const handleChange = (e) => {
//     console.log(e.target.value);
//   };
//   const handleInput=(e)=>{
//     setNation({...nation,
//     [e.target.name]:[e.target.value]
//     }
//     )

//   }
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if(nation.name && nation.value){
//         setOption([...option,
//             nation
//          ]
        
//         );
//         setNation({name:"",value:""})
//     }
//     else{
//        console.log("enter valid values")
//     }
   
//   };

//   return (
//     <>
//       <select onChange={handleChange}>
//         <option value="IN">--Select--</option>
//         {option.map(op=><option  value={op.value}>{op.name}</option>)}
      
//       </select>
//       <form onClick={handleSubmit}>
//         <input type="text" name="name" placeholder="name" value={nation.name} onChange={handleInput}></input>
//         <input type="text" name="value" placeholder="value"  value={nation.value} onChange={handleInput}></input>
//         <button>Submit</button>
//       </form>
//     </>
//   );
// };
// export default Dropdown;

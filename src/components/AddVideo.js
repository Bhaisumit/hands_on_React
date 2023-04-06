import './AddVideo.css'
import {useState , useEffect, useRef} from "react"
import useVideoDispatch from '../hooks/VideosDispatch'
// import Videosdispatch from '../context/Videosdispatch'

const initialState={
    time: "2 months ago",
    channel: "coderdost",
    verified: true,
    title:"",
    views:""
}


export default function AddVideo({updateVideo,editableVideo}) {
    const[video,setVideo]=useState(initialState)
    const dispatch=useVideoDispatch();
    const inputRef=useRef(null)
    // const dispatch=useContext(Videosdispatch);
    // const[editable,setEditable]=useState({title:"",views:"",id:""});
    function handleSubmit(e){
        e.preventDefault();
        if(editableVideo){
          // console.log("heelo");
dispatch({type:'UPDATE',payload:video})
        }
        else{
          dispatch({type:'ADD',payload:video})
         }
    
        setVideo(initialState)
        // console.log(video)


    }
    function handleChange(e){
// console.log(e.target.name,e.target.value);
setVideo({...video,
[e.target.name]:e.target.value})
// console.log(video)
// console.log(b);
    }

    // if(editableVideo!==editable){
    //   console.log({editable,editableVideo})
    //   setVideo(editableVideo);
    //   // setEditable(editableVideo)
    // }
    // if(editableVideo){
    //   console.log('editable');
    //   setVideo(editableVideo);
    // }
    useEffect(()=>{

      if(editableVideo)
      {
      setVideo(editableVideo);}
      inputRef.current.focus();
      inputRef.current.placeholder="";
"type here".split("").forEach((char,i)=>{
  setTimeout(()=>{
    inputRef.current.placeholder= inputRef.current.placeholder+char;
  },400*i)
})
    },[editableVideo])
  return (
    <>
      <form>
        <input ref={inputRef} type="text" name="title"  value={video.title} onChange={handleChange} placeholder="title"></input>
        <input type="text" name="views"  value={video.views} onChange={handleChange} placeholder="views"></input>
      </form>

      <button

      onClick={handleSubmit}
        // onClick={() => {
        //   setVideos([
        //     ...videos,
        //     {
        //       id: videos.length + 1,
        //       title: "Reactjs tutorial",
        //       views: "20k",
        //       time: "2 months ago",
        //       channel: "coderdost",
        //       verified: true,
        //     },
        //   ]);
        // }}
      >
        
       {editableVideo ?"Edit Video" :"ADD video"}
       
      </button>
    </>
    // <button onClick={()=>{

    //     setVideos( [...videos,{
    //       id:videos.length+1,
    //       title:"Reactjs tutorial",
    //       views:"20k",
    //       time:"2 months ago",
    //       channel:"coderdost",
    //       verified:true
    //     }])}}>ADD video</button>
  );
}

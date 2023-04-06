// import Video from "./components/Video"

// import Video from "./components/Video";
// import List from "./components/List"
import{ useReducer} from "react"
import {useState} from "react"
import "./App.css";
import AddVideo from "./components/AddVideo";
import videoDB from "./data/data";

// import PlayButton from "./components/PlayButton";
// import Counter from "./components/Counter";


import Videolist from "./components/Videolist";
import ThemeContext from "./context/ThemeContext";
import VideosContext from "./context/VideosContext";
import Videosdispatch from "./context/Videosdispatch";
import Counter from "./components/Counter";
// import Dropdown from "./components/Dropdown";
// import Input from "./components/Input"
// import Showfilter from "./components/Showfilter";
// import Input from "./components/Input"
// import Clock from "./components/Clock";
// import Events from "./components/Events";

function App() {
  const[editableVideo,setEditableVideo]=useState(null);
  const[mode,setMode]=useState('lightMode');

  function videoReducer(videos,action){
    switch(action.type){
      case 'ADD':
        // return
        
        return [

          ...videos,
    
          {...action.payload, id:videos.length+1  }
        ]
        case 'DELETE':
          return(
            videos.filter(video=>video.id!=action.payload)
          )
          case 'UPDATE':
            const index=videos.findIndex(v=>v.id===action.payload.id)
            const newVideos=[...videos]
            setEditableVideo(null)
            newVideos.splice(index,1,action.payload)
            return newVideos
            
            
          
        default :
        return videos
    }

  }
 const[videos,dispatch]=useReducer(videoReducer,videoDB)
//  const themeContext=useContext(ThemeContext)
//  console.log(themeContext)
  // const[videos,setVideos]=useState(videoDB)

  // const [filtereditem, setFlitereditem] = useState(videos);
  // function addVideos(video){
    // dispatch({type:'ADD' , payload:video});
    // action : {type:'add ' , payload:video}
    // setVideos([...videos,
    
    //   {...video, id:videos.length+1}
    // ])
  // }

  function deleteVideo(id){
    dispatch({type:'DELETE' , payload:id})
// console.log(id);
// setVideos(
//   videos.filter(video=>video.id!=id)
// )

  }
  function editVideo(id){
   setEditableVideo(videos.find(v=>v.id===id)) 
// console.log(editableVideo);
  }
  // function updateVideo(video){
  // dispatch({type:'UPDATE',payload:video})
// console.log(newVideos);
// setVideos(newVideos)



// console.log(newVideos);
  // }

  // function HandleChange(e) {
  //   // useEffect(() => {
  //     setTimeout(() => {
  //       setFlitereditem(
  //         videos.filter((it) => it.title.indexOf(e.target.value) > -1)
  //       );
  //     });
  //   }
  return (
    <>
    {/* <ThemeContext></ThemeContext> */}
    <Counter></Counter>
    <ThemeContext.Provider value={mode}>
      <VideosContext.Provider value={videos}>
        <Videosdispatch.Provider value={dispatch}>
      <button style={{color:'black',backgroundColor:"lightgrey"}} onClick={()=>setMode(mode==='darkMode'?'lightMode':'darkMode')}>Mode</button>
    <div className={`App ${mode}`} >
      <div>
{/* <Dropdown></Dropdown> */}
{/* <Input HandleChange={HandleChange}></Input> */}
{/* <Showfilter filtereditem={filtereditem}></Showfilter> */}
{/* <Filtered items={videos}></Filtered> */}
        <AddVideo  editableVideo={editableVideo} ></AddVideo>
        <Videolist  editVideo={editVideo}  ></Videolist>
      {/* <button onClick={()=>{
      
      setVideos( [...videos,{
        id:videos.length+1,
        title:"Reactjs tutorial",
        views:"20k",
        time:"2 months ago",
        channel:"coderdost",
        verified:true
      }])}}>ADD video</button> */}
        </div>

     
      {/* <Counter></Counter> */}
      {/* <Clock></Clock> */}
      {/* <Events></Events> */}
      {/* <div style={{ clear: "both" }}> */}
        {/* <PlayButton  message="pause msg"  onSmash={(message)=>{alert(message)}}>Play</PlayButton> */}
      {/* </div> */}

      {/* <Border/> */}
      {/* <Video 
      {...videos}
      /> */}
      {/* <Video
        title="Nodejs tutorial"
        views="20k"
        time="2 months ago"
        channel="sumitcoder"
      />
       <Video
        title="Mongo DB tutorial"
        views="40k"
        time="1 months ago"
        channel="pepcoding"
      /> */}

      {/* <Thumb/> */}
    </div>
    </Videosdispatch.Provider>
    </VideosContext.Provider>
    </ThemeContext.Provider>
    </>
  );
}

export default App;

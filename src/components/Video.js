
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
// import Videosdispatch from "../context/Videosdispatch";
import useVideoDispatch from "../hooks/VideosDispatch";
import "./Video.css";


function Video({ title,id, channel, views, time,verified ,children,editVideo}) {
  //    console.log(props);
  const theme=useContext(ThemeContext)
  const dispatch=useVideoDispatch();
  
  // let  channelJSX;
  // if (verified){
  //    channelJSX= <div className="channel">{channel} </div>
  // }
  // else{
  //   channelJSX= <div className="channel">{channel}✅ </div>
  // }

  
  
  return (
    <>
    
      <div className={`container $(theme)`}>
        <button className="close" onClick={()=>dispatch({type:'DELETE',payload:id})}>X</button>
        <button className="edit" onClick={()=>editVideo(id)}>Edit</button>
        <div>
          <img src={`https://picsum.photos/id/${id}/240/90`} alt="Katherine Johnson" />
        </div>

        <div className="title">{title} </div>
        <div className="channel">{channel} {verified &&'✅'}</div>
        
        {/* <div className="channel">{channel} ✅</div> */}
        <div className="views">
          {views} views <span>.</span>
          {time}{" "}
        </div>
        <div>
          {children}
        </div>
      </div>
    </>
  );
}

export default Video;

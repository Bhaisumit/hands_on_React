
import Video from "./Video"
import PlayButton from "./PlayButton";
// import VideosContext from "../context/VideosContext";
// import { useContext } from "react";
import useVideos from "../hooks/Videos";
export default function Videolist({editVideo}){
  const videos=useVideos();
    return(
        <>
        {videos.map((video) => (

            <Video
              key={video.id}
              title={video.title}
              views={video.views}
              time={video.time}
              channel={video.channel}
              verified={video.verified}
              id={video.id}
              
              editVideo={editVideo}
            
             
            >
             {
              // <div>
              //  <List layout="numbered" >{videos}</List>
              //  <List layout="alpha" >{videos}</List>
              //  <List layout="hh" >{videos}</List>
               /* <List layout="alpha" items={videos}/>
               <List layout="bullet" items={videos}/> */
              //  </div>
             }
              <PlayButton
               
                onPlay={() => {
                  console.log("play ",video.title);
                }}
                onPause={() => {
                  console.log("pause",video.title);
                }}
              >
                {video.title}
              </PlayButton>
            </Video>
          ))}
          </>
    )

}
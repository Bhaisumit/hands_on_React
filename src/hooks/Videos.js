import { useContext } from "react";
import VideosContext from "../context/VideosContext";
import Videosdispatch from "../context/Videosdispatch";


function useVideos(){
    return useContext(VideosContext)

}
export default useVideos;
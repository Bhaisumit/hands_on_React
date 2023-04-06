import { useContext } from "react";
import Videosdispatch from "../context/Videosdispatch";


function useVideoDispatch(){
    return useContext(Videosdispatch)

}
export default useVideoDispatch
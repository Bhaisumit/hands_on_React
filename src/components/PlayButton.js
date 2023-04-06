
import './PlayButton.css'
import {useContext, useState} from 'react';
import ThemeContext from '../context/ThemeContext';
function PlayButton({message,children,onPlay,onPause}){
    const theme=useContext(ThemeContext)
    const[playing,setPlaying]=useState(true);

    // let playing=false; // dont use this approach
    function handleClick(e){
        
        e.stopPropagation();
        // console.log(onClick);

if (playing) onPause()
else onPlay();
setPlaying(!playing)
    }
    return(
<div>
{/* {playing?'>':"||"} */}
    <button  className={theme} onClick={handleClick}>{children}{playing?'⏯️':"⏸️"}</button>
</div>
    );
}
export default PlayButton
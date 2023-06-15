import { useState } from 'react'
import './App.css'
import pads from "./pads"

function App() {
  const [padPlayed, setPadPlayed] = useState("")

  const displayPads = pads.map((pad, i) => (
      <div 
        key={pads[i].id} 
        id={pads[i].id} 
        className='drum-pad'
        onClick={()=>playSound(pads[i])}
        >
        <audio className='clip' id={pads[i].key} src={pads[i].sound}></audio>
          {pads[i].key}
      </div>))

    function playSound(pad) {
      const audioTag = document.getElementById(pad.key)
      audioTag.currentTime = 0
      audioTag.play()
      setPadPlayed(pad.id)
      
    }

    function handleKeyPress (event) {
      const padFound = pads.find( pad => pad.keyCode === event.keyCode)
      padFound && playSound(padFound)        
    }
    document.addEventListener("keydown", handleKeyPress)


  return (
    <div className='drum-machine' id="drum-machine">
      <h2 className='title'>FreeCodeCamp <br />Drum Machine</h2>
     
      <div id='display' className='played-display'>{padPlayed}</div>
      
      <div className='pad-display'> 
        {displayPads}
      </div>
      <p className='footer'>This is part of the <a href='https://www.freecodecamp.org/' target="_blank">FreeCodeCamp</a> frontend certification.</p>
    </div>   
  )
}
export default App

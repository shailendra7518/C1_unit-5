import { useState } from "react"
import "../components/Groceryinput.css"
export function Groceryinput({additem}) {
  const [text,settext]=useState("")
  return <div id="main_div">
    <input type="text" name="" id="" onChange={(event) => {
      settext(event.target.value)
    }} />
    <button onClick={()=>additem(text)} >ADD</button>
    
      </div>
}
 

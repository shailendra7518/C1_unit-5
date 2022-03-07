import { useState } from "react"
import { Groceryinput } from "./GroceryInput"
import { Grocerylist } from "./GroceryList"
import "../components/Grocery.css"
export function Grocery() {
  let [alltext, setalltext] = useState([])
  let additem = (data) => {
    let paylod = {
      id:Math.random().toString(16).slice(2),
      title: data,
      status: false,
      
    }
 
    setalltext([...alltext,paylod])
    
  }
  function del(fin) {
    
    let ans=alltext.filter((ele) => {
      if (ele.id !== fin) {
       console.log(fin)
         return ele
     }
    })
  setalltext([...ans])
 }
  return <div id="list">
    <Groceryinput additem={additem} />
    {alltext.map((ele) => {
     return < Grocerylist item={ele} del={del}  />
    
  })}
  </div>
}
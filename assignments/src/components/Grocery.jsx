import { useState } from "react"
import { Groceryinput } from "./GroceryInput"
import { Grocerylist } from "./GroceryList"
import "../components/Grocery.css"
import { useEffect } from "react"
export function Grocery() {
  let [alltext, setalltext] = useState([])
  let additem = (data) => {
    let paylod = {
      id:Math.random().toString(16).slice(2),
      title: data,
      status: false,
      
    }
   

    fetch("https://shailendrae-app.herokuapp.com/data", {
      method: "POST",
      body: JSON.stringify(paylod),
      headers: {
        "content-type":"application/json"
      }
      })
      setalltext([...alltext,paylod])
   
    
  }



  function getdata() {
    fetch("https://shailendrae-app.herokuapp.com/data")
    .then(x => x.json())
    .then(item =>setalltext([...item]));
  }
  useEffect(() =>{
    getdata()
  },[])

  
  
  function del(fin) {

    let ans = alltext.filter((ele) => {
      if (ele.id !== fin) {
        return ele
      }
      
    })

setalltext([...ans])


    fetch(`https://shailendrae-app.herokuapp.com/data/${fin}`, {
      method: "DELETE",
      headers: {
        "content-type":"application/json"
      }
      })
     
   }
  
  function change_status(get_id) {
    let ans = alltext.filter((ele) => {
      if (ele.id == get_id) {
        if (ele.status == false) {
          ele.status=true
        } else {
          ele.status=false
        }
      }
      return ele
    })

    setalltext([...ans])

  }


  return <div id="list">
    <Groceryinput additem={additem} />
    <div className="main_item_div"> {alltext.map((ele) => {
     return <  Grocerylist item={ele} del={del} change_status={change_status} key={ele.id} />
    
  })}</div>
   
  </div>
}
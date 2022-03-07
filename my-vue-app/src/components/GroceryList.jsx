import "../components/Grocerylist.css"


export const Grocerylist = ({ item, del }) => {
  return <div className="item_div"> <h2> Name:{item.title}</h2>
  <h2>Status:{item.status ? "done" : "Pending"}</h2>
  <button onClick={()=>del(item.id)}>Delete</button>
  </div>

 

}
import "../components/Grocerylist.css"


export const Grocerylist = ({ item, del ,change_status}) => {
  return <div className="item_div"> <h2> {item.title}</h2>
  <button onClick={()=>change_status(item.id)} >{item.status ? "done" : "Pending"}</button>
  <button onClick={()=>del(item.id)}>Delete</button>
  </div>

 

}
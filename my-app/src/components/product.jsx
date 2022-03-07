

import React,{ useState } from "react";

export function Product() {
  
  const [book,setbook]= useState(13)
  const [pen, setpen] = useState(10)
  const [notebook,setnotebook]= useState(44)

  const [inkpen,setinkpen]= useState(78)
 
 return <>
  
   {/* this is for book */}
   <div className="items">
    <span>Books</span>
    <button className="addBook" onClick={()=>setbook(book+1)} >add book</button>
    <button className="remBook" onClick={()=>setbook(book-1)} >remove book</button>
    <span className="totalBooks">{book}</span>
      </div>
      

<div className="items">
    <span>Pens</span>
    <button className="addPen" onClick={()=>setpen(pen+1)}>add pen</button>
    <button className="remPen" onClick={()=>setpen(pen-1)}>remove pen</button>
    <span className="totalPens">{pen}</span>
</div>

     
<div className="items">
    <span>Notebooks</span>
    <button className="addNotebook" onClick={()=>setnotebook(notebook+1)}>add notebook</button>
    <button className="remNotebook" onClick={()=>setnotebook(notebook-1)}>remove notebook</button>
    <span className="totalNotebooks">{notebook}</span>
      </div> 
      
          
<div className="items">
    <span>Inkpens</span>
    <button className="addInkpen" onClick={()=>setinkpen(inkpen+1)}>add inkpen</button>
    <button className="remInkpen" onClick={()=>setinkpen(inkpen-1)}>remove inkpen</button>
    <span className="totalInkpens">{inkpen}</span>
</div> 

<div className="total">{book+inkpen+pen+notebook}</div>
  
  
  
  
  
  </>

}
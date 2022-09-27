import React from 'react'
const Book =({name,price})  =>{ 
 
  return (
    <div className="Book">
        <hr></hr>
       <p> Book_Title: {name}  </p>
       <p> Book_Price : {price} </p>
     
    </div>
  )
}

export default Book

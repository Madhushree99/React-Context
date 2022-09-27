import {React,useContext} from 'react'
import { BookContext } from '../BookContext/BookContext' 

const Nav=()=> {
  const [book,setbook] = useContext(BookContext);
  return (
    <div className='nav'>
        <h3>Book list</h3>
        <p> <b>Total books: {book.length} </b></p>
    </div>
  )
}

export default Nav
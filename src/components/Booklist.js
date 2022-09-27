import {React,useState,useContext} from 'react'
import Book from './Book'
import { BookContext } from '../BookContext/BookContext'

const Booklist = ()=> {
const [book,setbook] = useContext(BookContext)
    

  return (
    <div>
   
    {book.map(book =>(
        <>
        <div className='Book'>
       
        <Book name={book.name} price={book.price} key={book.id} /> 
       
        </div>
        </> 
        
    ))}
    </div>
  )
}

export default Booklist
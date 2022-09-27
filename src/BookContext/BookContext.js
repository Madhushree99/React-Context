import {React,useState,createContext} from 'react'

export const BookContext = createContext(); 
export const BookProvider =(props)=>{ 
    const [book,setbook] = useState([
        {
            name: 'Harry Potter',
            price: "500 Rs",
            id:1
        },
        {
            name: 'Narnia',
            price: "400 Rs",
            id:2
        },
        {
          name: 'Lion King',
          price: "600 Rs",
          id:3
        }
      ])
        return(
          <BookContext.Provider value={[book,setbook]}>

            {props.children}
          </BookContext.Provider>
        )
}
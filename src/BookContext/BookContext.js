import {React,useState,createContext} from 'react'

export const BookContext = createContext(); 
export const BookProvider =(props)=>{ 
    const [book,setbook] = useState([
        {
            name: 'React',
            price: "Rs. 500",
            id:1
        },
        {
            name: 'Angular',
            price: "Rs. 350",
            id:2
        },
        {
          name: 'Angular JS',
          price: "Rs. 200",
          id:3
        }
      ])
        return(
          <BookContext.Provider value={[book,setbook]}>

            {props.children}
          </BookContext.Provider>
        )
}
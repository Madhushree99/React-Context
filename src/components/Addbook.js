import React, { useState, useContext } from 'react'
import { BookContext } from '../BookContext/BookContext'

const Addbook = () => {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [books, setbooks] = useContext(BookContext)

  const updateName = (e) => {
    setName(e.target.value)
  }
  const updatePrice = (e) => {
    setPrice(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setbooks((prevbooks) => [  
      ...prevbooks, 
      { name: name, price: price, id: new Date().getTime() },
    ])
    setName('')
    setPrice('')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Name</label>
        <input type="text" name="name" value={name} onChange={updateName} required/>
        <label htmlFor="">Price</label>
        <input type="text" name="price" value={price} onChange={updatePrice} required/>
        <br/>
        <button>Submit</button>
      </form>
    </>
  )
}

export default Addbook


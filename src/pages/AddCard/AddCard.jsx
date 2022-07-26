import { useState, useRef, useEffect } from 'react'
import {Link, useNavigate} from "react-router-dom"



function AddCard(props) {
  const navigate = useNavigate
  const [formData, setFormData] = useState({
    title: ""
  })

  const handleChange = evt => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
	}

  const handleSubmit = async e => {
    e.preventDefault()
    try { 
      //call to backend goes here  
      navigate('/')
    } catch (err) {
      
    }
	}

  return (
    <>
      <h1>Add a Card</h1>
      <form autoComplete='off' ref={formElement} onSubmit={handleSubmit}>
        <div className='card-title'>
          <label>
            Title: 
          </label>
          <input 
            type="text"
            className='card-title'
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
          </div>
          {/* <div className='card-term'>
          <label>
            Term: 
          </label>
            <textarea 
              name="term" 
              id="term-card" 
              cols="10" 
              rows="6">
            </textarea>          
          </div>
          <div className='def-card'>
          <label 
            htmlFor="card-def" 
            className='card-def'
            >
            Definition:
          </label>
          <textarea 
              name="definition" 
              id="term-card" 
              cols="10" 
              rows="6">
            </textarea> 
        </div> */}
        <div className='submit-btn'>
          <button
            type='submit'
            className='sub-btn'
            >
            Submit

          </button>

        </div>

      </form>
    </>
  )
}

export default AddCard
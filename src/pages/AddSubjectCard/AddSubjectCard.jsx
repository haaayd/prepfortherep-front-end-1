import { useState } from 'react'
import {Link, useNavigate} from "react-router-dom"



function AddSubjectCard(props) {
  const navigate = useNavigate
  const [formData, setFormData] = useState({
    title: "",
    term: "",
    definition: "",
    // m: false,
  })

  const handleChange = evt => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
	}
  // const handleToggle = (evt) => {
  //   setFormData({ ...setFormData,[evt.target.name]: !!evt.target.value })
  // }

  const handleSubmit = async e => {
    e.preventDefault()
    try { 
      props.handleAddCard(formData) 
      navigate('/')
    } catch (err) {
      console.log(err)
    }
	}

  const {title} = formData

  const isFormInvalid = () => {
    return !(title)
  }

  return (
    <>
      <h1>Add a Card</h1>
      <form autoComplete='off' onSubmit={handleSubmit}>
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
          <div className='card-term'>
          <label>
            Term: 
          </label>
            <textarea 
              name="term"
              onChange={handleChange}
              value={formData.term}
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
              value={formData.definition}
              onChange={handleChange}
              id="term-card" 
              cols="10" 
              rows="6">
            </textarea> 
        </div>
        {/* <div className='card-mastered'>
          <label>
            Mastered:
          </label>
          <input 
            type="checkbox"
            className='card-m'
            name="mastered"
            value={formData.m}
            onChange={handleToggle}
            />
            
          </div> */}
        <div className='submit-btn'>
          <button
            type='submit'
            className='sub-btn'
            disabled={isFormInvalid()}
            >
            Submit

          </button>
          <Link to="/">
          <button>Cancel</button>
        </Link>

        </div>

      </form>
    </>
  )
}

export default AddSubjectCard
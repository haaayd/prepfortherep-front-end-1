import { useState } from 'react'
import {Link, useNavigate} from "react-router-dom"



function AddTerm(props) {
  const navigate = useNavigate
  const [formData, setFormData] = useState({
    term: '',
    definition: '',
    mastered: false
  })

  const handleChange = evt => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
	}

  const handleSubmit = async e => {
    e.preventDefault()
    try { 
      navigate('/cards')
    } catch (err) {
      console.log(err)
    }
	}

  const {term, definition, mastered} = formData

  const isFormInvalid = () => {
    return !(term && definition && mastered)
  }

  return (
    <>
    <form autoComplete='off' onSubmit={handleSubmit}>
      <div className='card-term'>
        <label>
        Term: 
        </label>
          <textarea 
         name="term" 
         value={formData.term}
         onChange={handleChange}
         required
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
         value={formData.term}
         onChange={handleChange}
         id="term-card" 
         cols="10" 
         rows="6">
       </textarea> 
  </div>
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
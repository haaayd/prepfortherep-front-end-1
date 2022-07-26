import { useState } from 'react'


function AddCard(props) {
  return (
    <>
      <h1>Add a Card</h1>
      <form autoComplete='off'>
        <div className='card-title'>
          <label>
            Title: 
          </label>
          <input
            type="text"
            className='card-title'
            name="title"
            required
          />
          </div>
          <div className='card-term'>
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
        </div>
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
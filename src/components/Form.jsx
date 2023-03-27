import React from 'react'
import './Form.css'

const Form = ({setCity}) => {

  const [inputValue, setInputValue] = React.useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setCity(inputValue)
        setInputValue('')
    }
    
  return (
    <div className='form_wrapper'>
        <form onSubmit={handleSubmit}>
            <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder='Enter city' type='text'/>
        </form>
    </div>
  )
}

export default Form

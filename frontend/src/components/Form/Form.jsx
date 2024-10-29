import React from 'react'
import './form.css'

function Form() {
  return (
    <form className="form">
      <input
        type="email"
        placeholder="email@company.com"
        aria-label="Email address"
        required
      />
      <button type="submit">Subscribe to monthly newsletter</button>
    </form>
  )
}

export default Form

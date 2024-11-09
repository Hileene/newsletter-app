import React from 'react'
import './form.css'

function Form() {
  return (
    <form className="signup-form">
      <label className="signup-form-label" htmlFor="email" name="email">
        Email address
      </label>
      <input
        type="email"
        placeholder="email@company.com"
        aria-label="Email address"
        className="signup-form-input"
        required
      />
      <button type="submit" className="signup-form-btn">
        Subscribe to monthly newsletter
      </button>
    </form>
  )
}

export default Form

import React from 'react'
import SuccessIcon from '../../assets/images/icon-success.svg'
import './success.css'

function Success({ onDismiss }) {
  return (
    <div className="success-container">
      <img src={SuccessIcon} alt="Success Icon" />
      <h1>Thanks for subscribing!</h1>
      <p>
        A confirmation email has been sent to ash@loremcompany.com. Please open
        it and click the button inside to confirm your subscription.
      </p>
      <button className="dismiss-btn" onClick={onDismiss}>
        Dismiss message
      </button>
    </div>
  )
}

export default Success

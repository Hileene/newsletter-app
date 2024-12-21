import React from 'react'
import SuccessIcon from '../../assets/images/icon-success.svg'
import './success.css'

function Success({ onDismiss }) {
  return (
    <div className="success-container">
      <div className="success-content">
        <img className="success-icon" src={SuccessIcon} alt="Success Icon" />
        <div>
          <h1 className="success-heading">Thanks for subscribing!</h1>
          <p className="newsletter-text">
            A confirmation email has been sent to&nbsp;
            <strong>ash@loremcompany.com</strong>. Please open it and click the
            button inside to confirm your subscription.
          </p>
        </div>
      </div>
      <button className="btn" onClick={onDismiss}>
        Dismiss message
      </button>
    </div>
  )
}

export default Success

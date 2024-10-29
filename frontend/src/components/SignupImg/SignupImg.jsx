import React from 'react'
import mobileImg from '../../assets/images/illustration-sign-up-mobile.svg'
import desktopImg from '../../assets/images/illustration-sign-up-desktop.svg'
import './signupimg.css'

function SignupImg() {
  return (
    <picture>
      <img
        src={mobileImg}
        alt="Signup Illustration"
        className="signup-image_mob"
      />
      <img
        src={desktopImg}
        alt="Signup Illustration"
        className="signup-image_desk"
      />
    </picture>
  )
}

export default SignupImg

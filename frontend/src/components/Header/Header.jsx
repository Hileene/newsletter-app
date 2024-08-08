import React from 'react'
import SignupImg from '../../assets/images/illustration-sign-up-mobile.svg'
import { Box, Typography } from '@mui/material'
import './header.css'

function Header() {
  return (
    <header>
      <img src={SignupImg} alt="Signup Illustration" className="signup-img" />
      {/*Customized Material UI components to override default styles*/}
      <Box sx={{ fontFamily: 'Roboto,sans-serif' }}>
        <div className="signup-content">
          <Typography
            sx={{ fontWeight: '700', fontSize: '2.5rem' }}
            variant="h1"
          >
            Stay updated!
          </Typography>
          <Typography sx={{ fontWeight: '400', fontSize: '1rem' }}>
            Join 60,000+ product managers receiving monthly updates on:
          </Typography>
        </div>
      </Box>
    </header>
  )
}

export default Header

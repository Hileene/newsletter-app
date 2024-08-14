import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import mobileImg from '../../assets/images/illustration-sign-up-mobile.svg'
import desktopImg from '../../assets/images/illustration-sign-up-desktop.svg'

function SignupImg() {
  const [newImage, setNewImage] = useState(
    window.innerWidth < 900 ? mobileImg : desktopImg
  )

  useEffect(() => {
    const handleResize = () => {
      setNewImage(window.innerWidth < 900 ? mobileImg : desktopImg)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <Box
      component="img"
      sx={{
        width: { xs: '100%', sm: '100%', md: 'auto' },
        height: { sm: 'auto', md: '100%' },
      }}
      src={newImage}
      alt="Signup Illustration"
    />
  )
}

export default SignupImg

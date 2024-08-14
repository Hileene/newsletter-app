import React from 'react'
import { Box, Typography } from '@mui/material'

function Header() {
  return (
    <Box
      sx={{
        fontFamily: 'Roboto, sans-serif',
        textAlign: { xs: 'left', md: 'left' },
        padding: '1rem',
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontWeight: '700',
          fontSize: { xs: '2rem', md: '3rem' },
          lineHeight: '1.2',
          color: 'hsl(234, 29%, 20%)',
          marginBottom: '1rem',
        }}
      >
        Stay updated!
      </Typography>
      <Typography
        sx={{
          fontWeight: '400',
          fontSize: { xs: '1rem', md: '1.25rem' },
          color: 'hsl(234, 29%, 20%)',
        }}
      >
        Join 60,000+ product managers receiving monthly updates on:
      </Typography>
    </Box>
  )
}

export default Header

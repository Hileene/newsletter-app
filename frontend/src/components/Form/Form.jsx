import React from 'react'
import { Box, TextField, Button, FormLabel } from '@mui/material'

function Form() {
  return (
    <Box
      component="form"
      sx={{
        fontFamily: 'Roboto, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        width: { xs: '100%', md: '80%' },
        textAlign: 'left',
        padding: '0 1rem 1rem',
      }}
    >
      <FormLabel
        sx={{
          fontWeight: '700',
          color: 'hsl(234, 29%, 20%)',
          fontSize: { xs: '0.75rem', md: '1.125rem' },
          paddingBottom: '1rem',
        }}
      >
        Email address
      </FormLabel>
      <TextField
        placeholder="email@company.com"
        type="email"
        variant="outlined"
        fullWidth
        sx={{
          '& .MuiInputBase-input': {
            padding: '1rem',
          },
          '& .MuiOutlinedInput-root': {
            borderRadius: '0.5rem',
          },
          color: 'hsl(235, 18%, 26%)',
          marginBottom: '2rem',
        }}
      />
      <Button
        variant="contained"
        sx={{
          backgroundColor: 'hsl(234, 29%, 20%)',
          padding: '1rem',
          borderRadius: '0.5rem',
          fontWeight: '700',
          fontSize: '1rem',
          color: 'white',
          textTransform: 'none',
          '&:hover': {
            backgroundColor: 'hsl(4, 90%, 60%)',
          },
        }}
        fullWidth
      >
        Subscribe to monthly newsletter
      </Button>
    </Box>
  )
}

export default Form

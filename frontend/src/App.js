import './App.css'
import { Grid, Container, Box } from '@mui/material'
import SignupImg from './components/SignupImg/SignupImg'
import Header from './components/Header/Header'
import IconList from './components/IconList/IconList'
import Form from './components/Form/Form'

function App() {
  return (
    <Box
      sx={{
        backgroundColor: { sm: 'hsl(234, 29%, 20%)', md: 'hsl(234, 29%, 20%)' },
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: { xs: '0', md: '1rem 5rem', lg: '1rem 7rem' },
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          backgroundColor: 'white',
          borderRadius: '20px',
          display: 'flex',
          padding: '0',
          flexDirection: { xs: 'column', md: 'row' },
          boxShadow: {
            sm: '0px 10px 30px rgba(0, 0, 0, 0.1)',
            md: '0px 10px 30px rgba(0, 0, 0, 0.1)',
          },
        }}
      >
        {/* Signup Image on top in mobile */}
        <Box
          sx={{
            width: { xs: '100%', sm: 'auto', md: '100%', lg: 'auto' },
            display: { xs: 'flex', md: 'none' },
          }}
        >
          <SignupImg />
        </Box>
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              /*padding: { xs: '1rem 0', md: '1rem 1rem' },*/
              padding: { xs: '3rem', md: '3rem 2rem 2rem 3rem' },
              margin: '0',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}
          >
            <Header />
            <IconList />
            <Form />
          </Grid>

          {/* Signup Image on right in desktop version */}
          <Grid
            item
            md={6}
            sx={{
              padding: { md: '1rem' },
              display: { xs: 'none', md: 'block' },
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <SignupImg />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default App

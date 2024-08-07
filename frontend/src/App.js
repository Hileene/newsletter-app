import './App.css'
import { Container } from '@mui/material'
import Header from './components/Header/Header'

function App() {
  return (
    <Container
      sx={{ paddingLeft: '0', paddingRight: '0' }}
      className="signup-container"
    >
      <Header />
    </Container>
  )
}

export default App

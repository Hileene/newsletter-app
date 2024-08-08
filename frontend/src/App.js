import './App.css'
import { Container } from '@mui/material'
import Header from './components/Header/Header'
import IconList from './components/IconList/IconList'

function App() {
  return (
    /*Customized Material UI components to override default styles*/
    <Container
      sx={{ paddingLeft: '0', paddingRight: '0' }}
      className="signup-container"
    >
      <Header />
      <IconList />
    </Container>
  )
}

export default App

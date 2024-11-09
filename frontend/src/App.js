import './App.css'
import SignupImg from './components/SignupImg/SignupImg'
import Header from './components/Header/Header'
import IconList from './components/IconList/IconList'
import Form from './components/Form/Form'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <main className="signup-container">
      <div className="signup-preview">
        <SignupImg />
      </div>
      <div className="signup-content">
        <Header />
        <IconList />
        <Form />
        <Footer className="signup-footer" />
      </div>
    </main>
  )
}

export default App

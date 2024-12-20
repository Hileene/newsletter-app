import './App.css'
import SignupImg from './components/SignupImg/SignupImg'
import Header from './components/Header/Header'
import IconList from './components/IconList/IconList'
import Form from './components/Form/Form'
import Footer from './components/Footer/Footer'
import Success from './components/Success/Success' // Import du composant Success
import { useState } from 'react'

function App() {
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSuccess = () => {
    setIsSuccess(true) // Affiche la modale
  }

  const handleDismiss = () => {
    setIsSuccess(false) // Ferme la modale
  }

  return (
    <main>
      <section className="signup-section">
        <div className="signup-container">
          <div className="signup-preview">
            <SignupImg />
          </div>
          <div className={`signup-content ${isSuccess ? 'blurred' : ''}`}>
            <Header />
            <IconList />
            <Form onSuccess={handleSuccess} />
            <Footer className="signup-footer" />
          </div>

          {/* Modale Success */}
          {isSuccess && (
            <div className="modal-overlay">
              <div className="modal-content">
                <Success onDismiss={handleDismiss} />
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

export default App

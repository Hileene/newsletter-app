import React, { useState } from 'react'

import './form.css'

function Form({ onSuccess }) {
  const [email, setEmail] = useState('') // Stocke l'email
  const [error, setError] = useState(false) // Contrôle l'état de l'erreur

  // Validation de l'email avec une regex stricte
  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return regex.test(email)
  }

  // Gestionnaire de soumission
  const handleSubmit = (e) => {
    e.preventDefault() // Empêche le rechargement de la page
    if (!validateEmail(email)) {
      setError(true) // Affiche le message d'erreur
    } else {
      setError(false) // Efface les erreurs
      onSuccess() // Appelle la fonction pour afficher la page Success
    }
  }
  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <label className="signup-form-label" htmlFor="email">
        Email address
      </label>
      {/* Message d'erreur */}
      {error && <p className="error-message">Valid email required</p>}{' '}
      <input
        id="email"
        placeholder="email@company.com"
        aria-label="Email address"
        className={`signup-form-input ${error ? 'input-error' : ''}`} // Classe dynamique pour l'erreur
        value={email}
        onChange={(e) => {
          setEmail(e.target.value) // Met à jour l'email
          setError(false) // Réinitialise l'erreur si l'utilisateur modifie le champ
        }}
        //required
      />
      <button type="submit" className="signup-form-btn">
        Subscribe to monthly newsletter
      </button>
    </form>
  )
}

export default Form

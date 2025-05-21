const form = document.querySelector('.signup-form')
const emailInput = document.querySelector('.email-input')
const errorMessage = document.querySelector('.error-message')
console.log({ form, emailInput, errorMessage })

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const email = emailInput.value.trim()
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  const isValid = emailPattern.test(email)

  if (!isValid) {
    emailInput.classList.add('input-error', 'shake')
    errorMessage.classList.add('visible')
    setTimeout(() => {
      emailInput.classList.remove('shake')
    }, 400)
  } else {
    emailInput.classList.remove('input-error')
    errorMessage.classList.remove('visible')
    // Tu peux afficher le message de succès ici
    alert('Subscribed!')
  }
})

emailInput.addEventListener('input', () => {
  emailInput.classList.remove('input-error')
  errorMessage.classList.remove('visible')
})

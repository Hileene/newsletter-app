import React from 'react'

function Footer({ className }) {
  return (
    <div className={`signup-footer ${className}`}>
      {' '}
      Challenge by{' '}
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        rel="noreferrer"
      >
        Frontend Mentor
      </a>
      . Coded by{' '}
      <a href="https://www.frontendmentor.io/profile/Hileene">Aline Behalal</a>.
    </div>
  )
}

export default Footer

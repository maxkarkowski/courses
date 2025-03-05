import React from 'react'

export default function WelcomeMessage({ user }) {
  return (
    <div>
      <h1>Willkommen {user.name}</h1>
    </div>
  )
}

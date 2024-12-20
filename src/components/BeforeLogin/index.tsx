import React from 'react'

const BeforeLogin: React.FC = () => {
  return (
    <div className="beforeLogin">
      {/* eslint-disable @next/next/no-img-element */}
      <img
        alt="Mensch Hund Systeme"
        width={80}
        height={80}
        loading="lazy"
        fetchPriority="low"
        decoding="async"
        src="/logo.png"
      />
    </div>
  )
}

export default BeforeLogin

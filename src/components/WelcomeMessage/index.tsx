import clsx from 'clsx'
import React from 'react'
const WelcomeMessage: React.FC = () => {
  return (
    <div>
      {/* eslint-disable @next/next/no-img-element */}
      <img
        alt="Mensch Hund Systeme"
        width={80}
        height={80}
        loading="lazy"
        fetchPriority="low"
        decoding="async"
        className={clsx('max-w-[9.375rem] w-full h-[80px]')}
        src="/logo.png"
      />
    </div>
  )
}

export default WelcomeMessage

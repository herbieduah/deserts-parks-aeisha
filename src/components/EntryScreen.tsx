import React from 'react'

interface EntryScreenProps {
  onStart: () => void
}

export const EntryScreen: React.FC<EntryScreenProps> = ({ onStart }) => {
  return (
    <div className="entry-screen">
      <div className="hero-section">
        <div className="hero-image">
          <img src="/assets/hero-image.png" alt="Aiesha Beasley" />
        </div>
        <div className="hero-content">
          <h1 className="hero-title">Desert Spark Cards</h1>
          <h2 className="hero-subtitle">with Aiesha Beasley</h2>
          <p className="hero-tagline">
            From first date jitters to cozy nights in — let's spark something
            real.
          </p>
        </div>
      </div>

      <button className="btn btn-primary" onClick={onStart}>
        Let's Start
      </button>
    </div>
  )
}

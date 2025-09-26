import React from 'react'

interface EntryScreenProps {
  onStart: () => void
}

export const EntryScreen: React.FC<EntryScreenProps> = ({ onStart }) => {
  return (
    <div className="entry-screen">
      <div className="hero-image">
        <img src="/assets/hero-image.png" alt="Aiesha Beasley" />
      </div>

      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Desert Spark Cards</h1>
          <h2 className="hero-subtitle">with Aiesha Beasley</h2>
          <p className="hero-tagline">
            Waiting for food in Phoenix? Don’t waste the moment: spark the kind
            of talk that turns a date into a memory.
          </p>
        </div>
      </div>
      <div className="start-button-container">
        <button
          className="btn btn-primary"
          onClick={onStart}
          style={{ position: 'relative', zIndex: 3 }}
        >
          Let's Start
        </button>
      </div>

      {/* Footer positioned below start button */}
      <div className="footer entry-footer">
        <span className="footer-text">Powered by</span>
        <img src="/assets/opnrs-logo.svg" alt="Opnrs" className="footer-logo" />
        <span className="footer-text">opnrs</span>
      </div>
    </div>
  )
}
